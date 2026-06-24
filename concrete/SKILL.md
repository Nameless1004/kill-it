---
name: concrete
description: Make abstract or incomplete work concrete by asking one focused missing-case question at a time. Use when the user gives requirements, a feature request, PRD, product brief, design brief, workflow, ticket, task spec, or implementation plan and wants missing cases, boundaries, defaults, states, handoffs, constraints, and non-goals clarified before work starts.
---

# Concrete

Turn vague intent into a complete working contract by asking the questions that prevent rework.

Your job is not to design the solution first. Your job is to find what is unspecified, ambiguous, contradictory, or likely to break execution.

## Method

1. Restate the requested outcome in one sentence.
2. Choose the lens that best matches the artifact the user is trying to create.
3. Identify the highest-risk missing decision.
4. Ask one focused question at a time. Do not dump a long questionnaire.
5. After each answer, update the working spec and ask the next most important missing question.
6. Stop only when the core behavior, exceptions, boundaries, states, ownership, and non-goals are clear enough to act on.

If something can be inferred from files, code, designs, tickets, or prior context, inspect it instead of asking.

## Bundled Lenses

Use the relevant lens under `lenses/` when the user's artifact type is clear:

- `lenses/requirements.md`: product requirements, PRDs, feature requests, acceptance criteria
- `lenses/work-spec.md`: implementation plans, engineering tasks, tickets, handoffs
- `lenses/design.md`: UI/UX designs, screen specs, flows, prototypes, interaction states
- `lenses/workflow.md`: operational workflows, approvals, support paths, business processes
- `lenses/data-contract.md`: APIs, schemas, events, integrations, imports/exports, sync behavior
- `lenses/rollout.md`: launches, migrations, releases, experiments, reversibility, comms

If the request spans multiple lenses, start with the one most likely to block execution. Do not read every lens by default.

## Core Question Lenses

- Intent: user goal, business goal, success signal, non-goal
- Inputs: required, optional, invalid, empty, huge, duplicate, stale, malformed
- Actors: roles, permissions, ownership, approval, handoff, escalation
- States: empty, loading, success, partial success, failure, cancelled, retrying, archived
- Boundaries: time zones, limits, pagination, concurrency, rate limits, offline, vendor outage
- Data: source of truth, freshness, deletion, migration, audit trail, privacy
- Errors: user-visible message, retry policy, rollback, support path, logging, alerting
- Defaults: what happens when the user does nothing or the system lacks enough information
- Constraints: deadline, platform, design system, budget, compliance, dependencies
- Non-goals: what should explicitly not be supported in this version

## Question Format

```markdown
## Current Spec
<one-sentence summary of what is currently known>

## Missing Decision
**Lens:** <requirements / work-spec / design / workflow>
**Category:** <intent / inputs / actors / states / boundaries / data / errors / defaults / constraints / non-goals>
**Risk:** <what breaks if this remains unspecified>

<one concrete question>
```

Ask the question so it can be answered directly. Prefer "When X happens, should the system A, B, or C?" over broad questions like "What about errors?"

## Running Notes

Maintain a compact working spec as the conversation progresses:

```markdown
## Locked Decisions
- <decision already answered>

## Open Questions
1. <highest-risk missing decision>

## Explicit Non-Goals
- <thing intentionally excluded>
```

Do not repeat settled questions unless the user's new answer contradicts them.

## Final Output

When the work is concrete enough, produce:

```markdown
## Execution Brief
<a directly usable work brief that an implementer can act on without rereading the conversation>

- **Objective:** <specific outcome to achieve>
- **User / Actor:** <who this is for or who performs the workflow>
- **In Scope:** <included behavior, screens, systems, or work items>
- **Out of Scope:** <explicit exclusions for this version>
- **Primary Flow:** <step-by-step normal path>
- **Key Decisions:** <decisions clarified during the session>
- **Dependencies:** <systems, data, approvals, designs, or constraints needed>
- **Done When:** <observable completion criteria>

## Concrete Spec
<concise implementation-ready or execution-ready spec>

## Behavior Matrix
| Case | Expected Behavior | Owner/State |
|---|---|---|
| <normal or edge case> | <expected behavior> | <owner/state> |

## Exceptions and Recovery
- <exception> -> <expected handling>

## Non-Goals
- <explicitly excluded behavior>

## Still Vague
- <remaining uncertainty, if any>

## Ready to Execute?
Yes / No, because <reason>
```

The final output must be usable as the next working artifact: a ticket body, PRD section, design handoff, workflow spec, or implementation brief. Do not make it a short recap.

Be persistent but not theatrical. The value is in finding the missing decision before execution does.
