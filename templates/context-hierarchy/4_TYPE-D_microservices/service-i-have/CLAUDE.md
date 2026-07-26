# [SERVICE NAME]
# [One sentence: what this service does]

## Stack
<!-- Filled by Claude during service bootstrap session -->

## Key commands
```bash
# run:
# build:
# check:
```

## Service structure
<!-- Filled by Claude during service bootstrap session -->

## Service-specific rules
<!-- Filled by Claude during service bootstrap session -->
<!-- Things that apply ONLY to this service -->

## Boundaries
- This service MUST NOT import from: [other service names]
- This service communicates with: [other services] via [mechanism: REST/gRPC/queue]
- Shared types come from: [shared-folder]/ only

## Multi-session coordination
Shares the claim registry with the rest of the repo: @../sessions/active-work.md
(see root CLAUDE.md → Multi-session coordination for the protocol).

## Service context files
- Overview     → @[service]/ai-context/overview.md
- Architecture → @[service]/ai-context/architecture.md
- Decisions    → @[service]/ai-context/decisions/INDEX.md
- Tasks        → @[service]/ai-context/tasks.md
