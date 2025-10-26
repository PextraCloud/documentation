# How are disks formatted during installation?
The Pextra CloudEnvironment® installer automatically formats disks during the installation process to prepare them for use by the system. The selected target disk is partitioned in the following manner:

1. EFI System Partition (EF00):
   - **Size:** 1 GiB
   - **Purpose:** Contains the UEFI bootloader and related files necessary for system boot.

2. Root Partition (8300):
   - **Size:** Remaining disk space
   - **Purpose:** Contains the root filesystem (`/`) where the operating system and Pextra CloudEnvironment® components are installed.
