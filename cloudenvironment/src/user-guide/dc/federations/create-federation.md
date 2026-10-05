# Create Multi-Cluster Federation
> [!TIP]
> Prepare the following information from the remote deployment before you start:
> 1. The **remote cluster ID** (in the format `cls-xxxxxxxxxxxxxxxxxxxxx`): this can be copied from your browser's address bar when viewing the remote cluster's page.
> 2. The **endpoint URL** of the remote deployment (in the format `https://federation.example.com:5007`): must be reachable from **all nodes** in your local cluster.
> 3. An **API key** on the remote deployment that grants access to the federation endpoint.

> [!NOTE]
> Any actions performed through the federation will use this API key, so ensure it has the necessary permissions. Refer to the [Connectivity](./connectivity.md) section for more details.

1. Select the datacenter in the resource tree and view the page on the right. Click on the **Multi-Cluster Federations** tab in the right pane:

   ![Multi-Cluster Federations tab in the datacenter page](./images/federations-view.png)
2. Click the **Create Multi-Cluster Federation** button:

   ![Create Multi-Cluster Federation button on the federations page](./images/federations-create.png)
3. In the **Details** step, provide basic information:

   ![The Details step of the federation wizard with name and description fields](./images/federations-create-details.png)
4. In the **Connection** step, provide the remote cluster's connection details (remote cluster ID, endpoint URL, and API key):

   ![The Connection step of the federation wizard with remote cluster ID, endpoint URL, and API key fields](./images/federations-create-connection.png)
5. Click **Test Connection** to verify the remote cluster's connection details. Proceed to the **Summary** step if the connection is successful:

   ![The Test Connection step of the federation wizard](./images/federations-create-connection-successful.png)
6. Review the summary and click **Finish** to finalize:

   ![The Summary step of the federation wizard with review information](./images/federations-create-summary.png)

The multi-cluster federation will immediately become active, allowing the local datacenter to communicate and with the remote cluster.

To update the federation settings, refer to the [Edit Federation](./edit-federation.md) section.