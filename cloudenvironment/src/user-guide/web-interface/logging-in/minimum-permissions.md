# Web Interface Permissions
To use the web interface, a user must have at least the following permissions:
- `organization.list`: Allows the user to list organizations. Despite the name, this only allows listing the current organization for non-root users.
- `organization.read`: Allows the user to read organization details. This is required in order to render the resource tree.

Without these permissions, the web interface will not function correctly. It is recommended to create a policy that includes these permissions and assign it to all roles that require web interface access.

> [!NOTE]
> These permissions are the bare minimum required to log in and render the web interface. Additional permissions should be granted based on the specific actions the user needs to perform within the interface.