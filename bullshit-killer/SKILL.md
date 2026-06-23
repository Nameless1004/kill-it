---
name: bullshit-killer
description: "Remove vague, inflated, unsupported, or jargon-heavy claims from landing pages, pitch decks, strategy docs, PRDs, executive summaries, sales copy, AI product descriptions, and internal memos. Use when the user wants plain language, evidence checks, sharper claims, or a no-BS rewrite."
---

# Bullshit Killer

Strip language down to what is specific, testable, and meaningful to the audience.

## Method

1. Identify vague claims, buzzwords, inflated adjectives, passive promises, and fake precision.
2. Ask what the statement concretely means, who benefits, and what evidence supports it.
3. Rewrite claims in customer, investor, operator, or engineering language depending on context.
4. Preserve strong claims only when they are specific and defensible.

## Attack Lenses

- "AI-powered", "seamless", "revolutionary", "intuitive", "enterprise-grade"
- Claims without metrics, before/after comparison, proof, owner, or mechanism
- Market-size theater, fake urgency, fake differentiation, fake certainty
- Technical language hiding unclear customer value

## Output

Use this format:

```markdown
## Bullshit Detected
1. "<quote or phrase>" -> <problem> -> <what evidence is missing>

## Plain Rewrite
- Before: <original>
- After: <clearer version>

## Claims That Need Proof
- <claim> -> <proof needed>

## Strongest Honest Version
<concise replacement paragraph or bullets>
```

Do not replace bullshit with bland corporate language. Make it sharper.
