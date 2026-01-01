# Best Practices

Follow these guidelines to keep Identity and Access Management (IAM) secure, auditable, and maintainable within each organization.

## Organization IAM Lifecycle
<iframe src="https://mermaid.live/view#pako:eNpF0UtvgzAMAOC_EvncddBCaTlMQps49VAh9TKyQwoGokHC8ugeVf_7Eli7W_zZcWL5ApWsEVJoevlZdUwZKqjR9tQqNnbkIHtefWfWdFJx0ZZzTO7w5qupOcwJjnoCFPXsRVnI_g-pOZZHjeoWZWVWVag1KfDDojY335eZrbkhe9neKC9zLmr3nH7MEesTq959xuUO5OGBMGNY1bnTEyk8FhNqzVsx4dHj0eOIqpFqmDTzmnnFM-stM0jOnJHxb5Cp5vBfM7gvedp72ntSeOb4OWHuMZ-x4QLvXR6Vn3_uBQtoFa8hNcriAgZUA_MhXKgghILpcEAKqTvW2DDbGwpUXN21kYlXKYfbTSVt20HasF67yI61-_sLZ25jw12V2wGqZ2mFgTRcxcHUBdILfEG6i5bhKgqjOA6SrUsu4BvSJFmGYbCLNps4XiXrKLou4Gd6NVgmm22QbOL1brfdroMguv4CNdS6nQ" width="100%" height="500px" frameborder="1"></iframe>
<small><a href="https://mermaid.live/view#pako:eNpF0UtvgzAMAOC_EvncddBCaTlMQps49VAh9TKyQwoGokHC8ugeVf_7Eli7W_zZcWL5ApWsEVJoevlZdUwZKqjR9tQqNnbkIHtefWfWdFJx0ZZzTO7w5qupOcwJjnoCFPXsRVnI_g-pOZZHjeoWZWVWVag1KfDDojY335eZrbkhe9neKC9zLmr3nH7MEesTq959xuUO5OGBMGNY1bnTEyk8FhNqzVsx4dHj0eOIqpFqmDTzmnnFM-stM0jOnJHxb5Cp5vBfM7gvedp72ntSeOb4OWHuMZ-x4QLvXR6Vn3_uBQtoFa8hNcriAgZUA_MhXKgghILpcEAKqTvW2DDbGwpUXN21kYlXKYfbTSVt20HasF67yI61-_sLZ25jw12V2wGqZ2mFgTRcxcHUBdILfEG6i5bhKgqjOA6SrUsu4BvSJFmGYbCLNps4XiXrKLou4Gd6NVgmm22QbOL1brfdroMguv4CNdS6nQ" target="_blank">View source</a></small>

## Core Principles

1. **Least Privilege:** Start with view-only policies (`organization.list`, `organization.read`) and add permissions gradually. Avoid assigning wildcard actions unless you have a dedicated break-glass role.
2. **Separation of Duties:** Keep roles focused. Create discrete roles for cluster operations, billing, and compliance tasks instead of bundling them together.
3. **Consistent Naming:** Adopt a naming scheme such as `Team-Function` (e.g., `SRE-ClusterOps`). Use the role description to document escalation paths or ticket references.

## Policy Hygiene

- **Limit Statement Count:** Keep policies under 25 statements when possible. Split large policies into topical units.
- **Prefer Explicit Actions:** Avoid `*` unless the action set is genuinely broad. Explicit lists make audits faster.
- **Test Before Production:** Validate new policies before attaching them to roles. Use a staging organization if available.

## Role Management

- **Rotation:** Review role memberships quarterly. Remove users who changed teams or no longer need access.
- **Temporary Access:** For short-term tasks, create time-bound roles or apply expiration dates to the assigned users.

## User Lifecycle

- **Strong Authentication:** Use strong passwords and consider MFA.
- **Monitor Activity:** Feed [Audit Trail](../audit/audit.md) logs into your SIEM for anomaly detection.
- **Offboarding:** Immediately disable or delete users who leave the organization. Follow your internal data retention policies.
- **Disable vs. Delete:** Disable users when access is temporarily paused; delete only when you are sure data retention requirements are met.

## Incident Response

1. Use the root account only to unblock incidents.
2. Document every root login in your incident ticket.
3. After remediation, rotate any affected credentials and export updated policies for review.

## Change Management Checklist

- [ ] Create or update a policy in staging first.
- [ ] Capture an export or screenshot prior to editing roles/policies.
- [ ] Communicate the change to impacted teams (email, chat, ticket comment).
- [ ] Apply the change in production during a maintenance window if it affects many users.
- [ ] Monitor audit logs for at least one hour after the change.
