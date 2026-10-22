# OIDC Flow
Pextra CloudEnvironment® acts as the OIDC **client**. Your identity provider (IdP) is the **issuer**:

1. The user clicks the provider button on the sign-in page.
2. Pextra CloudEnvironment® checks the origin of the request: if it does not match any of the **allowed redirect origins**, it rejects the request. Otherwise, [OIDC discovery](https://openid.net/specs/openid-connect-discovery-1_0.html) is performed (fetching `<issuer>/.well-known/openid-configuration`), then the user is redirected to the IdP's authorization endpoint. The request uses the **PKCE** flow (S256) and includes a one-time **state** parameter for CSRF protection, and a **nonce** for replay protection.
3. The user (successfully) authenticates at the IdP.
4. The IdP redirects the browser back to the Pextra CloudEnvironment® API's callback endpoint `/api/v1/users/sso-callback`. The authorization code is exchanged with the IdP for tokens, and the `id_token` is validated (state and nonce) before reading the user's claims.
5. Provisioning occurs in the Pextra Identity provider according to the settings of the provider. For more information, refer to the [Provisioning](./provisioning.md) section.

Signing out from Pextra invalidates **Pextra's session only**. It does not propagate to the identity provider: the user's IdP session (for example their Keycloak or Entra ID session) remains active, and signing in again from the same browser typically succeeds without re-entering credentials at the IdP. If you need to end the IdP session as well, the user must log out of the IdP directly, if your IdP supports it.

> [!NOTE]
> Currently, signing out from Pextra CloudEnvironment® does not end the session at the Identity Provider (IdP). This will be addressed in a future release.