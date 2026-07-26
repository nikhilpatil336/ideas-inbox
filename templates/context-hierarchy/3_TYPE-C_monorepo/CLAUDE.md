# [MONOREPO NAME]
# [One sentence: what this repo contains]

## Services in this repo
<!-- Filled by Claude during Session 1 -->
| Service | Language | Purpose |
|---------|----------|---------|

## Shared rules (apply to ALL services)
<!-- Filled by Claude during Session 1 -->
- Do not import across service boundaries
- Shared types/utils live in [shared-folder]/ only
- Each service has its own CLAUDE.md with service-specific rules

## Build system
<!-- Filled by Claude during Session 1 -->

## Root-level commands
```bash
# build all:
# run all:
```

## Behavior rules
- Show diff BEFORE changing any file. Wait for approval.
- Explain in 2–5 bullets: what changed + why. No preambles.
- Do NOT run tests unless I explicitly ask.
- When working in a service, load that service's CLAUDE.md.
- Agents handle cross-service exploration.
- Before writing to a file for the first time this session, check @sessions/active-work.md and claim it (see Multi-session coordination below)

## Multi-session coordination
If more than one Claude Code session runs on this repo at once (e.g. one per
service), they can silently overwrite each other's edits. Follow the claim
protocol in @sessions/active-work.md — claims are shared across ALL services
in this repo, not per-service. Claim files before writing, stop and tell me
if another active session already claims something you're about to touch,
and release your claims during `/wrap-up`.

## LLM routing
Full table → @ai-context/llm-routing.md

## Context files
- Repo overview  → @ai-context/overview.md
- Architecture   → @ai-context/architecture.md (cross-service view)
- Shared decisions → @ai-context/decisions/INDEX.md
- Tasks          → @ai-context/tasks.md
- Per-service context → @[service-name]/ai-context/
