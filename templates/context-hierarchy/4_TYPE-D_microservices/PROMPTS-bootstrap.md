# Bootstrap prompts — microservices
# One session at a time. /clear between each.

# ═══════════════════════════════════════════════
# SESSION 0 — REQUIRED FIRST. I answer, not Claude.
# ═══════════════════════════════════════════════

Before starting, I will tell you:
1. Which services I have locally (folder names)
2. Which services my code calls but I do NOT have
3. For each service I don't have: do I have API docs? sample responses? nothing?

Ask me these three questions now. Do not guess.

# ═══════════════════════════════════════════════
# SESSION 1 — service-map.md + contracts + CLAUDE.md
# ═══════════════════════════════════════════════

Use the explorer agent:
"explorer: read all local service folders. For each, list:
 - what it does
 - every outbound call it makes (HTTP client calls, queue publishes, gRPC stubs)
 - the URL/topic and the request/response shapes used"

Then:

─── TASK 1: ai-context/service-map.md ───
Draw the mesh. Mark every service `← have` or `← CONTRACT ONLY`.
Fill the communication table from what you found in the calling code.

─── TASK 2: one contract file per external service ───
For each service marked CONTRACT ONLY:
Create ai-context/contracts/[name]-contract.md from TEMPLATE-contract.md.
Fill it ONLY from what the calling code proves:
- the URL it hits
- the request body it builds
- the response fields it reads
- the error codes it handles

Set confidence:
- "guessed" if inferred from calling code only
- "partial" if I gave you some docs
- "high" if I gave you an OpenAPI spec

Fill the "What I do NOT know" section honestly. Be generous with unknowns.

─── TASK 3: fill ai-context/contracts/INDEX.md ───

─── TASK 4: fill root CLAUDE.md ───
Fill the "Which services I have locally" table.

Print: "Session 1 done. /wrap-up then /clear"

# ═══════════════════════════════════════════════
# SESSION 2..N — one per LOCAL service only
# (skip services you don't have — they only get contracts)
# ═══════════════════════════════════════════════

Setting up context for the [SERVICE NAME] service.
Read root @ai-context/service-map.md for the mesh view.

Use explorer agent to read [service-folder]/ only.

Create inside [service-folder]/ai-context/:
- overview.md — this service's stack, features, commands
- architecture.md — internal structure + data flows
- decisions/INDEX.md + ADR files
- tasks.md

Fill [service-folder]/CLAUDE.md:
- Stack, commands, structure, service-specific rules
- Boundaries: which services it calls, and whether each is `have` or `contract only`

Print: "Service [NAME] done. /wrap-up then /clear"
