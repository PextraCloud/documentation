# Username Derivation
Each external identity must be linked to exactly one user in the built-in Pextra Identity provider. To match (or create) that user, a *username candidate* is derived from the provider. If no claim qualifies, a stable hash of the external identifier is used instead.

>[!NOTE]
> Authentication providers are assumed to be trustworthy to provide and maintain stable identifiers for each user. A malicious or misconfigured provider could break user mapping if it changes identifiers unexpectedly.

## OIDC
> [!TIP]
> For more information on OpenID Connect claims, refer to the [OIDC specification](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims).

In order of preference, normalized:
1. `preferred_username`
2. `username`
3. `email` (the part before the `@`)
4. `name`

The `sub` claim from the `id_token` is used as a stable fallback if no other claim qualifies.

## LDAP
> [!TIP]
> For more information on LDAP attributes, refer to the [LDAP specification](https://docs.ldap.com/specs/rfc4512.txt)

In order of preference, normalized:
1. The first configured **Username Attribute** that yields a valid username.
2. The username the user typed.

The configured **External ID Attribute** (such as `entryUUID` or `objectGUID`) is used as a stable fallback if no other attribute qualifies.