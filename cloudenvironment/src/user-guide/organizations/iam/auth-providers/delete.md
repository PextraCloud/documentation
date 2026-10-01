# Delete a Provider
> [!WARNING]
> Deleting a provider is irreversible and will immediately affect all users relying on it for authentication. Users linked to the provider will no longer be able to sign in through it. If users have no other sign-in methods, they will be locked out of the organization.
> [!TIP]
> When testing changes or onboarding a new identity system, consider disabling the provider first instead of deleting it. This allows you to re-enable it without reconfiguration if needed.

To remove a provider from the organization:
1. Select the organization in the resource tree, then click **IAM**, and select **Auth Providers**.
   ![Select the organization and navigate to Auth Providers](./images/auth-provider-select.png)

2. Click the **trash icon** on the provider's row.
   ![Click the trash icon to delete the provider](./images/auth-provider-delete-trash.png)

3. A confirmation dialog will appear. Type in "DESTROY" and click **Confirm** to permanently remove the provider.
   ![Delete provider confirmation dialog requiring DESTROY](./images/auth-provider-delete.png)
