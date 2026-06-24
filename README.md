# Nameless Skill Store

Personal skill repository for Nameless agent workflows.

The first pack is **kill-it**: adversarial skills that attack ideas before reality does. They try to break a plan, PRD, pitch, design, or product bet, then name what survived, what can still kill it, and what the real weapon is.

## Setup

Link the local CLI from this repo:

```bash
cd /Users/jaeho/Desktop/kill-it
npm link
```

Install the Nameless skills into Codex:

```bash
nameless init --codex
```

Other targets:

```bash
nameless init --claude
nameless init --all
nameless init --all --force
nameless init --all --dry-run
```

Remove installed skills:

```bash
nameless remove --codex
nameless remove --claude
nameless remove --all
```

Targets:

| Flag | Location |
|---|---|
| default / `--codex` | `~/.codex/skills` |
| `--claude` | `~/.claude/skills` |
| `--all` | both |

Legacy commands like `killit init --codex` and `killit remove --codex` still work, but new docs should use `nameless init --codex`.

## The front door: `/kill-it`

An interactive, hostile interrogation. You bring an idea; it hunts the **blind spots** — the risk you left off the list, the question you didn't think to ask, the part you assumed away — one clean shot at a time, and waits for you to defend.

- Attacks what you *didn't* consider, not what you already defended
- One attack at a time (multiple at once is noise)
- Labels each hit by severity: **Instant Kill / Major Wound / Bleeding Risk / Scratch**
- Ends with a synthesis: **Survived / Still Dangerous / Real Weapon / Next Proof / Verdict**

> Inspired by [Matt Pocock's `grill-me`](https://github.com/mattpocock/skills). Where `grill-me` is a teammate building shared understanding, `kill-it` is an adversary trying to make the idea collapse.

## How a session works

```text
Attack 1 -> your defense -> judgment
Attack 2 -> your defense -> judgment
Attack 3 -> your defense -> final synthesis
```

Each attack must be specific to the idea in front of it. If the critique could apply unchanged to any random product, it is too generic.

Final synthesis:

```markdown
## Survived
- What held up under attack

## Still Dangerous
1. **Major Wound**: The unresolved risk that still matters

## Real Weapon
The strongest surviving advantage, insight, constraint, proof, or wedge.

## Next Proof
The one thing to prove next.

## Verdict
**Survived / Wounded / Dead**
```

## The arsenal: 9 killers

Use these when you already know which weak spot to audit. `kill-it` pulls from them when you don't.

| Skill | Kills |
|---|---|
| `requirements-killer` | Missing requirements, exceptions, boundaries, defaults, errors, and non-goals |
| `assumption-killer` | Hidden assumptions, unsupported optimism, unargued decisions |
| `risk-killer` | Edge cases, integration failures, launch/ops fallout |
| `bullshit-killer` | Vague claims, hype, jargon — rewrites to plain, defensible language |
| `hidden-cost-killer` | Costs the plan forgot (API, ops, support, compliance) |
| `scope-creep-killer` | Nonessential features and "while we're at it" additions |
| `trust-gap-killer` | Where users, buyers, or regulators stop believing the system |
| `ux-friction-killer` | Where users hesitate, misunderstand, or abandon |
| `deck-killer` | Weak claims and objections a skeptical room will raise |

Each skill is a single `SKILL.md` — short enough to read in ten seconds, fork, and sharpen for your own use.
