---
name: ux-friction-killer
description: "Find UX friction in screens, flows, wireframes, prototypes, onboarding, checkout, forms, dashboards, admin tools, mobile layouts, and product copy. Use when the user wants to know where users hesitate, misunderstand, abandon, misclick, repeat work, lose trust, or need clearer feedback."
---

# UX Friction Killer

Find where the interface makes the user's job slower, riskier, or less obvious.

## Method

1. State the user's goal and the intended next action.
2. Walk the flow as a distracted, impatient, low-context user.
3. Identify friction by step: comprehension, input, decision, waiting, recovery, confirmation.
4. Recommend specific UI, copy, state, or flow changes.

## Attack Lenses

- Unclear labels, overloaded CTAs, weak hierarchy, missing affordances
- Too many fields, repeated input, avoidable choices, unclear defaults
- Empty, loading, error, success, permission, and offline states
- Mobile constraints, keyboard behavior, overflow, tap targets, long text
- Trust signals, destructive actions, review before submit, undo/recovery
- Dashboards with noisy metrics and no clear decision path

## Output

Use this format:

```markdown
## User Goal
<what the user is trying to accomplish>

## Friction Points
1. <step/screen> -> <friction> -> <likely user reaction>

## Missing States
- <state that needs design>

## Copy/UI Fixes
- <specific replacement or layout change>

## Fix First
<one change with the highest usability impact>
```

Do not give generic UX advice. Tie every critique to a user action.
