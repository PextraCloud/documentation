# Authentication Providers

Authentication providers let users authenticate to Pextra CloudEnvironment® using an external identity system instead of, or in addition to the built-in Pextra Identity provider (username/password). 

## Supported Protocols

| Protocol | Description | Authentication Flow | Examples |
| --- | --- | --- | --- |
| **OIDC** | OpenID Connect, widely used for single sign-on (SSO) across web applications | A button redirects the user to the identity provider's login page | Keycloak, Okta, Google Workspace, Auth0 |
| **LDAP** | Lightweight Directory Access Protocol, commonly used for directory services such as Active Directory and OpenLDAP | Users enter their username and password on the Pextra sign-in page and credentials are verified against the directory | Active Directory, OpenLDAP |

Refer to the [OpenID Connect (OIDC)](https://openid.net/specs/openid-connect-core-1_0.html) and [Lightweight Directory Access Protocol (LDAP)](https://docs.ldap.com/specs/rfc4512.txt) specifications for more details.

For information on provisioning strategies, detailed flows, and username derivation, refer to the [Integration](./integration/index.md) section.

## Managing Providers

- [Create Authentication Provider](./create.md)
- [Manage User Auth Provider Links](./manage-links.md)
- [Edit Authentication Provider](./edit.md)
- [Delete Authentication Provider](./delete.md)
