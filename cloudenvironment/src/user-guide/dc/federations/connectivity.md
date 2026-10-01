# Connectivity
Federated clusters are fetched from the remote deployment using a best-effort strategy. A federation that cannot be reached will not block the display of other federations or local clusters.

## Authorization
Authorization for federated resources is enforced on both the local and remote sides. Users must have the appropriate permissions in the local datacenter to view and interact with federated resources. Additionally, the remote cluster applies its own authorization rules, so the user's permissions on the remote side also determine what actions can be performed.

## Sync Status
The sync status of a federation indicates the result of the last attempt to synchronize with the remote cluster.

| Status  | Meaning |
| - | - |
| Pending | No sync attempt has been made since the federation was last updated. |
| Synced | The last sync attempt succeeded. The `Last sync` column shows how recently. |
| Failed | The last sync attempt failed. The remote cluster is unreachable or rejecting requests. Check network reachability and the API key. |
