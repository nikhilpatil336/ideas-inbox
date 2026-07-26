# Bootstrap prompts — monorepo
# Session 1 = root context. Then one session PER SERVICE.
# /clear between every session.

# ══════════════════════════════════════════
# SESSION 1 — root overview + root CLAUDE.md
# ══════════════════════════════════════════

This is a monorepo. Use explorer agent to read:
"explorer: list all top-level folders, identify which are
 services vs shared code vs config, and summarize each"

Then:

─── TASK 1: Create ai-context/overview.md ───
## Summary — what this repo contains and why it's a monorepo
## Services — table: Service | Language | Purpose | Port/URL
## Shared code — what lives in shared/common folders
## Build system — how the whole repo builds (Gradle, Turborepo, etc.)
## Cross-service communication — how services talk to each other

─── TASK 2: Fill root CLAUDE.md ───
Fill the services table, shared rules, build system section.

─── TASK 3: Create ai-context/architecture.md ───
Show services as boxes, draw arrows for their communication.
Include: what talks to what, via what mechanism.

Print: "Session 1 done. /wrap-up then /clear"

# ══════════════════════════════════════════
# SESSION 2..N — one session per service
# (repeat this for each service)
# ══════════════════════════════════════════

We are setting up context for the [SERVICE NAME] service.
Read the root @ai-context/overview.md for global context.
Use explorer agent to read [service-folder]/:
"explorer: read all files in [service-folder]/ and
 summarize what each major file/module does"

Then create these files inside [service-folder]/ai-context/:
1. overview.md — stack, features, commands for this service only
2. architecture.md — this service's internal structure + data flows
3. decisions/INDEX.md + ADR files for service-specific decisions
4. tasks.md — tasks specific to this service

Also fill [service-folder]/CLAUDE.md:
- Stack, Key commands, Service structure, Service-specific rules
- Fill in the Boundaries section: who this service talks to

Print: "Service [NAME] bootstrap done. /wrap-up then /clear"
