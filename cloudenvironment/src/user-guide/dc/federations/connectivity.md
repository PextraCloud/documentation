# Connectivity
Federated clusters are fetched from the remote deployment using a best-effort strategy. A federation that cannot be reached will not block the display of other federations or local clusters.

Every node in the local cluster must be able to reach the remote cluster, or federated resources may not be accessible.

Any actions performed through the federation will use this API key, so ensure it has the necessary permissions. This means the API key should have read and write access to the resources that will be managed through the federation.

## Sync Status
The sync status of a federation indicates the result of the last attempt to synchronize with the remote cluster. The last sync field shows the time of the most recent synchronization attempt.

| Status  | Meaning |
| - | - |
| ![Pending badge](./images/connectivity-pending.png) | No sync attempt has been made since the federation was last updated. |
| ![Synced badge](./images/connectivity-synced.png) | The last sync attempt succeeded. |
| ![Failed badge](./images/connectivity-failed.png) | The last sync attempt failed. The remote cluster is unreachable or rejecting requests. Check network reachability and the API key. |

## API Connectivity
When making API calls on resources present in the remote cluster, the `X-Pce-Cluster-Federation-Id` header must be included with the ID of the federation. This ensures that the local cluster can appropriately route the request to the correct federation. Failure to include this header will result in 4xx errors from the API.

## Limitations
- Multi-cluster federation is a one-way mechanism, meaning that the local cluster is aware of the remote cluster's resources, but not vice versa. Accessing the web interface from the remote cluster will not display resources from the local cluster. This will be addressed in a future release.
- Chaining federations is not supported. Creating a federation from a cluster that is already part of another federation will not work as expected.
- Authorization is enforced independently on both the local and remote clusters. Local authorization policies apply first, then remote authorization policies on the API key used to access the remote cluster are evaluated.