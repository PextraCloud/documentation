# Import from Docker/Podman Registry
> [!WARNING]
> Malicious images can compromise the node. Make sure that you trust the image before importing it.

For convenience, images can be imported (equivalent to `docker pull`) from online registries such as the [Docker Hub](https://hub.docker.com/) and [Quay.io](https://quay.io).

Due to limitations, Docker/Podman images cannot be stored in storage pools, and instead are stored in the node's root filesystem. This may change in the future.

To import from an online registry, perform the following steps:
## Web Interface
1. Access the "Images" tab in the node view.

2. Select "Pull Image (Docker/Podman)".

3. Select either "Docker" or "Podman" for the **Instance Type** field.

4. Enter the image name in the **Image Name** field.
> [!NOTE]
> Podman requires fully-qualified image names. For example, `docker.io/library/alpine:latest`.

5. Click on "Pull Image", which will close the modal. If successful, the image will soon be available on the node.
