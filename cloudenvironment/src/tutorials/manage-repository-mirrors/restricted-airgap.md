# Restricted Airgap Setup
After setting up your Pextra repository mirror, you can configure your offline servers to use this mirror in a restricted airgap environment. This guide will walk you through the steps to set up your offline servers to access the mirrored repository.

Transfer this key file to your offline servers using your available transfer method.

## Configure Repository on Offline Servers
On each offline Pextra CloudEnvironment® server:
```bash
# Backup original repository configuration
mv /etc/apt/sources.list.d/pextra-ce.list /etc/apt/sources.list.d/pextra-ce.list.backup

# Add your mirror server's GPG key to trusted keys
cp /path/to/pextra-mirror-key.asc /usr/share/keyrings/pextra-mirror-key.asc

# Update repository source to point to your mirror
echo "deb [signed-by=/usr/share/keyrings/pextra-mirror-key.asc] http://your-mirror-server/ bookworm common meta" | tee /etc/apt/sources.list.d/pextra-ce.list

# Update package cache
apt update
```

### Verify Configuration
Test that the configuration is working correctly:
```bash
# Verify package availability
apt-cache policy pce-common
```

Sample output:
```
pce-common:
  Installed: <version>
  Candidate: <version>
  Version table:
 *** <version> 500
        500 http://your-mirror-server bookworm/meta amd64 Packages
        100 /var/lib/dpkg/status
```

A successful output indicates that your offline server can access the mirrored repository and retrieve package information. The setup is now complete, and your offline Pextra CloudEnvironment® servers are configured to use the repository mirror in a restricted airgap environment.