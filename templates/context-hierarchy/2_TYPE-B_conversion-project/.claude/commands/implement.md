Implement this: $ARGUMENTS

STEP 1 — Use the explorer agent to read relevant files.
Do NOT read files directly in main session. Say:
"explorer: read [files] and tell me [what I need to know]"

STEP 2 — Show the plan before coding.
List every file that will change and why. One line per file.
Ask: "Proceed? yes / no / change something"
Wait for my reply.

STEP 3 — For each file change, show a diff BEFORE writing:
```
FILE: path/to/File.java
REASON: [one sentence]

- [removed line]
+ [added line]
  [context line — no prefix]
```
Ask: "Approve? yes / no / add context"
Wait for my reply. Write only approved changes.

STEP 4 — After writing: just say "Done ✓"
Do NOT show the code again.

STEP 5 — Run the compile/check command from CLAUDE.md.
Report: pass ✓ or fail with error.
If fail: use the debugger agent to find the cause. Fix it. Do not ask.

STEP 6 — Update @ai-context/tasks.md
Mark completed steps [x]. Move to Completed if task is done.

STEP 7 — If any new pattern or decision was made, say:
"New pattern identified — should I add to patterns.md? yes / skip"

STEP 8 — Print:
• What changed (2-3 bullets)
• Which LLM for next task
