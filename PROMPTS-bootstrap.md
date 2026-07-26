# Bootstrap prompts — universal
# Use for: single project (any language, new or existing)
# One session at a time. /clear between each.

# ══════════════════════════════════════════
# SESSION 1 — overview.md + fills CLAUDE.md
# ══════════════════════════════════════════

This is a new context setup. Read the entire project:
all source files, build files (pom.xml / Cargo.toml /
package.json / go.mod / requirements.txt), config files,
and README if present.

Use the explorer agent to do this:
"explorer: read all source files and return a summary
of what each major file/folder does"

Then do two things:

─── TASK 1: Create ai-context/overview.md ───
## Summary — one paragraph, what it does and who uses it
## Tech stack — table: Layer | Technology | Version
## Key features — numbered list, one sentence each
## Roles & access — what roles exist (or "none")
## Key commands — run, build, check/test

─── TASK 2: Fill CLAUDE.md ───
Fill Stack, Key commands, Project structure, and
Project-specific rules sections.

Rules for project-specific rules:
- Only write things Claude would get WRONG without being told
- Examples: disabled features, mandatory patterns, forbidden annotations
- Do NOT write obvious things like "write clean code"
- 4–8 rules maximum

Print: "Session 1 done. /wrap-up then /clear"

# ══════════════════════════════════════════
# SESSION 2 — architecture.md
# ══════════════════════════════════════════

Read @ai-context/overview.md.
Use explorer agent to read the src/ folder structure.

Create ai-context/architecture.md:
## Folder structure — annotated tree, 2-3 levels, skip test fixtures
## System design — ASCII diagram of components + connections
## Key data flows — 2-4 flows, Input → step → Output format
## Config management — where secrets live, how loaded

Keep under 120 lines. ASCII diagrams only, no prose paragraphs.

Print: "Session 2 done. /wrap-up then /clear"

# ══════════════════════════════════════════
# SESSION 3 — decisions/
# ══════════════════════════════════════════

Read @ai-context/overview.md. Scan for non-obvious patterns:
disabled features, unusual config, security choices, layer rules.

For each significant decision found:
1. Create ai-context/decisions/ADR-001-[title].md
   (use the ADR-000-template.md format)
2. Add a row to ai-context/decisions/INDEX.md

Only document decisions that are:
- Non-obvious (would Claude get this wrong without being told?)
- Architectural (affects how future code must be written)
- Permanent or semi-permanent

Do NOT document: obvious things, temporary hacks (just note in tasks.md)

Print: "Session 3 done. /wrap-up then /clear"

# ══════════════════════════════════════════
# SESSION 4 — tasks.md
# ══════════════════════════════════════════

Read @ai-context/decisions/INDEX.md.
Scan codebase for: TODO comments, commented-out code, partial implementations.

Create ai-context/tasks.md:
## Current task — "None — starting fresh" if nothing active
## In progress — any half-done work with exact state
## Next tasks — ordered by priority, each with WHAT + WHY
## Completed — already fully implemented items

Print: "Bootstrap complete! /wrap-up then /clear.
Use PROMPT-session-start.md from now on."
