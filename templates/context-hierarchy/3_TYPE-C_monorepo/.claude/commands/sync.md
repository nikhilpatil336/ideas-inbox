Sync context after git pull. Do NOT re-read the whole codebase.

STEP 1 — Find what changed.
Run: git log --oneline HEAD~20..HEAD
Run: git diff HEAD~[N]..HEAD --name-only
(Use the explorer agent to do this: "explorer: list all files changed since [last known commit]")

STEP 2 — Read ONLY the changed files.
Use explorer agent: "explorer: read [changed files] and summarize what each one does now"
Do not read unchanged files.

STEP 3 — Compare against existing context docs.
Read @ai-context/overview.md, @ai-context/architecture.md, @ai-context/decisions/INDEX.md
For each changed file ask:
- Does this change the architecture? → update architecture.md
- Does this introduce a new decision? → create new ADR file + update INDEX.md
- Does this add a feature? → update overview.md features section
- Does this change a pattern? → update patterns.md

STEP 4 — Update only what changed.
Show each proposed update as a diff. Ask: "Apply? yes / no"

STEP 5 — Update @ai-context/tasks.md.
Add any new TODOs or partial implementations found in the changed code.

STEP 6 — Write a sync session note to sessions/YYYY-MM-DD-sync.md:
## Files changed by teammates
- [file]: [what changed]
## Context updates made
- [what was updated in which doc]
## New tasks found
- [any TODOs or incomplete work found]

STEP 7 — Print:
"Sync complete. Context is up to date with latest pull."
• N files changed
• N context docs updated
• N new tasks added
