# Full Air-Gap Setup

In a **full air-gap environment**, there is no network connectivity between the mirror server and the offline servers. As a result, all packages and repository metadata must be transferred using **physical media**.

This guide describes the high-level process for deploying Pextra Cloud Environment® in a **fully isolated environment**.

## Availability

Detailed instructions for this setup are coming soon. In the meantime, the high-level workflow is outlined below.

## High-Level Workflow

1. Archive the Pextra repository on the mirror server using `tar`.
2. Copy the archive to removable media (for example, a USB drive or external hard disk).
3. Transfer the removable media to the air-gapped environment.
4. Extract the archive on the air-gapped server.
5. Configure the Pextra Cloud Environment® servers to use the **local, file-based repository**.

> [!NOTE]
> Full air-gap deployments provide the highest level of isolation but require careful operational planning to ensure systems remain up to date and secure.
