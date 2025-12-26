# License Management

The **License Management** section explains how licensing works in the Pextra Cloud Environment®. Licenses are assigned **per node**, giving you flexibility when scaling your environment.

To obtain licenses, access the **customer portal**:  
[https://portal.pextra.cloud/](https://portal.pextra.cloud)


From the portal, you can generate, assign, and manage all required licenses for your nodes.


Once a license is applied to a node, it is marked as **Activated** in the customer portal.

All license-related tasks are handled through the customer portal, where you can:
- View all licenses across your organization
- Configure annual renewals
- Track license usage and activation status

> [!TIP]
> The customer portal is the single place to manage everything related to licensing—activation, renewals, and visibility.

## License Categories

Pextra® supports two main license categories:

1. **Community Licenses**
2. **Enterprise Licenses**

You can obtain new licenses and manage existing ones across your organization using the customer portal.

> [!TIP]
> You can mix Community and Enterprise licenses across **different clusters**, but not within the same cluster.

## Cluster Licensing Rules

To stay compliant, license categories must be consistent **within each cluster**:

- All nodes in a cluster must use the **same license category**
- Mixing **Community** and **Enterprise** licenses within a single cluster is **not allowed**

If **any node** in a cluster uses a Community license, the **entire cluster** is treated as a **Community-licensed cluster**, even if other nodes use Enterprise licenses.

Within the same organization, you may have:
- Some clusters licensed as **Community**
- Other clusters licensed as **Enterprise**

> [!TIP]
> Always plan your license category **before** adding nodes to a cluster to avoid compliance issues later.

## Best Practices

> [!TIP]
> Do **not** mix license categories within the same cluster. Each cluster must use **one license category only**—either Community or Enterprise.
