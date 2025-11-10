# Datacenter Management

The **Datacenter Management** section allows administrators to organize and manage clusters within logical groupings called **datacenters**. A datacenter provides a higher-level abstraction for grouping clusters—typically based on geography, purpose, or administrative domain.

The ID prefix for datacenters is `dc-`[^1].

> [!TIP]
> A datacenter can contain multiple clusters. You can also specify a **geographical location** for each datacenter to help identify its physical or logical placement.

> [!TIP]
> Creating a **new datacenter** is currently supported **only via API**.

## Notes

[^1]: Resources in Pextra CloudEnvironment® are identified by unique IDs. Datacenter IDs have the prefix `dc-`, followed by a unique identifier (e.g., `dc-VrP6KxEw19aQb2hTnY4Ld`).
