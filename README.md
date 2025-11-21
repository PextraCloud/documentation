# Pextra Inc. Documentation

[![Deploy](https://github.com/PextraCloud/documentation/actions/workflows/deploy.yml/badge.svg)](https://github.com/PextraCloud/documentation/actions/workflows/deploy.yml)

The latest build of the documentation is available [here](https://docs.pextra.cloud). Documentation is built and deployed automatically upon commits to `master`.

## Usage

Documentation is built with [mdBook](https://github.com/rust-lang/mdBook). The minimum version is `0.5.0`.

### Prerequisites

The following mdBook plugins must be installed:
- [`mdbook-llms-txt-tools`](https://github.com/PextraCloud/mdbook-llms-txt-tools)

### Development

To serve the documentation locally, run `mdbook serve --open`.
The default port is **3000**.

After building, directories in the output directory (`book/`) are merged together by running [merge-dirs.pl](./merge-dirs.pl) (see [.github/workflows/deploy.yml](.github/workflows/deploy.yml) for details). This is necessary for the `llms.txt` files to be correctly placed in the root of the output directory, along with the markdown output for the aforementioned `llms.txt` files, and static files, such as `robots.txt`.

## License

This repository is licensed under [CC BY-SA 4.0](./LICENSE).
