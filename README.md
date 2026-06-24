# Nameless Skill Store

Personal skill repository for Nameless agent workflows.

## Setup

Link the local CLI from this repo:

```bash
cd /Users/jaeho/Desktop/kill-it
npm link
```

Install into Codex:

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
| `--codex` | `~/.codex/skills` |
| `--claude` | `~/.claude/skills` |
| `--all` | both |

Legacy commands like `killit init --codex` and `killit remove --codex` still work, but new docs should use `nameless init --codex`.

## Skills

| Skill | Use it for |
|---|---|
| `kill-it` | Stress-test ideas, plans, PRDs, pitches, and designs until the weak point is exposed |
| `concrete` | Turn vague requirements, work specs, designs, or workflows into concrete executable specs |

## kill-it

`kill-it` is the adversarial front door. It attacks one weakness at a time, waits for the user's defense, labels each hit by severity, and ends by naming what survived.

- Attacks what the user did not consider, not what they already defended
- One attack at a time
- Severity labels: **Instant Kill / Major Wound / Bleeding Risk / Scratch**
- Final synthesis: **Survived / Still Dangerous / Real Weapon / Next Proof / Verdict**

Session shape:

```text
Attack 1 -> defense -> judgment
Attack 2 -> defense -> judgment
Attack 3 -> defense -> final synthesis
```

The focused killer lenses are bundled inside `kill-it/killers/`, not installed as separate top-level skills:

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

## concrete

`concrete` takes an abstract or incomplete artifact and keeps asking the missing questions until it is specific enough to execute.

Bundled lenses live inside `concrete/lenses/`:

| Lens | Use it for |
|---|---|
| `requirements` | PRDs, feature requests, acceptance criteria, product behavior |
| `work-spec` | Engineering tasks, tickets, implementation plans, handoffs |
| `design` | UI/UX flows, screen specs, interaction states, prototypes |
| `workflow` | Operational processes, approvals, support paths, business handoffs |
| `data-contract` | APIs, schemas, events, integrations, sync behavior |
| `rollout` | Launches, migrations, releases, experiments, rollback paths |

It focuses on missing:

- Intent, success signals, defaults, and non-goals
- Inputs, actors, permissions, ownership, and handoffs
- Empty/loading/success/error/cancelled/retry states
- Edge cases, limits, concurrency, vendor failure, and recovery paths
- Data ownership, freshness, deletion, audit, and privacy

During questioning, `concrete` should not expose internal labels like lens, category, risk, or locked decisions by default. It asks one natural question at a time, then saves the structured working notes for the final artifact.

It should not become a survey. A/B/C/D options are only for decisions with a few clear paths; otherwise it asks a plain question and leaves room for a custom answer.

Final output:

```markdown
## Execution Brief
<directly usable work brief>

- **Objective:** <specific outcome>
- **User / Actor:** <who this is for or who performs it>
- **In Scope:** <included behavior, screens, systems, or work items>
- **Out of Scope:** <explicit exclusions>
- **Primary Flow:** <step-by-step normal path>
- **Key Decisions:** <decisions clarified>
- **Dependencies:** <systems, data, approvals, designs, or constraints>
- **Done When:** <observable completion criteria>

## Concrete Spec
<execution-ready spec>

## Behavior Matrix
| Case | Expected Behavior | Owner/State |
|---|---|---|

## Exceptions and Recovery
- <exception> -> <handling>

## Non-Goals
- <excluded behavior>

## Ready to Execute?
Yes / No, because <reason>
```
