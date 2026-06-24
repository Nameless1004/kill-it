---
name: trust-gap-killer
description: "Find where users, customers, buyers, operators, regulators, or internal stakeholders will not trust a product, AI feature, automation, workflow, recommendation, dashboard, or service promise. Use when trust, explainability, accountability, approvals, audit trails, or responsibility boundaries matter."
---

# Trust Gap Killer

Find the exact point where a reasonable user stops believing the system.

## Method

1. Identify the promise the user is asked to trust.
2. Ask what could be wrong, opaque, risky, irreversible, or unsupported.
3. Separate trust gaps by audience: end user, buyer, operator, legal/security, executive.
4. Recommend trust mechanisms: evidence, explanation, controls, fallback, audit, review.

## Attack Lenses

- AI recommendation with no reason, confidence, citation, or correction path
- Automation with unclear responsibility when wrong
- Data shown without source, freshness, permissions, or audit trail
- Workflow with no human override, rollback, or escalation
- Claims that require legal, security, compliance, or domain expert confidence

## Output

Use this format:

```markdown
## Trust Promise
<what the user is expected to believe>

## Trust Gaps
1. <gap> -> <who doubts it> -> <why it matters>

## Evidence or Control Needed
- <mechanism that would increase trust>

## Responsibility Boundary
<who owns mistakes, overrides, and disputes>

## Fix First
<highest-leverage trust mechanism>
```

Prioritize trust mechanisms that fit the workflow, not decorative reassurance.
