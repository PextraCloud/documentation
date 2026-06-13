# Attaching a USB Device

Attach a USB device to an instance through the Pextra CloudEnvironment® web interface.

1. Select the virtual machine in the resource tree and view the page on the right. Click on the **Resources** tab in the right pane. The configuration and attached devices will be listed.

   ![Instance Resources Page](../images/instance-attaching-usb-1.png)

2. Click the **Attach Device** button.

   ![Attach Device Button](../images/instance-attaching-usb-2.png)

3. Select **USB Device** from the **Device Type** dropdown list. Additional USB device configuration options will appear at the bottom of the dialog.

   ![USB Device Type Selection](../images/instance-attaching-usb-3.png)

4. Enter a device name and optional description. Select the USB device from the **USB device** dropdown list.

   ![USB Device Selection](../images/instance-attaching-usb-4.png)

5. Choose a **Startup policy** for the USB device. Depending on the selected policy, the instance may fail to start if the USB device is unavailable.

   ![Startup Policy Selection](../images/instance-attaching-usb-5.png)

6. Optionally enable **Hot-plug** to attach the USB device to a running instance. If Hot-plug is not enabled or supported, the device will be attached during the next instance boot.

   ![Hot-plug Option](../images/instance-attaching-usb-6.png)

7. Click **Confirm** to attach the USB device to the instance.

   ![Confirm USB Device Attachment](../images/instance-attaching-usb-7.png)