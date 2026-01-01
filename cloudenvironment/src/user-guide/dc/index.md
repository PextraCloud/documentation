# Datacenter Management

Datacenters represent logical groupings of clusters within an organization. They help structure resources and provide administrative boundaries for managing clusters and nodes.

> [!NOTE]
> The `MULTI_DATACENTER` feature flag must be enabled to create more than one datacenter per organization. See the [Feature Gating](../organizations/licensing/feature-gating.md) section for details.

Currently, datacenter creation is supported only via the API. This will be addressed in a future release.

The ID prefix for datacenters is `dc-`[^1].

## Notes

[^1]: Resources in Pextra CloudEnvironment® are identified by unique IDs. Datacenter IDs have the prefix `dc-`, followed by a unique identifier (e.g., `dc-VrP6KxEw19aQb2hTnY4Ld`).
