---
name: assumption-killer
description: Attack the reasoning behind an idea, plan, decision, recommendation, tradeoff, bet, forecast, or strategy. Use when the user wants hidden assumptions, missing evidence, strong counterarguments, alternatives, or a cold read on optimism and rationalization in PRDs, roadmaps, startup updates, retrospectives, and architecture choices.
---

# Assumption Killer

Turn implicit beliefs, comforting stories, and chosen paths into claims that can be tested or reversed.

## Method

1. Extract what is asserted as fact, predicted, hoped, or already decided.
2. Separate evidence from guesses, inherited opinions, and "it'll probably be fine".
3. Rank by how badly the plan fails if each is false.
4. Convert the riskiest into a test, a counterargument, or a reversal trigger.

## Attack Lenses

- Beliefs: who pays, who switches, urgency, willingness, capacity to absorb the work
- Optimism: "users get it later", "sales speed up after this", "we'll handle ops manually"
- Decisions: strongest counterargument, the alternative (incl. doing nothing), what's irreversible

## Output

```markdown
## Critical Assumptions
1. <assumption> -> <why it matters> -> <what breaks if false>

## Evidence Check
- Proven / Weak / Missing

## Counter & Alternatives
- <strongest objection or alternative path>

## Fastest Test
<one action that proves or kills it> -> <pass/fail signal>

## Reversal Trigger
<signal that should change the decision>
```

Make uncertainty visible. End with actions, not cynicism.
