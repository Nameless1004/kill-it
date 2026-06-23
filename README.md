# kill-it

A pack of adversarial Claude skills that attack your ideas before reality does.

Most AI helps you build. These don't. They try to **break** what you bring — a plan, a PRD, a pitch, a design — and only respect what survives.

## The front door: `/kill-it`

An interactive, hostile interrogation. You bring an idea; it hunts the **blind spots** — the risk you left off the list, the question you didn't think to ask, the part you assumed away — one clean shot at a time, and waits for you to defend.

- Attacks what you *didn't* consider, not what you already defended
- One attack at a time (multiple at once is noise)
- Ends with a verdict: **Survived / Wounded / Dead** + the kill shot

> Inspired by [Matt Pocock's `grill-me`](https://github.com/mattpocock/skills). Where `grill-me` is a teammate building shared understanding, `kill-it` is an adversary trying to make the idea collapse.

## The arsenal: 8 killers

Use these when you already know which weak spot to audit. `kill-it` pulls from them when you don't.

| Skill | Kills |
|---|---|
| `assumption-killer` | Hidden assumptions, unsupported optimism, unargued decisions |
| `risk-killer` | Edge cases, integration failures, launch/ops fallout |
| `bullshit-killer` | Vague claims, hype, jargon — rewrites to plain, defensible language |
| `hidden-cost-killer` | Costs the plan forgot (API, ops, support, compliance) |
| `scope-creep-killer` | Nonessential features and "while we're at it" additions |
| `trust-gap-killer` | Where users, buyers, or regulators stop believing the system |
| `ux-friction-killer` | Where users hesitate, misunderstand, or abandon |
| `deck-killer` | Weak claims and objections a skeptical room will raise |

## Install

Copy any skill folder into your `.claude/skills/` directory (or the repo's skills path for your agent), then invoke it by name.

```bash
git clone https://github.com/Nameless1004/kill-it.git
```

Each skill is a single `SKILL.md` — short enough to read in ten seconds, fork, and sharpen for your own use.
