# Hardware Requirements
Every node running Pextra CloudEnvironment® must meet the following minimum hardware requirements. These requirements are designed to ensure optimal performance and reliability of the platform.

## Minimum Hardware Requirements

> [!NOTE]
> While it is possible to run the platform with these specifications, it is not recommended for deployment in production environments.

| Component | Requirement |
|-----------|---------------------|
| CPU       | 4 cores, x86_64/aarch64[^1], VT-x/AMD-V, AVX2[^2] |
| Memory    | 8 GB |
| Storage   | 16 GB HDD |
| Network   | 1 Gbps |

## Recommended Hardware Requirements
> [!NOTE]
> The recommended hardware requirements are based on the average workload of a small to medium-sized business. For larger deployments, consider scaling up the hardware specifications accordingly.

| Component | Requirement |
|-----------|---------------------|
| CPU       | 8 cores |
| Memory    | 32 GB |
| Storage   | 128 GB SSD |
| Network   | 1 Gbps |

## Notes

[^1]: The platform is only supported on 64-bit CPUs with the `x86_64` (`amd64`) or `aarch64` (`arm64`) architectures. `arm64` support was added in release `1.10.5+6816a0c`. 32-bit CPUs will never be supported.
[^2]: These extensions are supported by all modern CPUs. The platform may function without virtualization extensions (VT-x/AMD-V), but AVX2 is a strict requirement. Running the platform without virtualization extensions is not supported nor recommended.
