# Node Addresses
Node addresses are configured at the node level and control which IPs Pextra CloudEnvironment® uses for various types of traffic, including management and internal cluster communication. Each address can be assigned one or more roles, with a default address implicitly assigned any role not explicitly assigned to another address.

> [!WARNING]
> All node addresses assigned to a role must be mutually reachable (each address with that role can reach every other address with that role). Connections using unreachable addresses may fail, which can result in cluster instability or loss of management access.

## Limitations
- As of `v2.3.0`, only one address per interface is supported (no dual-stack). This will be addressed in a future release.
- You cannot assign a node address to a vSwitch uplink. This will result in connectivity loss after applying changes.

## Forbidden Subnets
Pextra CloudEnvironment® blocks node addresses in the following subnets:
<!-- TODO -->

The ID prefix for node addresses is `naddr-`[^1].

## Notes

[^1]: Resources in Pextra CloudEnvironment® are identified by unique IDs. Node address IDs will have the prefix `naddr-`, followed by a unique identifier (e.g., `naddr-RqP1zhgvLT3qasUOvI5DW`).
