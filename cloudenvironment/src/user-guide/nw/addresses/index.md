# Node Addresses
Node addresses are configured at the node level and control which IPs Pextra CloudEnvironment® uses for various types of traffic, including management and internal cluster communication. Each address can be assigned one or more roles, with a default address implicitly assigned any role not explicitly assigned to another address.

> [!WARNING]
> All node addresses assigned to a role must be mutually reachable (each address with that role can reach every other address with that role). Connections using unreachable addresses may fail, which can result in cluster instability or loss of management access.

## Limitations
- As of `v2.3.0`, only one address per interface is supported (no dual-stack). This will be addressed in a future release.
- You cannot assign a node address to a vSwitch uplink. This will result in connectivity loss after applying changes.

## Forbidden Subnets
Pextra CloudEnvironment® blocks node addresses in the following subnets:

> [!NOTE]
> Addresses in these subnets are reserved for special purposes by the IANA and cannot be used for node addresses.

- **IPv4**
    - `0.0.0.0/8` ("This" Network)
    - `127.0.0.0/8` (Loopback)
    - `169.254.0.0/16` (IPv4 Link-Local)
    - `100.64.0.0/10` (CGNAT)
    - `224.0.0.0/4` (Multicast, includes broadcast)
    - `192.0.2.0/24` (TEST-NET-1)
    - `240.0.0.0/4` (Reserved for Future Use)
    - `192.51.100.0/24` (TEST-NET-2)
    - `203.0.113.0/24` (TEST-NET-3)
    - `192.88.99.0/24` (6to4 Relay Anycast, deprecated)
    - `198.18.0.0/15` (Network Interconnect Device Benchmark Testing)
- **IPv6**
    - `::/128` ("This" Network, Unspecified)
    - `::1/128` (Loopback)
    - `::/96` (IPv4-mapped IPv6 addresses)
    - `::ffff:0:0/96` (IPv4-mapped IPv6 addresses)
    - `100::/64` (Discard-Only)
    - `2001::/23` (6to4)
    - `2001:2::/48` (Benchmarking)
    - `2001:10::/28` (Deprecated, previously ORCHID)
    - `2001:20::/28` (ORCHIDv2)
    - `2001:db8::/32` (Documentation)
    - `64:ff9b::/96` (IPv4/IPv6 Translation)
    - `64:ff9b:1::/48` (IPv4/IPv6 Translation)
    - `fe80::/10` (Link-Local)
    - `ff00::/8` (Multicast)

The ID prefix for node addresses is `naddr-`[^1].

## Notes

[^1]: Resources in Pextra CloudEnvironment® are identified by unique IDs. Node address IDs will have the prefix `naddr-`, followed by a unique identifier (e.g., `naddr-RqP1zhgvLT3qasUOvI5DW`).
