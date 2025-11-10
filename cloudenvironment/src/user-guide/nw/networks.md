# Network Management

Networking in Pextra CloudEnvironment® is configured at the **node (server) level**. Each node has physical NICs that can be virtualized to create virtual networks for your instances.

To set up networking:

1. Click on the node in the left navigation panel.
2. On the right, select the **Network** tab.

   ![Node Networking Tab](./images/nw-general.png)

From this tab, you can manage:

- **vSwitches** – Create and configure virtual switches to connect virtual machines.
- **Port Groups** – Define network segments and VLANs for instance traffic.
- **NICs** – Assign physical NICs to virtual switches or manage virtual NICs.

> [!TIP]
> Plan your network layout carefully, including VLANs and port groups, before assigning NICs to virtual switches. This ensures proper isolation and connectivity between instances.
