# Repository Mirrors for Air-Gapped Environments

In standard deployments, servers connect to the **Pextra repository** to download updates. However, **air-gapped environments** require special consideration for package management, as they do not have direct internet access.

This guide describes how to manage an **offline repository mirror** for Pextra Cloud Environment® using `aptly`. This approach ensures that systems remain **up to date, secure, and maintainable**, even in highly restricted network environments.

## Before You Begin

### Hardware Requirements
- A **mirror server** (an online system with internet access) with sufficient storage capacity
    - The Pextra repository is approximately **100 MiB per architecture** (`amd64` and `arm64`)
- USB drive or other removable media (required for **full air-gap** environments)
- Network connectivity between mirror and offline servers (required for **restricted air-gap** environments)

### Software Requirements
- Debian-based operating system
- Administrative privileges (`sudo`)
- `curl`, `tar`, and standard Unix utilities

### Estimated Setup Time
- **Restricted air-gap:** ~30 minutes
- **Full air-gap:** ~1 hour

## Understanding Air-Gap Types

Before configuring repository mirrors, it is important to understand the two supported air-gap models for Pextra Cloud Environment® deployments.

### Restricted (One-Way) Air-Gap

In a restricted air-gap, offline servers cannot access the public internet directly but can communicate with a controlled external endpoint. This enables **automated or semi-automated synchronization** while maintaining strict security boundaries.

### Full Air-Gap

A full air-gap environment is **completely isolated** from external networks. All package updates must be transferred manually using removable media such as USB drives or portable storage devices.

> [!NOTE]
> A full air-gap provides the highest level of isolation but requires significantly more operational effort to maintain. Where possible, a restricted air-gap is recommended to reduce administrative overhead.

## Setup Instructions

1. Set up the repository mirror server:
    - [Mirror Setup](./mirror-setup.md)

2. Follow the instructions specific to your air-gap deployment model:
    - [Restricted Air-Gap Setup](./restricted-airgap.md)
    - [Full Air-Gap Setup](./full-airgap.md)
