import Bun from 'bun';
import { availableParallelism } from 'os';
import path from 'path';
import sharp from 'sharp';
import { optimize } from 'svgo';
import pLimit from 'p-limit';

const RASTER_QUALITY = 80;
const IMAGE_EXTENSIONS = ['png', 'jpg', 'jpeg', 'webp', 'svg'] as const;

type ImageExtension = typeof IMAGE_EXTENSIONS[number];
type OptimizationFunction = (inputPath: string, outputPath: string) => Promise<ResultFile | null>;
const RASTER_EXTENSIONS: Array<ImageExtension> = ['png', 'jpg', 'jpeg', 'webp'];
const SVG_EXTENSIONS: Array<ImageExtension> = ['svg'];
const GLOB_TEMPLATE = `/**/*.{${IMAGE_EXTENSIONS.join(',')}}`;

const IMAGE_DIRS: Array<string> = [
    './cloudenvironment/src',
];

type ResultFile = {
    /* Path to the optimized file */
    path: string;
    /* Original size in bytes */
    originalSize: number;
    /* Optimized size in bytes */
    optimizedSize: number;
    /* Percentage reduction in size */
    reduction: number;
    /* Image format (png, jpeg, webp, svg) */
    format: ImageExtension;
}
type ResultWarning = {
    /* Path to the file that generated the warning */
    file: string;
    /* Warning message */
    message: string;
}
type Results = {
    /* Total number of images processed */
    total: number;
    /* Number of images successfully optimized */
    optimized: number;
    /* Number of images skipped (unsupported format) */
    skipped: number;
    /* Number of errors encountered */
    errors: number;
    /* Total original cumulative size of all images */
    totalOriginalSize: number;
    /* Total optimized cumulative size of all images */
    totalOptimizedSize: number;
    /* List of individual file optimization results */
    files: Array<ResultFile>;
    /* List of warnings encountered during optimization */
    warnings: Array<ResultWarning>;
};

const results: Results = {
    total: 0,
    optimized: 0,
    skipped: 0,
    errors: 0,
    totalOriginalSize: 0,
    totalOptimizedSize: 0,
    files: [],
    warnings: [],
};

/** Format bytes to human-readable string (`1.23 MB`) */
const bytesToHumanReadable = (bytes: number): string => {
    if (bytes === 0) {
        return '0 B';
    }
    const k = 1024;
    const sizes = ['B', 'KiB', 'MiB', 'GiB', 'TiB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const optimizeRasterImage: OptimizationFunction = async (inputPath, outputPath) => {
    const originalStats = await Bun.file(inputPath).stat();
    const originalSize = originalStats.size;

    let transform = sharp(inputPath);

    // Optimize based on format with deterministic settings
    const metadata = await transform.metadata();
    const format = metadata.format ?? 'png';

    if (format === 'png') {
        transform = transform.png({
            compressionLevel: 9,
            effort: 10,
        });
    } else if (format === 'jpeg') {
        transform = transform.jpeg({
            quality: RASTER_QUALITY,
            mozjpeg: true,
        });
    } else if (format === 'webp') {
        transform = transform.webp({
            quality: RASTER_QUALITY,
            effort: 4,
        });
    } else {
        throw new Error(`Unsupported raster image format: ${format}`);
    }

    const buffer = await transform.toBuffer();
    const optimizedSize = buffer.length;

    const reduction = originalSize - optimizedSize;
    const reductionPercent = parseFloat((reduction / originalSize * 100).toFixed(2));

    const isValidReduction = reductionPercent > 0;
    if (isValidReduction) {
        await Bun.write(outputPath, buffer);
    }

    const result: ResultFile = {
        path: inputPath,
        originalSize,
        optimizedSize,
        reduction: reductionPercent,
        format,
    };
    return result;
}

const optimizeSvg: OptimizationFunction = async (inputPath, outputPath) => {
    const originalStats = await Bun.file(inputPath).stat();
    const originalSize = originalStats.size;

    const svgContent = await Bun.file(inputPath).text();
    const optimizeResult = optimize(svgContent, {
        path: inputPath,
        multipass: true,
        js2svg: {
            pretty: false,
            indent: 0,
        },
    });

    const optimizedSize = optimizeResult.data.length;
    const reduction = originalSize - optimizedSize;
    const reductionPercent = parseFloat((reduction / originalSize * 100).toFixed(2));

    const isValidReduction = reductionPercent > 0;
    if (isValidReduction) {
        await Bun.write(outputPath, optimizeResult.data);
    }

    const result: ResultFile = {
        path: inputPath,
        originalSize,
        optimizedSize,
        reduction: reductionPercent,
        format: 'svg',
    };
    return result;
}


/**
 * Process a single file
 */
const processFile = async (filePath: string) => {
    // Remove leading dot
    const ext = path.extname(filePath).toLowerCase().replace(/^\./, '') as ImageExtension;
    const outputPath = filePath; // Overwrite in place

    const originalStats = await Bun.file(filePath).stat();
    results.total++;

    let optimizationFunction: OptimizationFunction | null = null;
    if (RASTER_EXTENSIONS.includes(ext)) {
        optimizationFunction = optimizeRasterImage
    } else if (SVG_EXTENSIONS.includes(ext)) {
        optimizationFunction = optimizeSvg
    } else {
        results.skipped++;
        return;
    }

    let result: ResultFile | null = null;
    try {
        result = await optimizationFunction(filePath, outputPath);
    } catch (error) {
        console.error(`Error optimizing ${filePath}: ${String(error)}`);
        results.errors++;
        return;
    }

    if (result !== null) {
        results.files.push(result);
        const isValidReduction = result.reduction > 0;
        if (!isValidReduction) {
            const didIncrease = result.reduction < 0;
            results.warnings.push({
                file: filePath,
                message: didIncrease ? `Image size increased by ${Math.abs(result.reduction)}%` : "Image size unchanged",
            });
            results.skipped++;
        } else {
            results.optimized++;
            results.totalOriginalSize += originalStats.size;
            results.totalOptimizedSize += result.optimizedSize;
        }

        console.log(`${isValidReduction ? '✓' : '⚠ (skipped)'} ${path.relative('./', filePath)}: ${bytesToHumanReadable(result.originalSize)} → ${bytesToHumanReadable(result.optimizedSize)} (${result.reduction}%)`);
    }
}

const main = async () => {
    console.log('Starting image optimization...\n');
    const start = performance.now();

    // Collect all images
    const globs: Array<Bun.Glob> = IMAGE_DIRS.map(dir => new Bun.Glob(`${dir}${GLOB_TEMPLATE}`));
    const files: Array<string> = globs.flatMap(glob => Array.from(glob.scanSync()));

    if (files.length === 0) {
        console.log('No images found to process.');
        return;
    }                                                                           

    console.log(`Found ${files.length} images to process\n`);
    console.log("—".repeat(50));

    // Process files (limit parallelism to available CPU cores)
    const nproc = availableParallelism();
    const limit = pLimit(nproc);
    await Promise.all(files.map(file => limit(() => processFile(file))));

    // Compute and display results
    const duration = ((performance.now() - start) / 1000).toFixed(2);

    // Cumulative optimization results
    const totalSaved = results.totalOriginalSize - results.totalOptimizedSize;
    const totalSavedPercent = ((totalSaved / results.totalOriginalSize) * 100).toFixed(2);

    console.log("—".repeat(50));
    if (results.warnings.length > 0) {
        console.log(`\n⚠️  ${results.warnings.length} file(s) were skipped due to warnings:`);
        console.log(results.warnings.map(w => `-  ${w.file}: ${w.message}\n`).join(''));
    }

    console.log(`\n📊 Optimization completed in ${duration}s:`);
    console.log(`-  Total images processed:  ${results.total}`);
    console.log(`-  Successfully optimized:  ${results.optimized}`);
    console.log(`-  Skipped:                 ${results.skipped}`);
    console.log(`-  Errors:                  ${results.errors}`);
    console.log(`\n💾 Saved ${bytesToHumanReadable(totalSaved)}:`);
    console.log(`-  Original size:  ${bytesToHumanReadable(results.totalOriginalSize)}`);
    console.log(`-  Optimized size: ${bytesToHumanReadable(results.totalOptimizedSize)}`);
    console.log(`-  Total saved:    ${bytesToHumanReadable(totalSaved)} (${totalSavedPercent}%)`);

    if (results.errors > 0) {
        console.log(`\n❌ Completed with ${results.errors} error(s)`);
        process.exit(1);
    }
    console.log('\n✅ Image optimization completed successfully!');
}

main();
