#!/usr/bin/perl
# Merge multiple directories into one, preserving structure and contents.
use strict;
use warnings;
use File::Copy::Recursive qw(dircopy);
use File::Path qw(make_path);
use File::Spec;

if (@ARGV < 2) {
    die "Usage: $0 <source_dir1> [source_dir2 ...] <output_dir>\n";
}
# Get output directory (last arg), remaining args are source directories
my $output_dir = pop @ARGV;
my @source_dirs = @ARGV;

foreach my $source_dir (@source_dirs) {
    unless (-d $source_dir) {
        die "Error: Source directory '$source_dir' does not exist\n";
    }
}

unless (-d $output_dir) {
    make_path($output_dir) or die "Error: Cannot create output directory '$output_dir': $!\n";
}

my $num_source_dirs = scalar @source_dirs;
print "Merging $num_source_dirs directories into: $output_dir\n";
foreach my $source_dir (@source_dirs) {
    print "Merging: $source_dir\n";
    dircopy($source_dir, $output_dir) or warn "Warning: Failed to copy some files from '$source_dir': $!\n";
}
print "Merge completed successfully\n";
