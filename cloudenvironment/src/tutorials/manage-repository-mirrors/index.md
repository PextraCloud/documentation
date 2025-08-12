# Repository Mirrors for Airgapped Environments
In standard deployments, servers connects to the [Pextra repository](https://repo.pextra.cloud) to download updates. However, airgapped environments require special consideration for package management, as they lack direct internet access. This tutorial provides a guide to managing an offline repository mirror in airgapped environments using `aptly`. This approach ensures Pextra CloudEnvironment systems remain updatable and secure even in the most restrictive network environments.

## Before You Begin
**Hardware Requirements:**
- Mirror server (online system with internet access) with sufficient storage space
	- The Pextra repository is approximately 100MiB in size per architecture (`amd64` and `arm64`)
- USB drive or removable media (for full airgap transfers only)
- Network connectivity between mirror and offline servers (for restricted airgap only)

**Software Requirements:**
- Debian-based system with administrative privileges
- `curl`, `tar`, and standard Unix utilities
- Administrative (`sudo`) access

**Estimated Setup Time:**
- 30 minutes for restricted airgap
- 1 hour for full airgap

## Understanding Airgap Types
To set up Pextra CloudEnvironment® servers in an airgapped environment, it is essential to understand the two different types of airgaps:

### Restricted/One-way Airgap
The offline server cannot directly access public internet but can communicate with an outside server through a controlled endpoint. This allows for automated synchronization while maintaining security boundaries.

### Full Airgap
Complete network isolation with no connectivity to external servers. Package updates require manual media transfer (e.g. with USB drives, portable storage).

> [!NOTE]
> A full airgap is the most secure option, but it requires **a considerable amount** of manual work to keep the offline servers updated. A restricted airgap allows for more automation and is recommended if possible.

## Setup Instructions
1. Set up the mirror server:
    - [Mirror Setup](./mirror-setup.md)

2. Follow the relevant setup instructions based on your airgap type:
    - [Restricted Airgap Setup](./restricted-airgap-setup.md)
    - [Full Airgap Setup](./full-airgap-setup.md)