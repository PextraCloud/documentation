# Organization Management

The **Organization Management** section allows administrators to manage and configure organizational tenants within Pextra CloudEnvironment®. Each organization is a fully isolated tenant with its own users, resources, and settings.

Currently, creating a new organization is supported only via the API. This will be addressed in a future release.

> [!NOTE]
> Multiple organizations require the `MULTI_TENANCY` feature flag, available in the Enterprise edition and higher. See [Organization Licensing](./licensing.md) for edition behavior and gated features.

The ID prefix for organizations is `org-`[^1].

## Notes

[^1]: Resources in Pextra CloudEnvironment® are identified by unique IDs. Organization IDs have the prefix `org-`, followed by a unique identifier (e.g., `org-CIgLySkaAVeQ5kSLOodD3`).

