# Why did my node go down?
There are several potential causes for a node in your Pextra CloudEnvironment® cluster to suddenly go down. Manual intervention may be required to diagnose and resolve the issue. In most cases, the node will self-recover after the underlying problem is fixed.

> [!NOTE]
> It may not be possible to access the node remotely if it is down due to hardware failure. Physical access or out-of-band management tools (like IPMI, iLO, or DRAC) may be required.


## Resource Exhaustion
Running out of critical resources like CPU, memory, or disk space can cause a node to crash or freeze. You may need to consider upgrading hardware resources if resource exhaustion is a recurring issue.

### Disk Space
> [!WARNING]
> Do not, under any circumstances, delete system files or directories unless you are absolutely sure of their purpose. This includes directories like `/bin`, `/sbin`, `/usr`, `/etc`, and `/var`. This will destroy your installation and may lead to data loss.

1. Check disk space usage on all mounted partitions:
	```bash
	df -h
	```
If any partitions are at or near 100% usage, take immediate action to free up space.

2. Find large files consuming disk space:
	```bash
	du -ah / | sort -rh | head -n 20
	```

3. Clear cache and temporary files:
	```bash
	apt clean
	```

5. Remove old log files or archive them to free up space:
	```bash
	find /var/log -type f -name "*.log" -exec rm -f {} \;
	```

### Memory
1. Check memory usage:
	```bash
	free -h
	```
If memory usage is critically high, consider adding more RAM or stopping unnecessary instances.

## Hardware Failures
Hardware issues like disk failures, memory errors, or power supply problems can lead a node to fail and become unresponsive. If any component is identified as failing, schedule replacement immediately to minimize downtime.

1. Check for hardware errors:
	```bash
	dmesg | grep -i error
	tail -n 100 /var/log/syslog
	```

2. Memory (RAM) test using [Memtest86+](https://www.memtest86.com/download.htm) can identify RAM issues. You may run it from a bootable USB.

3. Inspect disk health:
	```bash
	smartctl -a /dev/sdX	# Replace /dev/sdX with your disk identifier
	```

4. Review power supply and cooling systems to ensure they are functioning correctly.

### Network Issues
Network connectivity problems can result from interface failures, network partitions, or misconfigurations. Verify network status and connectivity to other nodes in the cluster.

1. Check network interface status:
	```bash
	ip a
	```
2. Test connectivity to other nodes:
	```bash
	ping <other-node-ip>
	```
3. Review network configuration and logs for errors.
	```bash
	cat /var/log/syslog | grep -i network
	```
4. Restart network services if necessary:
	```bash
	systemctl restart systemd-networkd
	```
	
## Software Bugs or Misconfigurations
Although it is highly unlikely, bugs in the operating system or misconfigurations can lead to instability and crashes. To update your system, refer to the [System Upgrade](../user-guide/nodes/system-upgrade.md) section.