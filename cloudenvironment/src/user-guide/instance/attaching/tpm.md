# Attaching a Trusted Platform Module (TPM)

Attach a Trusted Platform Module (TPM) to an instance through the Pextra CloudEnvironment® web interface.

1. Select the virtual machine in the resource tree and view the page on the right. Click on the **Resources** tab in the right pane. The configuration and attached devices will be listed.

   ![Instance Resources Page](../images/instance-attaching-tpm-1.png)

2. Click the **Attach Device** button.

   ![Attach Device Button](../images/instance-attaching-tpm-2.png)

3. Select **Trusted Platform Module (TPM)** from the **Device Type** dropdown list. Additional TPM configuration options will appear at the bottom of the dialog.

   ![TPM Device Type Selection](../images/instance-attaching-tpm-3.png)

4. Enter a device name and optional description.

   ![Device Name and Description](../images/instance-attaching-tpm-4.png)

5. Optionally enable **Hot-plug** to attach the TPM device to a running instance. If Hot-plug is not enabled, the instance must be stopped before attaching the device.

   ![Hot Plug Option](../images/instance-attaching-tpm-5.png)

6. Select a TPM **Model**.

   ![TPM Configuration](../images/instance-attaching-tpm-6.png)

> [!NOTE]
> Available TPM models include:
>
> | Model | Description |
> |---------|-------------|
> | **crb** | Modern TPM interface recommended for TPM 2.0 deployments. |
> | **tis** | Legacy TPM interface provided for compatibility with older operating systems. |

7. Select a TPM **Version**.

   ![TPM Configuration](../images/instance-attaching-tpm-7.png)
   
> [!NOTE]
> Available TPM versions include:
>
> | Version | Description |
> |---------|-------------|
> | **1.2** | Legacy TPM specification. |
> | **2.0** | Current TPM specification recommended for modern operating systems. |
>
> The **crb** model requires TPM version **2.0**.

8. Click **Confirm** to attach the TPM device to the instance.

   ![Confirm TPM Device Attachment](../images/instance-attaching-tpm-8.png)