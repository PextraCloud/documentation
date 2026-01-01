# Model
Pextra CloudEnvironment® uses an attribute-based access control (ABAC) model for defining and enforcing permissions. Policies consist of one or more **statements** that specify which actions are allowed or denied on which resources, optionally refined by rules based on user or resource attributes.

Each statement contains the following fields:

| Field | Description |
| --- | --- |
| **Action** | A specific API or UI verb (for example, `organization.list`) or `*` for all actions. |
| **Effect** | Choose `allow` to grant access or `deny` to block it. Explicit denies always take precedence over allows. |
| **Resource** | Resource identifiers (such as `org-*`, `cls-*`) or `*` for all resources. |
| **Rules** | A string expression that refines the scope of the statement using ABAC conditions. Requires the **IAM_ABAC_RULES** feature flag. |

>[!IMPORTANT]
> The root user bypasses all policy evaluations and is not subject to these rules. Use the root account only for emergency access and critical operations.

## Evaluation Order
1. Statements are evaluated from top to bottom.
2. If any statement with `deny` matches, the request is denied immediately—even if an earlier `allow` matched.
3. If no denies match, the first matching `allow` grants access. Requests with no matches are denied by default.
4. Root users skip evaluation entirely but policy changes are still logged for auditing.

## Notes
- 1024 statements maximum per policy, though best practices recommend fewer than 25 for maintainability.
- Policies can be attached to multiple roles to streamline permission management.
- Policy changes apply instantly to all roles and users that reference them.