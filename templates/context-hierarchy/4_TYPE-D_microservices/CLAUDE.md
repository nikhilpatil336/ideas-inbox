# [SYSTEM NAME] — microservices
# [One sentence: what this system does]

## Which services I have locally
<!-- Filled during Session 1 -->
| Service | Have locally? | Language | Purpose |
|---------|--------------|----------|---------|
| [name]  | yes          | | |
| [name]  | NO — contract only | | |

## Critical rule: partial system
I do NOT have every service on my machine.
- Services marked "yes" → full context exists in [service]/ai-context/
- Services marked "NO" → only a CONTRACT exists in ai-context/contracts/

**Never assume how a contract-only service is implemented.**
Only rely on what its contract file states. If the contract does not
answer a question, say: "contract for [service] does not specify this — I need
the actual API docs or a sample response."

## Contracts
All external service interfaces → @ai-context/contracts/INDEX.md

A contract file states ONLY:
- endpoint / topic / queue name
- request shape
- response shape
- error shapes
- known quirks

It does NOT state implementation. Do not infer implementation from a contract.

## Working rules (Karpathy guidelines — always apply)
- Don't assume. State assumptions. Ask when uncertain.
- Don't hide confusion. Name what is unclear.
- Simplicity first. Minimum code. No speculative abstractions.
- Surgical changes. Match existing style. No unrequested refactors.
- Surface tradeoffs. If a simpler approach exists, say so.

## Decision transparency (mandatory)
End EVERY response where you chose something I didn't specify with:
```
DECISIONS I MADE:
1. [choice] — because [reason] — alternative was [X]
```
If none: "DECISIONS I MADE: none"

## Behavior rules
- Show a diff BEFORE changing any file. Wait for approval.
- Explain in 2–5 bullets: what changed + why. No preambles.
- Do NOT run tests unless I explicitly ask.
- Use explorer agent for reading — never load whole services into main session.
- Before writing to a file for the first time this session, check @sessions/active-work.md and claim it (see Multi-session coordination below)

## Multi-session coordination
If more than one Claude Code session runs on this system at once (e.g. one
per service you have locally), they can silently overwrite each other's
edits. Follow the claim protocol in @sessions/active-work.md — claims are
shared across ALL services in this repo, not per-service. Claim files before
writing, stop and tell me if another active session already claims something
you're about to touch, and release your claims during `/wrap-up`.

## Context files
- System overview → @ai-context/overview.md
- Service map     → @ai-context/service-map.md
- Contracts       → @ai-context/contracts/INDEX.md
- Decisions       → @ai-context/decisions/INDEX.md
- Tasks           → @ai-context/tasks.md
- Edge cases      → @ai-context/edge-cases.md
- Per-service     → @[service-name]/ai-context/
