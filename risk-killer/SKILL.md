---
name: risk-killer
description: Find what breaks in a plan, spec, design, or rollout — edge cases, failure modes, and operational fallout. Use for PRDs, workflows, launches, migrations, releases, API and webhook designs, auth flows, third-party integrations, and data syncs, when the user wants to know where the system fails outside the happy path, at a boundary, or during launch.
---

# Risk Killer

Assume the happy path already works. Find where reality makes it fail: outside the normal case, at the seams between systems, and during launch.

## Method

1. State the intended flow in one sentence.
2. Break it across three fronts: edge cases, integration boundaries, and launch/operations.
3. Prefer concrete, reproducible failure scenarios over generic cautions.
4. For each, name the missing decision and who owns the recovery.

## Attack Lenses

- Edge: invalid/empty/huge/stale/duplicate/adversarial input, retries, cancellations, concurrent edits, partial saves
- Integration: expired auth, revoked scopes, rate limits, schema drift, webhook reorder/replay, clock skew, vendor outage
- Launch/ops: no rollback or kill switch, missing alerts/logs/owner, support without scripts, comms creating demand the team can't handle, missing legal/security review

## Output

```markdown
## Flow
<one sentence>

## Breakpoints
1. <scenario> -> <what fails> -> <missing decision> -> <owner>

## Must Test
- <reproducible failure to simulate>

## Rollback / Recovery
- <required fallback, alert, or response path>

## Fix First
<the highest-risk gap to resolve before building or shipping>
```

Make failures testable and owned. No abstract architecture advice.
