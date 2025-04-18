# System Upgrade
System upgrades should be routinely performed in order to ensure that the latest bug fixes, security patches, and features are available.
> [!NOTE]
> A valid license key must be present when upgrading Pextra CloudEnvironment®.

> [!WARNING]
> System upgrades will fail if they are not run as the `root` Linux user.

## Console

1. Access the node's console through SSH or through the "Console" tab in the node view.

2. First, update the node's package index by running the following command:
   ```bash
   apt update
   ```
   This command may take some time to finish depending on the node's connection speed.

3. If any system upgrades are available, the following message will be shown:
   ```
   [xx] packages can be upgraded. Run 'apt list --upgradable' to see them.
   ```
   If this message is *not* shown, the node is on the latest version. No action is required.

4. If the above message is shown, the node can be upgraded to the latest version by running the following command:
   ```bash
   apt upgrade
   ```
   This command may take a while to finish depending on the number of upgrades and the node's connection speed.

