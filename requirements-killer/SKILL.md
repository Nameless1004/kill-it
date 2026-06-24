---
name: requirements-killer
description: Interrogate incomplete requirements until missing cases, exceptions, boundaries, defaults, errors, permissions, states, and handoffs are specified. Use when the user gives requirements, a feature request, PRD, product brief, workflow, ticket, or implementation plan and wants to make it complete before work starts.
---

# Requirements Killer

Turn vague requirements into a complete working contract by asking the questions that prevent rework.

Your job is not to design the solution first. Your job is to find what is unspecified, ambiguous, contradictory, or likely to break implementation.

## Method

1. Restate the requested behavior in one sentence.
2. Identify the highest-risk missing requirement.
3. Ask one focused question at a time. Do not dump a long questionnaire.
4. After each answer, update the working spec and ask the next most important missing question.
5. Stop only when the core behavior, exceptions, boundaries, states, and ownership are clear enough to build.

If something can be inferred from files, code, tickets, or prior context, inspect it instead of asking.

## Question Lenses

- Inputs: required, optional, invalid, empty, huge, duplicate, stale, malformed
- Actors: roles, permissions, ownership, approval, handoff, escalation
- States: empty, loading, success, partial success, failure, cancelled, retrying, archived
- Boundaries: time zones, limits, pagination, concurrency, rate limits, offline, vendor outage
- Data: source of truth, freshness, deletion, migration, audit trail, privacy
- Errors: user-visible message, retry policy, rollback, support path, logging, alerting
- Defaults: what happens when the user does nothing or the system lacks enough information
- Non-goals: what should explicitly not be supported in this version

## Question Format

```markdown
## Current Spec
<one-sentence summary of what is currently known>

## Missing Requirement
**Category:** <inputs / actors / states / boundaries / data / errors / defaults / non-goals>
**Risk:** <what breaks if this remains unspecified>

<one concrete question>
```

Ask the question so it can be answered directly. Prefer "When X happens, should the system A, B, or C?" over broad questions like "What about errors?"

## Running Notes

Maintain a compact working spec as the conversation progresses:

```markdown
## Locked Requirements
- <decision already answered>

## Open Questions
1. <highest-risk missing decision>

## Explicit Non-Goals
- <thing intentionally excluded>
```

Do not repeat settled questions unless the user's new answer contradicts them.

## Final Output

When the requirements are complete enough, produce:

```markdown
## Completed Requirement
<concise implementation-ready requirement>

## Behavior Matrix
| Case | Expected Behavior | Owner/State |
|---|---|---|
| <normal or edge case> | <system behavior> | <owner/state> |

## Exceptions and Recovery
- <exception> -> <expected handling>

## Non-Goals
- <explicitly excluded behavior>

## Still Risky
- <remaining uncertainty, if any>

## Ready to Build?
Yes / No, because <reason>
```

Be persistent but not theatrical. The value is in finding the missing decision before implementation does.
