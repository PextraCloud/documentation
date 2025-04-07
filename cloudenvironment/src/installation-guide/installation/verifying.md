# Verify File Integrity
> [!NOTE]
> This step is optional but highly recommended. Verifying the integrity of the downloaded ISO file ensures that the file came from Pextra Inc. and has not been tampered with.

Follow the instructions below for your operating system to verify the file integrity. If at any point, file integrity verification fails, do not proceed with the installation.

Before verifying GPG signatures, [download our GPG public key](https://pextra.cloud/pextra-gpg-key.asc).

## Linux
Linux users can use the `sha256sum` and `gpg` commands to verify the SHA256 checksum and GPG signature of the downloaded ISO file. `sha256sum` is usually pre-installed on most Linux distributions, while `gpg` is also commonly available. If you do not have `gpg` installed, you can install it using your package manager (e.g., `apt`, `pacman`, `yum`, etc.).

### SHA256 Checksum
1. Make sure to download the SHA256 checksum file (the file that ends with `.sha256`) from the Pextra Customer Portal.
2. Open a terminal and navigate to the directory where the downloaded ISO file and SHA256 checksum file are located.
3. Calculate the SHA256 checksum of the downloaded ISO file using the following command:
   ```bash
   sha256sum pextra-ce.iso
   ```
4. Compare the output with the SHA256 checksum provided on the download page. If they match, the file is intact.

### GPG Signature
Two signatures are provided: one for the SHA256 checksum file and one for the ISO file itself. Verifying the SHA256 checksum file is sufficient and faster.

1. Make sure to download the GPG signature file (the file that ends with `.sha256.asc`) from the Pextra Customer Portal.
2. Import the Pextra Inc. GPG public key using the following command:
   ```bash
   gpg --import pextra-gpg-key.asc
   ```
3. Verify the SHA256 checksum file using the following command:
   ```bash
   gpg --verify pextra-ce.iso.sha256.asc pextra-ce.iso.sha256
   ```
4. If the output indicates that the signature is valid, the file is intact. If it indicates that the signature is not valid, do not proceed with the installation.

Verifying the ISO file itself is similar:
1. Make sure to download the GPG signature file (the file that ends with `.iso.asc`) from the Pextra Customer Portal.
2. Verify the ISO file using the following command:
   ```bash
   gpg --verify pextra-ce.iso.asc pextra-ce.iso
   ```
3. If the output indicates that the signature is valid, the file is intact. If it indicates that the signature is not valid, do not proceed with the installation.

## MacOS
MacOS users can use the `shasum` and `gpg` commands to verify the SHA256 checksum and GPG signature of the downloaded ISO file.
### SHA256 Checksum
1. Make sure to download the SHA256 checksum file (the file that ends with `.sha256`) from the Pextra Customer Portal.
2. Open a terminal and navigate to the directory where the downloaded ISO file and SHA256 checksum file are located.
3. Calculate the SHA256 checksum of the downloaded ISO file using the following command:
   ```bash
   shasum -a 256 pextra-ce.iso
   ```
4. Compare the output with the SHA256 checksum provided on the download page. If they match, the file is intact.

### GPG Signature
1. Make sure to download the GPG signature file (the file that ends with `.sha256.asc`) from the Pextra Customer Portal.
2. Import the Pextra Inc. GPG public key using the following command:
   ```bash
   gpg --import pextra-gpg-key.asc
   ```
3. Verify the SHA256 checksum file using the following command:
   ```bash
   gpg --verify pextra-ce.iso.sha256.asc pextra-ce.iso.sha256
   ```
4. If the output indicates that the signature is valid, the file is intact. If it indicates that the signature is not valid, do not proceed with the installation.

Verifying the ISO file itself is similar:
1. Make sure to download the GPG signature file (the file that ends with `.iso.asc`) from the Pextra Customer Portal.
2. Verify the ISO file using the following command:
   ```bash
   gpg --verify pextra-ce.iso.asc pextra-ce.iso
   ```
3. If the output indicates that the signature is valid, the file is intact. If it indicates that the signature is not valid, do not proceed with the installation.

## Windows
Windows users can use the `CertUtil` PowerShell command to verify the SHA256 checksum. For GPG signatures, [GPG4Win](https://gpg4win.org/) can be used, as Windows does not have a built-in method to verify GPG signatures. GPG4Win is free and open source software.
### SHA256 Checksum
1. Make sure to download the SHA256 checksum file (the file that ends with `.sha256`) from the Pextra Customer Portal.
2. Open PowerShell and navigate to the directory where the downloaded ISO file and SHA256 checksum file are located.
3. Calculate the SHA256 checksum of the downloaded ISO file using the following command:
   ```powershell
   CertUtil -hashfile pextra-ce.iso SHA256
   ```
4. Compare the output with the SHA256 checksum provided on the download page. If they match, the file is intact.
5. If the output does not match, do not proceed with the installation.

### GPG Signature
1. Download the latest version of [GPG4Win](https://gpg4win.org/) and install it.
2. Make sure to download the GPG signature file (the file that ends with `.sha256.asc`) from the Pextra Customer Portal.
3. Open PowerShell and navigate to the directory where the downloaded ISO file and GPG signature file are located.
4. Import the Pextra Inc. GPG public key using the following command:
   ```powershell
   gpg --import pextra-gpg-key.asc
   ```
5. Verify the SHA256 checksum file using the following command:
   ```powershell
   gpg --verify pextra-ce.iso.sha256.asc pextra-ce.iso.sha256
   ```
6. If the output indicates that the signature is valid, the file is intact. If it indicates that the signature is not valid, do not proceed with the installation.

Verifying the ISO file itself is similar:
1. Make sure to download the GPG signature file (the file that ends with `.iso.asc`) from the Pextra Customer Portal.
2. Verify the ISO file using the following command:
   ```powershell
   gpg --verify pextra-ce.iso.asc pextra-ce.iso
   ```
3. If the output indicates that the signature is valid, the file is intact. If it indicates that the signature is not valid, do not proceed with the installation.
