# Organization Management
Organizations are top-level isolated tenants within Pextra CloudEnvironment®. They encapsulate datacenters, clusters, nodes, and resources, providing administrative boundaries for managing users, permissions, and resource allocation.

Currently, creating a new organization is supported only via the API. This will be addressed in a future release.

> [!NOTE]
> Multiple organizations require the `MULTI_TENANCY` feature flag. See the [Feature Gating](./licensing/feature-gating.md) section for details.

The ID prefix for organizations is `org-`[^1].

## Notes

[^1]: Resources in Pextra CloudEnvironment® are identified by unique IDs. Organization IDs have the prefix `org-`, followed by a unique identifier (e.g., `org-CIgLySkaAVeQ5kSLOodD3`).

