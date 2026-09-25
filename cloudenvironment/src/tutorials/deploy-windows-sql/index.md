# Deploy Windows Server 2025 with SQL Server
This tutorial walks you through deploying a Windows Server 2025 virtual machine on Pextra CloudEnvironment® and installing [Microsoft SQL Server 2025](https://www.microsoft.com/en-us/sql-server/) on it. The installation media is obtained from Microsoft and attached to the instance as a CD-ROM drive.

By the end of this tutorial you will have:
* A running Windows Server 2025 instance that you can manage from the Pextra console.
* SQL Server 2025 installed and verified with a test query run from the `sqlcmd` command line client.

## Before You Begin
**Software Requirements:**
- The Windows Server 2025 ISO, available from the [Microsoft Evaluation Center](https://www.microsoft.com/en-us/evalcenter/evaluate-windows-server-2025).
- An internet-capable vSwitch for the instance.

**Recommended Instance Size:**
- 4 vCPUs, 8 GiB of RAM, and a 40 GiB system disk

**Estimated Setup Time:**
- 30 minutes to 1 hour, depending on your familiarity with Windows Server and SQL Server.

## Setup Instructions
1. [Prepare Windows Server](./prepare-windows.md)
2. [Install Windows Server 2025](./install-windows.md)
3. [Install SQL Server 2025](./install-sql-server.md)
4. [Verify the SQL Server Installation](./verify-sql-server.md)
