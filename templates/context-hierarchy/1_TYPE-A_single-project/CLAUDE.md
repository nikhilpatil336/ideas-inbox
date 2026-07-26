# [PROJECT NAME]
# [One sentence: what this project does]

## Stack
<!-- Filled by Claude during Session 1 -->

## Key commands
<!-- Filled by Claude during Session 1 -->
```bash
# run:
# build:
# check:
```

## Project structure
<!-- Filled by Claude during Session 1 -->

## Project-specific rules
<!-- Filled by Claude during Session 1 after reading codebase.
     Only rules Claude would get WRONG without being told. 4-8 max. -->

## Working rules (Karpathy guidelines — always apply)

### Don't assume
- State assumptions explicitly before acting
- If multiple interpretations exist, present them — never pick silently
- If uncertain, stop and ask

### Don't hide confusion
- If something is unclear, say so. Name exactly what is confusing.
- Never guess and proceed

### Simplicity first
- Write the minimum code that solves the problem
- No speculative features. No abstractions for single-use code.
- No "flexibility" or "configurability" I didn't ask for
- No error handling for impossible scenarios
- If you write 200 lines and it could be 50, rewrite it
- Ask yourself: "would a senior engineer say this is overcomplicated?"

### Surgical changes
- Touch only what needs changing
- Match the existing code style — do not "improve" adjacent code
- No unrequested refactors

### Surface tradeoffs
- If a simpler approach exists, say so
- Push back when warranted

## Decision transparency (mandatory)
At the end of EVERY response where you made a choice I did not explicitly specify,
print this block:

```
DECISIONS I MADE:
1. [what you chose] — because [reason] — alternative was [X]
2. ...
```

Rules for this block:
- Include anything you picked without asking: naming, structure, library,
  error handling approach, file location, algorithm, data shape
- If you made zero autonomous decisions, print: "DECISIONS I MADE: none"
- Never skip this block
- Agents must return their decisions to you, and you include them in this block

## Behavior rules
- Show a diff (file path + before/after + one-line reason) BEFORE changing any file
- Wait for "yes / no / add context" before writing anything
- After writing: just say "Done ✓" — do not show the code again
- Explain only what changed, in 2–5 bullet points. No preambles.
- Do NOT generate or run test cases unless I explicitly ask
- Use the explorer agent for file reading — never read the whole codebase in main session
- Before writing to a file for the first time this session, check @sessions/active-work.md and claim it (see Multi-session coordination below)

## Multi-session coordination
If more than one Claude Code session runs on this project at once, they can
silently overwrite each other's edits. Follow the claim protocol in
@sessions/active-work.md: claim files before writing, stop and tell me if
another active session already claims something you're about to touch, and
release your claims during `/wrap-up`.

## LLM routing
Full table → @ai-context/llm-routing.md

- Architecture / big decisions     → Opus   (Tab 1)
- Task planning                    → Sonnet (Tab 1)
- Complex bug / unclear root cause → Sonnet (Tab 1)
- Security review                  → Sonnet (Tab 1)
- Known error / clear stack trace  → Haiku  (Tab 1)
- Boilerplate / CRUD / code gen    → Qwen   (Tab 2)

## Context files — load only what today's task needs
- Overview      → @ai-context/overview.md
- Architecture  → @ai-context/architecture.md
- Decisions     → @ai-context/decisions/INDEX.md
- Tasks         → @ai-context/tasks.md
- Patterns      → @ai-context/patterns.md
- Edge cases    → @ai-context/edge-cases.md
- LLM guide     → @ai-context/llm-routing.md
