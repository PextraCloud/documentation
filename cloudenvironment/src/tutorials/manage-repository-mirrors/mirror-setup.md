# Mirror Setup
This guide will help you set up a local mirror of the Pextra repository using `aptly`. This is the first step in creating an airgapped setup for Pextra CloudEnvironment®.

## Install `aptly`
Run the following command on your online mirror server:
```bash
apt install aptly
```
You may need to run `apt update` to ensure the package list is up to date before installing.

## Import Pextra GPG Key
Download and import the Pextra repository GPG key:
```bash
# Download the GPG key for the repository (signed by the master key)
curl -fSsLo /usr/share/keyrings/pextra-ce.gpg https://repo.pextra.cloud/debian/cloudenvironment/key.gpg

# Import the GPG key into trustedkeys.gpg (to be used by aptly)
gpg --no-default-keyring --keyring trustedkeys.gpg --import /usr/share/keyrings/pextra-ce.gpg
```

## Configure the Mirror
To mirror only one architecture (recommended), use the following command:
```bash
aptly -architectures="<architecture>" mirror create pextra-ce-bookworm https://repo.pextra.cloud/debian/cloudenvironment bookworm common meta
```
where `<architecture>` can be `amd64` or `arm64`, depending on your server's architecture.

To mirror all architectures, omit the `-architectures` option:
```bash
aptly mirror create pextra-ce-bookworm https://repo.pextra.cloud/debian/cloudenvironment bookworm common meta
```

## Run Initial Sync
At this point, you have created a mirror configuration but it is still empty. To perform the initial synchronization of the mirror, run:
```bash
aptly mirror update pextra-ce-bookworm
```
This command may take some time, depending on your internet connection. It will download all packages and metadata from the Pextra repository.

To verify the synchronization (after the `update` command completes), you can check the status of the mirror:
```bash
aptly mirror show -with-packages pextra-ce-bookworm
```

Sample output:
```
Name: pextra-ce-bookworm
Archive Root URL: https://repo.pextra.cloud/debian/cloudenvironment/
Distribution: bookworm
Components: common, meta
Architectures: amd64, arm64
Download Sources: no
Download .udebs: no
Last update: 2025-08-12 21:28:38 UTC
Number of packages: 17

Information from release file:
Architectures: amd64 arm64
Codename: bookworm
Components: common meta
Date: Tue, 12 Aug 2025 19:15:03 UTC
Description:  Pextra Inc. Debian repository

Label: Pextra Inc.
Origin: Pextra Inc.
Suite: stable
Version: 1.0
Packages:
  <list of packages>...
```


This will ensure that your mirror stays synchronized with the Pextra repository.

## Prepare the Mirror for Publishing
To make the mirrored repository available for use, you need to take a snapshot. Taking a snapshot allows you to create a versioned point-in-time copy of the mirror, which can be useful for rollback or auditing purposes:
```bash
# Create a snapshot of the mirror (e.g. pextra-ce-bookworm-20250812)
aptly snapshot create pextra-ce-bookworm-$(date +%Y%m%d) from mirror pextra-ce-bookworm
```

Before publishing, [a GPG key must be generated](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key) to sign the mirror, if you haven't done so already. Refer to the above link for instructions on generating a GPG key.

> [!WARNING]
> Make sure to keep your GPG key secure, as it will be used to cryptographically sign the repository metadata. If you lose access to your GPG key, you will need to create a new mirror and reconfigure your offline servers.

To retrieve the fingerprint of your GPG key, run:
```bash
gpg --list-secret-keys --keyid-format LONG
```
This will display your GPG keys, including their fingerprints. Copy the fingerprint (e.g. `F6C824A95B510F49ED4B0D640B4F9057C7DBDC41`) for use in the next step.

## Publish the Mirror
To publish the mirror, you can use the following command:
```bash
aptly publish snapshot -gpg-key=<your-gpg-key-fingerprint> pextra-ce-bookworm-$(date +%Y%m%d)
```
Sample output:
```
Loading packages...
Generating metadata files and linking package files...
Finalizing metadata files...
Signing file 'Release' with gpg, please enter your passphrase when prompted:
Clearsigning file 'Release' with gpg, please enter your passphrase when prompted:

Snapshot pextra-ce-bookworm-20250812 has been successfully published.
Please setup your webserver to serve directory '/home/user/.aptly/public' with autoindexing.
Now you can add following line to apt sources:
  deb http://your-server/ bookworm main
Don't forget to add your GPG key to apt with apt-key.

You can also use `aptly serve` to publish your repositories over HTTP quickly.
```

## Mirror Maintenance
For additional documentation on how to manage your repository mirror, including updating and publishing snapshots, refer to the [Aptly documentation](https://www.aptly.info/doc/aptly/mirror/).

### Updating the Mirror
To keep your mirror up to date, you can set up a cron job to run an update script at a regular interval (e.g. daily):
```bash
cat << 'EOF' > /usr/local/bin/update-pextra-mirror.sh
#!/bin/bash
aptly mirror update pextra-ce-bookworm
aptly snapshot create pextra-ce-bookworm-$(date +%Y%m%d) from mirror pextra-ce-bookworm
aptly publish snapshot -gpg-key=<your-gpg-key-fingerprint> pextra-ce-bookworm-$(date +%Y%m%d)
EOF
chmod +x /usr/local/bin/update-pextra-mirror.sh

# Add a cron job to run this script daily at 2 AM
echo "0 2 * * * /usr/local/bin/update-pextra-mirror.sh" | crontab -
```

## Next Steps
Export the public GPG key used to sign the mirror so that it can be imported on your offline servers:
```bash
gpg --armor --export <your-gpg-key-fingerprint> > /usr/share/keyrings/pextra-mirror-key.asc
```
Keep a copy of this key file, as it will be needed to configure your offline servers to use the mirror.

To use the mirror on your offline Pextra CloudEnvironment® servers, follow the relevant setup instructions based on your airgap type:
- [Restricted Airgap Setup](./restricted-airgap-setup.md)
- [Full Airgap Setup](./full-airgap-setup.md)