# Authentication
1. Use the built-in username/password or an external identity provider (IdP), if configured:
    - For IdP logins, click the relevant button and follow the provider's authentication flow.
    - For built-in username/password, enter the username and password (the default username is `pceadmin`, and the password is set during installation). 
2. If successful, you are redirected to the main dashboard[^1].

>[!NOTE]
>Too many incorrect login attempts in a short period will temporarily lock your account. Contact an administrator to unlock it.

## Notes

[^1]: The IP address that you connect to (this is especially relevant for nodes in a cluster). The node that you are currently connected to is shown with a light green dot next to the node's entry in the resource tree. All requests are proxied to the node that you are connected to.