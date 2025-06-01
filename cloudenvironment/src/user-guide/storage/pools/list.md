# List Storage Pools
Storage pools can be listed to view the current storage configuration in the cluster. This includes details about the storage pools, their status, and the nodes they are associated with.

## Web Interface
1. Select the cluster in the resource tree and view the page on the right. Click on the **Storage** tab in the right pane. The storage pools will be listed:
   ![Storage Page](./images/00-cluster-storage-pools.png)

To edit associated nodes of a storage pool, refer to the [Edit Storage Pool](./edit.md) section.

### Storage Pool Status
Each storage pool has a status indicator that provides information about its availability and configuration across the nodes in the cluster. The status can be one of the following:

![Storage Pool Grey Dash](./images/01-status-grey.png)
<br/>The storage pool has not been enabled on any nodes.

![Storage Pool Green Checkmark](./images/01-status-green.png)
<br/>The storage pool is available on all enabled nodes.

![Storage Pool Red X](./images/01-status-red.png)
<br/>An error has occurred while propagating the storage pool configuration to enabled nodes. Manual intervention may be required to resolve the issue.