# LDAP Flow
Pextra CloudEnvironment® acts as a client in the LDAP flow, connecting to your LDAP server to authenticate users.

1. The user enters their credentials (username and password) on the sign-in page.
2. Pextra CloudEnvironment® binds (establishes a connection) to the LDAP server using the configured connection settings and sends the user's credentials for authentication.
3. The LDAP server validates the credentials and responds with the authentication result.
4. If authentication is successful, Pextra CloudEnvironment® provisions the user according to the LDAP provider settings and establishes a session. For more information, refer to the [Provisioning](./provisioning.md) section.

> [!NOTE]
> Currently, signing out from Pextra CloudEnvironment® does not end the session at the LDAP server. This will be addressed in a future release.