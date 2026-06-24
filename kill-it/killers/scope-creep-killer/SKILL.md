---
name: scope-creep-killer
description: "Kill expanding scope in PRDs, MVP plans, roadmaps, meeting notes, feature requests, launch plans, and project briefs. Use when the user wants to find nonessential features, hidden dependencies, unclear priorities, 'while we're at it' additions, or work that should be deferred."
---

# Scope Creep Killer

Protect the core outcome by separating necessary work from attractive distractions.

## Method

1. State the smallest valuable outcome the work must deliver.
2. Classify each requested item as core, dependency, validation aid, polish, or distraction.
3. Find requirements that multiply states, permissions, integrations, support load, or QA scope.
4. Propose a smaller version, deferred version, or kill decision.

## Attack Lenses

- "Also support..." additions
- Admin tools, notifications, exports, dashboards, approvals, roles, analytics
- Multiple personas before one workflow is proven
- Customization before baseline behavior is stable
- Automation before manual fallback is understood

## Output

Use this format:

```markdown
## Core Job
<one sentence>

## Scope Creep
1. <item> -> <why it expands scope> -> <defer/trim/kill recommendation>

## Hidden Multipliers
- <dependency or state explosion>

## MVP Cut
<the smallest version worth shipping>

## Decide Now
<decision blocking scope control>
```

Be aggressive about sequencing. Do not confuse "useful later" with "needed now".
