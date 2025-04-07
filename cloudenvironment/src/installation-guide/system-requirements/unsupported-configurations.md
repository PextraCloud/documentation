# Unsupported Configurations
Pextra CloudEnvironment® runs on a variety of hardware configurations, but there are certain configurations that are not supported. This list is not exhaustive, but it covers the most common unsupported configurations. If you encounter any issues with your server configuration, please contact support for assistance.

## Hardware-Based RAID Cards
Hardware-based RAID cards are **NOT** supported. The platform requires direct access to the underlying storage devices for optimal performance and reliability. Hardware RAID can introduce complexity and potential issues with data integrity, especially in virtualized environments.

**Workaround:** For each disk, create a RAID0 (striped) array with a single disk.

> [!WARNING]
> This has been reported to work, but it is not officially supported. Use this workaround at your own risk.

## ARM-Based CPUs
Currently, Pextra CloudEnvironment® does not support ARM-based CPUs (e.g., `aarch64`), although this may change in the future. The platform is only supported on 64-bit CPUs with the `amd64` architecture.

**Workaround:** Use a different server with an `amd64` CPU architecture.

## 32-Bit CPUs
Pextra CloudEnvironment® does not support 32-bit CPUs. The platform requires a 64-bit CPU. 32-bit CPUs will never be supported.

**Workaround:** Use a different server with a 64-bit CPU architecture.