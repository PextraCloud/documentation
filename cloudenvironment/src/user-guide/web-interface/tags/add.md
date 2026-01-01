# Add a Tag
You can assign tags from each resource's detail page.

>[!NOTE]
>You must have the `tag.create` permission on the resource in order to add tags.

1. Click **Add Tag** on the resource page.
  ![Add Tag Button](./images/tag-add-0.png)
2. The button converts into two inline fields: **Key** and **Value**
3. Enter the key and optional value. Tag keys must be unique per resource.
4. Select the check icon to save the tag or the **X** icon to cancel.
  ![Add Tag Fields](./images/tag-add-1.png)
5. Confirm the new tag appears before the **Add Tag** button. The UI immediately propagates the change to dropdowns and the resource tree.
  ![Tag Added](./images/tag-add-2.png)

>[!IMPORTANT]
> Tags with keys starting with `pce_` are reserved for system use. Attempting to create or edit a tag with this prefix will fail.