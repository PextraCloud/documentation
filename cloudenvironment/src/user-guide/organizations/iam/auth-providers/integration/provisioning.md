# Provisioning
> [!TIP]
> For sensitive environments, consider pre-provisioning key accounts and turning off auto-provisioning to maintain tighter control over user access.

Pextra CloudEnvironment® supports the following provisioning modes:
- **Just-in-Time (auto-provisioning):** The first time an identity authenticates successfully, a new user is automatically created and linked to the provider. The username is derived as detailed in the [Username Derivation](./username-derivation.md) section.
- **Ahead-of-Time:** Users are not created automatically. Only identities already linked to an existing user can sign in: identities that are not linked to an existing user cannot sign in. Users are linked manually as detailed in the [Manage User Auth Provider Links](../manage-links.md) section.

> [!NOTE]
> A user requires at least one method of authentication: password, an external provider, or both. Users without any authentication method cannot sign in.
