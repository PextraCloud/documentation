# Tags

Resource tags let you annotate various resources with key/value metadata. Keys are required, values are optional, and tags appear anywhere the resource identity is shown (resource tree, selectors, and detail panes). This makes it easy to track ownership, label business units, or indicate lifecycle stages.

> [!TIP]
> Tag colors are generated automatically from the key name. The color is deterministic, which keeps the same key visually consistent across the UI.

## Supported Resource Types
Currently, the following resource types support tags:
- Organizations
- Datacenters
- Clusters
- Nodes
- Instances

>[!IMPORTANT]
> Tags with keys starting with `pce_` are reserved for system use. Attempting to create, edit, or delete a tag with this prefix will fail.