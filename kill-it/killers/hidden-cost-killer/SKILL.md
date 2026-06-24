---
name: hidden-cost-killer
description: "Expose hidden costs in project plans, product features, AI workflows, infrastructure proposals, launch plans, integrations, operations plans, and business strategies. Use when the user wants to find API costs, cloud costs, support burden, maintenance work, data labeling, monitoring, compliance, migration, or opportunity costs."
---

# Hidden Cost Killer

Make the invisible bill visible before the plan commits to it.

## Method

1. Map the work across build, launch, operation, growth, maintenance, and exit/migration.
2. Identify costs that scale with users, data, volume, complexity, exceptions, or regulation.
3. Separate one-time cost, recurring cost, variable cost, human cost, and opportunity cost.
4. Flag the costs most likely to surprise the team.

## Attack Lenses

- API calls, model tokens, inference, retries, logs, storage, bandwidth
- Monitoring, alerts, on-call, incident response, backups, disaster recovery
- Support tickets, manual review, onboarding, training, documentation
- Security reviews, compliance, audits, legal, procurement, vendor management
- Data cleaning, labeling, migration, schema maintenance, deletion requests

## Output

Use this format:

```markdown
## Hidden Costs
1. <cost> -> <driver> -> <when it grows> -> <who pays>

## Cost Multipliers
- <volume, complexity, or policy factor>

## Missing Budget Lines
- <line item to add>

## Cost Controls
- <cap, metric, alert, workflow, or design constraint>

## Biggest Cost Bomb
<the cost most likely to surprise the team>
```

Be specific about the cost driver even when exact numbers are unavailable.
