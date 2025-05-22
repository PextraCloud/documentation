# Managing Instance Images
This section provides guidance on managing instance images. Instance images are images of operating systems, and are used when deploying an instance. To share instance images across nodes, upload them to a storage pool that all nodes have access to.

## File Formats
### QEMU
QEMU instances expect a raw disk. The following formats are supported:
- `iso` (MIME type: `application/x-iso9660-image`)

### LXC
LXC instances expect a compressed root filesystem tree. The following formats are supported:
- `.tar`
- `.tar.gz`
- `.tar.xz`
- `.tar.bzip2`

> [!NOTE]
> Any format accepted by [GNU tar](https://www.gnu.org/software/tar/) may work, although only the previously-mentioned formats have been tested.

### Docker/Podman
There are two options when importing Docker/Podman images:
- [Import from Docker/Podman Registry](./docker-registry.md)
- [Import from File](./file.md)

