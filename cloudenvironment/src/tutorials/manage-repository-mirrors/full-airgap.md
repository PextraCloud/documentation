# Full Airgap Setup
In a full airgap environment where no network connectivity exists between your mirror server and offline servers, you'll need to transfer packages and configuration files using physical media. This guide covers the complete process of setting up Pextra CloudEnvironment® in a completely isolated environment.

The guide is coming soon, but here are the high-level steps:
1. Archive the Pextra repository on your mirror server (with `tar`).
2. Transfer the archive to removable media (USB drive, external HDD, etc.).
3. Move the archive to your airgapped environment.
4. Extract the archive on your airgapped server.
5. Configure the repository on your fully airgapped Pextra CloudEnvironment servers to use the local file-based repository.