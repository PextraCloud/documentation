# Installation Steps
Follow the steps below to install Pextra CloudEnvironment® on your server.

## Steps
1. Acknowledge the End User License Agreement (EULA).

2. Configure the management network.
	- The installer will automatically detect network interface configuration from DHCP.
	- The server IP **must not** change after installation. It **will** cause breakage.
	- If your network interface does not appear, please [let us know](../../issues/reporting/index.md).

3. Enter your license key.
	- If you do not have a license key, refer to the [Pre-Installation](../pre-installation.md) section for more information on obtaining a license.

4. Configure the default organization and timezone.
	- This is the **root** organization (the owner of the deployment) that has access to all resources.
	- Additional organizations can be created later.
	- It is highly recommended to set the timezone to `Etc/UTC`, however, you can choose your local timezone if needed.

5. Configure the administrator user.
	- This user is the **root** user of the deployment and has access to all resources.
	- Choose a strong password and make sure to remember it.
	- After the installation, it is recommended to create an additional user with limited permissions for day-to-day operations.
	- For command-line access, the Linux user `root`'s password is set to the same password as the administrator user.

6. Configure the boot disk.
	- The installer will automatically detect available disks. Choose the disk where you want to install the operating system.
	- The installer will format the selected disk, so make sure to back up any important data before proceeding.

7. Finalize the installation.
	- A summary of your configuration will be displayed. Review the settings and click "Install" to begin the installation process.

8. Wait for the installation to complete.
	- The installation process may take some time, depending on your network speed and hardware configuration. Typically, it takes about 20-30 minutes.
	- If you see any errors during the installation, please [let us know](../../issues/reporting/index.md).

9. Reboot the server.
	- If you did not select "Auto-reboot" during the installation, you will need to click "Reboot" to restart the server.
	- Remove the installation media (USB drive or DVD) before rebooting, otherwise the server may boot from the installation media again.

Your server is now ready to use! To access the web interface, please refer to the [Accessing the Web Interface](../../user-guide/web-interface/index.md) section.

You can now proceed to perform post-installation steps to configure your deployment.