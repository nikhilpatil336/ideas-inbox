Plan this task (NO code yet): $ARGUMENTS

STEP 1 — Use explorer agent to read relevant files.
"explorer: read [relevant files] and summarize structure"

STEP 2 — Read @ai-context/decisions/INDEX.md.
Load any ADR files relevant to this task.
List any decisions that constrain this implementation.

STEP 3 — Break into atomic steps (5-10 min each).
Number them. Each step: what file changes + why.

STEP 4 — For each step, state which LLM:
[Opus]   architectural decision needed
[Sonnet] reasoning or debugging needed
[Haiku]  clear/simple change
[Qwen]   code generation or boilerplate

STEP 5 — Identify risks.
What could break? What decisions constrain this?

STEP 6 — Ask: "Proceed with this plan? yes / modify / cancel"
Do NOT write any code until I say yes.
