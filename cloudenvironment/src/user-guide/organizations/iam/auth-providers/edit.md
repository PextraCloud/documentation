# Edit Authentication Provider
> [!NOTE]
> An authentication provider cannot be changed to a different *type* after it has been created.
> [!NOTE]
> For security reasons, provider secrets (client secret for OIDC, bind password for LDAP) cannot be retrieved after creation; they can only be updated.

1. Select the organization in the resource tree, then click **IAM**, and select **Auth Providers**.

   ![Select the organization and navigate to Auth Providers](./images/auth-provider-select.png)

2. Click the **pencil icon** on the provider's row.
   ![Click the pencil icon to edit the provider](./images/auth-provider-edit-pencil.png)

3. Update the fields in the wizard. Leave provider secret fields blank to keep the existing secret unchanged. The wizard is the same as in the [Create Auth Provider](./create) section.
   ![Edit Provider wizard showing the General step for an existing provider](./images/auth-provider-edit-general.png)

4. Click **Finish** to save.

   ![Edit Provider wizard showing the General step for an existing provider](./images/auth-provider-edit-general.png)
