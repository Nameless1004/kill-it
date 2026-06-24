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

Final output depends on the request. It should not force `Execution Brief` every time.

For improvement requests:

```markdown
## 구체화된 개선안

### 1. <개선명>
- **문제:** <현재 무엇이 애매하거나 불편한지>
- **변경:** <실제로 무엇을 바꿀지>
- **동작:** <사용자/시스템 관점의 구체 동작>
- **예외:** <edge case 또는 제외할 상황>
- **완료 기준:** <작업자가 확인할 수 있는 기준>
```

For task/spec/handoff requests:

```markdown
## 실행 브리프
<directly usable work brief>

- **목표:** <specific outcome>
- **사용자 / 행위자:** <who this is for or who performs it>
- **범위:** <included behavior, screens, systems, or work items>
- **제외:** <explicit exclusions>
- **주요 흐름:** <step-by-step normal path>
- **확정된 결정:** <decisions clarified>
- **의존성:** <systems, data, approvals, designs, or constraints>
- **완료 기준:** <observable completion criteria>

## 구체 명세
<execution-ready spec>

## 동작 매트릭스
| 상황 | 기대 동작 | 담당/상태 |
|---|---|---|

## 예외와 복구
- <exception> -> <handling>

## 비목표
- <excluded behavior>

## 실행 가능 여부
Yes / No, because <reason>
```
