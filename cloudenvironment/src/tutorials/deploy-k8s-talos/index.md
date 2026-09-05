# Deploy a Kubernetes Cluster on Talos Linux
This tutorial walks you through deploying a Kubernetes cluster running [Talos Linux](https://www.siderolabs.com/) on Pextra CloudEnvironment®. Talos is a minimal, immutable operating system built specifically for running Kubernetes. Every aspect of a node is managed through declarative configuration, with no SSH access required.

By the end of this tutorial you will have:
* A bootstrapped Kubernetes cluster that you can manage from your workstation with `kubectl`.
* A sample workload (nginx) deployed to verify that the cluster is operational.

## Before You Begin
**Software Requirements:**
- `talosctl`. See the [Talos documentation](https://docs.siderolabs.com/talos/latest/getting-started/talosctl) for installation instructions
- `kubectl`. See the [Kubernetes documentation](https://kubernetes.io/docs/tasks/tools/#kubectl) for installation instructions
- Standard Unix utilities

**Estimated Setup Time:**
- 30 minutes to 1 hour, depending on your familiarity with Talos and Kubernetes

## Setup Instructions
1. [Download and Deploy Talos ISO](./deploy-iso.md)
2. [Prepare Talos Node](./prepare-node.md)
3. [Generate and Apply Cluster Configuration](./generate-config.md)
4. [Bootstrap Cluster and Set Up `kubectl`](./bootstrap.md)
5. [Deploy Test Workload](./deploy-test-workload.md)
