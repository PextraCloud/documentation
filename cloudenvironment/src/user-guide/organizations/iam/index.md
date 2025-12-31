# Identity and Access Management (IAM)

Identity and Access Management (IAM) controls who can interact with resources inside an organization. IAM is organization-scoped: every action you perform through this view is limited to the organization currently selected in the resource tree.

Pextra CloudEnvironment® uses a dynamic, attribute-based access control (ABAC) model. Permissions are granted to users via roles, which are collections of policies. Policies define fine-grained permissions using statements that allow or deny specific actions on resources and environmental attributes.

>[!NOTE]
>The **IAM_ABAC_RULES** feature flag (Enterprise edition or higher) must be enabled to create policies with ABAC rules. See [Organization Licensing](./licensing.md) for details.

## Key Concepts
- **Users** are created per organization (see the `users/` subpages for creation and lifecycle workflows).
- **Policies** define the actual permissions. See [Policies](./policies.md) for statement structure and limits.
- **Roles** are attached policies, and are assigned to users. See [Roles](./roles.md) for creation, assignment, and deletion steps.

>[!TIP]
>Keep the root user as a break-glass account. Assign it a strong password and store it securely. Create separate admin users with roles that provide the necessary permissions for daily operations.
