# Create (Stage) A New Address
Stage a new address on the node and assign roles before applying changes.

> [!NOTE]
> Staged addresses are pending until you [Apply Changes](./apply.md).

## Web Interface
1. Click **Stage address**.
    ![Stage address button in the web interface](./images/stage.png)

2. Enter an address, CIDR, and optionally a gateway.
    ![Dialog to enter address, CIDR, and optional gateway](./images/create-dialog-1.png)

3. Select a physical NIC.
    ![Dialog section to select a physical NIC](./images/create-dialog-2.png)

4. Optionally enter a description, and select at least one role. If the address will be the default for any role, enable **Set as default address**.

5. Review the summary and click **Finish** to stage the change.
    ![Summary dialog showing staged address details before finishing](./images/create-dialog-3.png)