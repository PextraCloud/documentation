# How do I change the DNS servers of a node?
Pextra CloudEnvironment® uses CoreDNS for cluster DNS resolution. External DNS queries are forwarded to upstream DNS servers. To change the **upstream** DNS servers used by nodes, create a CoreDNS drop-in configuration to override the default upstream servers:

1. Create a drop-in file with the following format under `/etc/coredns/conf.d/`:
    ```bash
    echo "forward . <DNS_SERVER_1> <DNS_SERVER_2> <DNS_SERVER_N>" > /etc/coredns/conf.d/custom-upstream.conf
    ```

    Example:
    ```bash
    echo "forward . 192.0.2.1 192.0.2.2" > /etc/coredns/conf.d/custom-upstream.conf
    ```
2. Apply the CoreDNS configuration change.
    ```bash
    systemctl reload coredns
    ```

> [!NOTE]
> Up to 15 DNS servers can be specified in the `forward` rule.

## Default Upstream Servers
The following default fallback servers are used if no upstreams are configured:

- `9.9.9.9` (Quad9)
- `1.1.1.1` (Cloudflare)
- `8.8.8.8` (Google)

## Reference
For advanced configuration, see [https://coredns.io/plugins/forward/](https://coredns.io/plugins/forward/).
