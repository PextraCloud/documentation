# Storage Pools
Storage pools are software-defined storage resources. Storage pools are configured on clusters and propagated to nodes. One configuration can be used across multiple nodes, allowing for flexible storage management.

The ID prefix for storage pools is `pool-`[^2].

## Storage Pool Types
The following storage pool configurations are supported in Pextra CloudEnvironment®:
| Pool Type | Volume Backing[^1] | Networked | Description | Notes |
|-----------|------------------|------------|-------------|-------|
| Directory (`directory`) | File | ❌ | Uses a directory on the node. | The default `local` storage pool is a `directory` pool. |
| NetFS (`netfs`) | File | ✅ | Mounts a network filesystem (NFS or CIFS/SMB) on the node as a storage pool. Similar to a directory pool, but allows for networked storage. | Target path must not conflict with other `netfs` or `directory` pools. |
| iSCSI (`iscsi`) | Block | ✅ | Uses an iSCSI target. | N/A |
| Ceph RBD (`rbd`) | Block | ✅ | Uses a Ceph RBD pool. | N/A |
| ZFS (`zfs`) | Block | ❌ | Uses a ZFS pool. | A ZFS pool with the same name as the storage pool must exist on each enabled node. |
| LVM (`lvm`) | Block | ❌ | Uses an LVM volume group. | An LVM volume group with the same name as the storage pool must exist on each enabled node. |

## Notes
[^1]: A storage pool can back volumes using either file-based or block-based storage. File-based storage pools use files to store data, while block-based storage pools use raw data blocks. Block-based storage pools typically provide better performance, while file-based storage pools are easier to manage.
[^2]: Resources in Pextra CloudEnvironment® are identified by unique IDs. Storage pool IDs will have the prefix `pool-`, followed by a unique identifier (e.g., `pool-qthm_iLrflJ_DtSS1l4Gx`).
