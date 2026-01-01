# Organization Discovery (Multi-Org Only)
For security reasons, multi-organization deployments require you to explicitly select the target organization before logging in. Most deployments run a single organization, so you can usually [proceed straight to authentication](./authentication.md).

To select an organization:
1. Navigate to the web interface. The UI preselects `DefaultOrg` (created during installation):
  ![DefaultOrg Login Page](./images/default.png)
2. Click **Use a different organization**, and enter the organization **Name** or **ID** for an exact, case-insensitive match.
  ![Find Organization](./images/find.png)
3. Confirm the selection. If the organization exists and your user belongs to it, the authentication form appears.
  ![Organization Found](./images/found.png)


In the case that the default organization is renamed or deleted, the login page displays an error and prompts you to select a different organization:
  ![Organization Not Found](./images/no-default-found.png)

>[!TIP]
>Keep a short list of approved organization IDs (`org-...`) for multi-tenant deployments.

You can now [proceed to authentication](./authentication.md).