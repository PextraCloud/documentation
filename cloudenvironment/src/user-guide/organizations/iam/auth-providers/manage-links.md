# Manage User Auth Provider Links
> [!NOTE]
> Removing a link does not delete the user. The user simply loses the ability to sign in through that provider. The user can still sign in with a password (if set), or through any other linked provider, if any.

Each link associates a user in the built-in Pextra Identity provider with an identity in an external authentication provider. When the external identity is used to authenticate, the corresponding user in the Pextra Identity provider is signed in. Users can have multiple links to different external identities; each link is independent and can be managed separately.

Links are automatically created when **Auto-Provision Users** is enabled in the authentication provider settings. Refer to the [Provisioning](./integration/provisioning.md) section for more information on provisioning strategies.

1. Select the organization in the resource tree, then click **IAM**, and select **Auth Providers**.
   ![Select the organization and navigate to Auth Providers](./images/auth-provider-select.png)

2. Click the **users icon** on the provider's row.
   ![Manage Users button on the Auth Providers page](./images/auth-providers-view.png)

3. In the **Manage Users** modal:
   - The table lists all existing links for this provider, showing the Pextra Identity **Username**, the external ID, and when the link was created.
   - To **add a link**: select a user in the **User** dropdown and enter the external ID in the field next to it:
     - **OIDC**: the `sub` (subject) claim from the `id_token` issued by the provider.
     - **LDAP**: typically the distinguished name (DN) of the user.
    
     Click the **plus icon** to create the link.
   - To **remove a link**: click the confirmation icon on the row and confirm.

   ![Adding a link between a user and an OIDC subject claim](./images/auth-provider-manage-links-add.png)

4. Close the **Manage Users** modal when you are done.
