# Officially-Supported Servers
The following enterprise-grade servers are officially supported by Pextra CloudEnvironment®. These servers are recommended for production environments.

| Server Model | Manufacturer | CPU | Memory | Storage[^1] |
|--------------|--------------|-------------|----------------|----------------|
| PowerEdge R770 | Dell EMC | Dual Intel Xeon 6 (up to 144c) | Up to 8 TB DDR5 | Up to 40 NVMe / 24 SAS/SATA SFF |
| ProLiant DL380 Gen12 | HPE | Dual Intel Xeon 6 (8–144c) | Up to 8 TB DDR5 | Up to 36 EDSFF E3.S NVMe |
| ThinkSystem SR665 | Lenovo | Dual AMD EPYC 9004 (up to 128c) | Up to 8 TB DDR5 | Up to 40×2.5″ / 20×3.5″ bays |
| PowerEdge R6525 | Dell EMC | Dual AMD EPYC 7002/7003 | Up to 4 TB DDR4 | Flexible NVMe/SAS options |
| ProLiant DL325 Gen12 | HPE | Single AMD EPYC Gen5 (up to 192c)| Up to 6 TB DDR5 | Up to 20 EDSFF NVMe SSDs |
| ThinkSystem SR630 V3 | Lenovo | Dual AMD EPYC 9004/9005 | Up to 8 TB DDR5 | High-density NVMe bays |
| PowerEdge R6515 | Dell EMC | Single AMD EPYC (dense node) | Up to 2 TB DDR4 | NVMe/HDD hybrid options |
| ProLiant DL360 Gen12 | HPE | Dual Intel Xeon 6 | Up to 8 TB DDR5 | NVMe/SAS mix front bays |
| ThinkSystem SR650 V3 | Lenovo | Dual Intel Xeon / AMD EPYC | Up to 8 TB DDR5 | Up to 36 NVMe drives |
| PowerEdge R750 | Dell EMC | Dual Intel Xeon Scalable Gen3 | Up to 8 TB DDR4 | Up to 28 SFF or 12 LFF bays|
| ProLiant DL145 Gen11 | HPE | Dual AMD EPYC 8004 | Up to 768 GB DDR5 | Up to 6× EDSFF E3.S NVMe |
| ThinkSystem SR860 V3 | Lenovo | Quad-socket Intel/AMD| Up to 12 TB DDR5 | Up to 48×2.5″, GPU ready |
| PowerEdge C6525 | Dell EMC | Dual AMD EPYC (2U/4-node) | High capacity | HPC-optimized dense nodes |
| ProLiant ML350 Gen12 | HPE | Dual Intel Xeon 6/Scalable | Up to 8 TB DDR5 | Tower form, mix LFF/SFF/EDSFF |

---

Generally, any server that meets the minimum hardware requirements should work with Pextra CloudEnvironment®. However, we recommend using enterprise-grade servers for production environments to ensure optimal performance and reliability.

## Notes

[^1]: Hardware-based RAID cards are **NOT** supported. Please see the [Unsupported Configurations](./unsupported-configurations.md) section for more information.