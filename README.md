# kill-it

Most AI helps you build. `kill-it` tries to break the thing before reality does.

Bring an idea, PRD, pitch, product plan, design, architecture choice, roadmap, or launch plan. `kill-it` attacks the blind spot you did not defend yet, waits for your answer, then keeps pressing until the idea either survives or exposes the thing that can kill it.

## What It Solves

People are bad at seeing the weak point in their own plans. They defend the parts they already understand and miss the assumption, cost, edge case, trust gap, or scope problem that makes the work collapse later.

`kill-it` gives you a hostile pre-mortem:

- Finds the flaw you are most likely to rationalize away
- Separates fatal risks from annoying but survivable issues
- Forces one clean defense at a time instead of dumping generic feedback
- Ends by naming what actually survived, not only what broke

## How It Works

`kill-it` runs as an adversarial interrogation.

```text
Attack 1 -> your defense -> judgment
Attack 2 -> your defense -> judgment
Attack 3 -> your defense -> final synthesis
```

Each attack is labeled by severity:

| Severity | Meaning |
|---|---|
| **Instant Kill** | If true, the idea cannot work |
| **Major Wound** | The idea can work, but adoption, trust, launch, or scale breaks |
| **Bleeding Risk** | Survivable now, dangerous if ignored |
| **Scratch** | Worth fixing, but not core to whether the idea lives |

The final synthesis answers:

- **Survived**: what held up under attack
- **Still Dangerous**: unresolved risks ranked by severity
- **Real Weapon**: the strongest surviving advantage, insight, proof, or wedge
- **Next Proof**: the one thing to prove next
- **Verdict**: Survived / Wounded / Dead
- **Kill Shot**: the attack it could not answer

## Killer Lenses

Focused lenses are bundled inside `kill-it/killers/`. They are internal references, not separate top-level skills.

| Lens | Kills |
|---|---|
| `assumption-killer` | Hidden assumptions, unsupported optimism, unargued decisions |
| `risk-killer` | Edge cases, integration failures, launch/ops fallout |
| `bullshit-killer` | Vague claims, hype, jargon, unsupported copy |
| `hidden-cost-killer` | Forgotten API, ops, support, compliance, and migration costs |
| `scope-creep-killer` | Nonessential features, hidden dependencies, MVP bloat |
| `trust-gap-killer` | Places users, buyers, operators, or regulators stop trusting |
| `ux-friction-killer` | Where users hesitate, misunderstand, abandon, or need missing states |
| `deck-killer` | Weak claims and objections a skeptical room will raise |

## Use It When

- You are too attached to an idea and need the strongest objection
- A PRD or pitch sounds convincing but has not been stress-tested
- A feature plan assumes users, buyers, or operators will behave nicely
- A launch, integration, or workflow has too many hidden failure modes
- You want to know whether the idea is actually strong or just well-worded

## Install

Link the local CLI from this repo:

```bash
cd /Users/jaeho/Desktop/kill-it
npm link
```

Install into Codex:

```bash
killit init --codex
```

Other targets:

```bash
killit init --claude
killit init --all
killit init --all --force
killit init --all --dry-run
```

Remove installed skills:

```bash
killit remove --codex
killit remove --claude
killit remove --all
```

Targets:

| Flag | Location |
|---|---|
| `--codex` | `~/.codex/skills` |
| `--claude` | `~/.claude/skills` |
| `--all` | both |
