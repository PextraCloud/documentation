# Pextra Inc. Documentation

[![Deploy](https://github.com/PextraCloud/documentation/actions/workflows/deploy.yml/badge.svg)](https://github.com/PextraCloud/documentation/actions/workflows/deploy.yml)

The latest build of the documentation is available [here](https://docs.pextra.cloud). Documentation is built and deployed automatically upon commits to `master`.

## Usage

Documentation is built with [mdBook](https://github.com/rust-lang/mdBook).

### Prerequisites

The following mdBook plugins must be installed:
- `mdbook-alerts`
- `mdbook-linkcheck`

Each plugin can be installed with the following command:

```bash
cargo install <plugin-name>
```

### Development

To serve the documentation locally, run `mdbook serve --open`.
The default port is **3000**.

## License

This repository is licensed under [CC BY-SA 4.0](./LICENSE).
