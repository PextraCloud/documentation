# Create a User

Administrators can create new users directly from the IAM interface.

1. Navigate to **IAM** under your organization view.
2. Click **Create User** at the top of the **Users** page.
3. The **Create User** dialog will appear:
   ![Create User dialog in IAM](../images/create-user-1.png)

4. Fill in user details:
    - **Username** is mandatory and must be unique within the organization.
    - **Linux user** is optional; if provided, it determines Linux user mapping when accessing node consoles.
    - **Description** is optional; use it to document the user's purpose or role.
    - **Enable** is on by default; disable it to create a user in a disabled state.
    - **Expiry** is optional; assign an expiration date for the user if needed.

5. Click **Confirm** to create the user.
   ![Create User dialog in IAM](../images/create-user-2.png)
6. The new user will appear in the users list:
   ![User appears in IAM list](../images/create-user-3.png)
