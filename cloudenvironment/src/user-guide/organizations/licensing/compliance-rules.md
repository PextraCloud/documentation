# Compliance Rules
The following rules determine licensing compliance at both the cluster and organization levels.

## Cluster
For a cluster to be compliant:
- All nodes must present a valid, unexpired license.
- All nodes must share the same edition. If multiple editions are detected, the cluster automatically falls back to the **lowest detected edition** until compliance is restored.

## Organization
For an organization to be compliant:
- All clusters must be compliant.
- The highest edition among compliant clusters determines the organization edition. Non-compliant clusters do not contribute to the organization-level edition.
