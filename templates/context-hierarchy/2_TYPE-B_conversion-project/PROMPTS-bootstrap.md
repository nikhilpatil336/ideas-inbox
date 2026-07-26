# Bootstrap prompts — conversion project
# Use for: converting one codebase to another language
# One session at a time. /clear between each.

# ══════════════════════════════════════════
# SESSION 1 — overview.md + CLAUDE.md + conversion-progress.md
# ══════════════════════════════════════════

This is a conversion project. There are TWO sub-projects.
Use the explorer agent to read both:
"explorer: read all files in [source-folder]/ and
 [target-folder]/ and return summaries of each"

Then do three things:

─── TASK 1: Create ai-context/overview.md ───
## Summary — state this is a conversion project, source and target
## Tech stack — two tables, one per project
## Key features — what the source project does (target mirrors this)
## Key commands — one section per project

─── TASK 2: Fill CLAUDE.md ───
Fill Stack (both projects), Key commands (both),
Project structure (both trees), and Project-specific rules.
Also fill: source folder name, target folder name on lines 7-8.

─── TASK 3: Fill ai-context/conversion-progress.md ───
1. Fill in folder names at top
2. Count total source classes → fill total
3. Fill tracker table: one row per source class, grouped by layer
4. Mark already-converted as [x], in-progress as [~], rest as [ ]
5. Identify leaf classes (no dependencies) — mark them "convert first"

Print: "Session 1 done. /wrap-up then /clear"

# ══════════════════════════════════════════
# SESSION 2 — architecture.md (BOTH projects)
# ══════════════════════════════════════════

Read @ai-context/overview.md.
Use explorer agent to read both source and target folder structures.

Create ai-context/architecture.md:
## Source architecture — ASCII diagram of source system
## Target architecture — ASCII diagram of target system (as-planned)
## Folder structure — both trees annotated
## Key data flows — 2-4 flows from source, show how they map to target
## Config management — how each project loads config

Keep under 150 lines.

Print: "Session 2 done. /wrap-up then /clear"

# ══════════════════════════════════════════
# SESSION 3 — decisions/ (includes type mapping decisions)
# ══════════════════════════════════════════

Read @ai-context/overview.md and both codebases.

Create ADR files for:
1. Standard architectural decisions (same as any project)
2. Conversion strategy decisions — REQUIRED for conversion projects:
   - ADR-001-type-mapping.md: how source types map to target types
   - ADR-002-error-handling.md: how source errors map to target errors
   - ADR-003-not-converting.md: what is NOT being converted and why

Update ai-context/decisions/INDEX.md with all ADRs.

Print: "Session 3 done. /wrap-up then /clear"

# ══════════════════════════════════════════
# SESSION 4 — tasks.md (conversion-ordered)
# ══════════════════════════════════════════

Read @ai-context/conversion-progress.md.

Create ai-context/tasks.md.
Order Next Tasks by dependency — leaf classes first:
- [ ] **Convert [ClassName]** — [what it does + why convert now]

A leaf class = no dependencies on other unconverted classes.
List all leaf classes first, then their dependents, etc.

Print: "Bootstrap complete! /wrap-up then /clear."
