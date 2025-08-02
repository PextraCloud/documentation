# Set CockroachDB License Key
Pextra CloudEnvironment®'s highly-scalable private cloud is built on CockroachDB's distributed architecture. One license per complete deployment (spanning all datacenters, clusters, and nodes) is required.

> [!WARNING]
> Pextra CloudEnvironment® will not be functional after one week (7 days) without a valid CockroachDB license key.

> [!TIP]
> CockroachDB license keys can be obtained from [cockroachlabs.cloud](https://cockroachlabs.cloud).

## Console
1. Access the node’s console through SSH or through the “Console” tab in the node view.

2. First, enter the CockroachDB console by running the following command:
   ```bash
   sudo cockroach sql --certs-dir=/usr/local/lib/cockroach/certs -u pextra_ce_pcedaemon
   ```

3. Set the license key by running the following command in the CockroachDB console:
   ```sql
   SET CLUSTER SETTING enterprise.license = '<license key here>';
   ```

4. To exit the CockroachDB console, click `CTRL+C`.

For more information, visit the [CockroachDB licensing FAQs](https://www.cockroachlabs.com/docs/stable/licensing-faqs).
