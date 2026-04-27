# Installation Steps
Follow the steps below to install Pextra CloudEnvironment® on your server.

## Steps
1. Acknowledge the End User License Agreement (EULA).

2. Configure the management network.
	- The installer will automatically detect network interface configuration from DHCP.
	- This is the IP address you will use to access the web interface, so it is recommended to set a static IP address or configure DHCP reservation for this interface.
    - If your network interface does not appear, please [let us know](../../issues/reporting/index.md).

3. Enter your license key.
	- If you do not have a license key, refer to the [Pre-Installation](../pre-installation.md) section for more information on obtaining a license.

4. Choose whether to participate in the Product Improvement Program (PIP).
	- The Product Improvement Program (PIP) helps us improve our products by sharing related telemetry and diagnostic data with Pextra. We use this data exclusively to improve product stability, security, and performance. You can revoke your PIP consent at any time.
	- For more information, please refer to our [Privacy Policy](https://pextra.cloud/legal/privacy-policy/).

5. Configure the default organization and timezone.
	- This is the **root** organization (the owner of the deployment) that has access to all resources.
	- Additional organizations can be created later.
	- It is highly recommended to set the timezone to `Etc/UTC`, however, you can choose your local timezone if needed.

6. Configure the administrator user.
	- This user is the **root** user of the deployment and has access to all resources.
	- Choose a strong password and make sure to remember it.
	- After the installation, it is recommended to create an additional user with limited permissions for day-to-day operations.
	- For command-line access, the Linux user `root`'s password is set to the same password as the administrator user.

7. Configure the boot disk.
	- The installer will automatically detect available disks. Choose the disk where you want to install the operating system.
	- The installer will format the selected disk, so make sure to back up any important data before proceeding.

8. Finalize the installation.
	- A summary of your configuration will be displayed. Review the settings and click "Install" to begin the installation process.

9. Wait for the installation to complete.
	- The installation process may take some time, depending on your network speed and hardware configuration. Typically, it takes about 20-30 minutes.
	- If you see any errors during the installation, please [let us know](../../issues/reporting/index.md).

10. Reboot the server.
	- If you did not select "Auto-reboot" during the installation, you will need to click "Reboot" to restart the server.
	- Remove the installation media (USB drive or DVD) before rebooting, otherwise the server may boot from the installation media again.

Your server is now ready to use! To access the web interface, please refer to the [Accessing the Web Interface](../../user-guide/web-interface/index.md) section.

You can now proceed to perform [post-installation steps](../post-installation.md) to configure your deployment.
