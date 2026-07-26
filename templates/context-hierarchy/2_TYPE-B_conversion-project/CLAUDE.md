# [PROJECT NAME] — [Source language] to [Target language] conversion
# [One sentence description]

## This is a conversion project
- Source ([language]):  [source-project-folder]/
- Target ([language]):  [target-project-folder]/
- Conversion tracker:   @ai-context/conversion-progress.md

## Stack

### Source project
<!-- Filled by Claude during Session 1 -->

### Target project
<!-- Filled by Claude during Session 1 -->

## Key commands

### Source
```bash
# run:
# build:
```

### Target
```bash
cargo run      # run
cargo check    # compile-check (use instead of build — faster)
cargo build    # full build
```

## Project structure
<!-- Filled by Claude during Session 1 — both trees -->

## Project-specific rules
<!-- Filled by Claude during Session 1 -->
<!-- Will include source + target rules and conversion constraints -->

## Behavior rules
- Show diff BEFORE changing any file. Wait for approval.
- Explain in 2–5 bullets: what changed + why. No preambles.
- Do NOT run tests unless I explicitly ask.
- Agents handle exploration — never read entire codebase in main session.
- Always check conversion-progress.md before converting a class.
- Before writing to a file for the first time this session, check @sessions/active-work.md and claim it (see Multi-session coordination below)

## Multi-session coordination
If more than one Claude Code session runs on this project at once, they can
silently overwrite each other's edits. Follow the claim protocol in
@sessions/active-work.md: claim files before writing, stop and tell me if
another active session already claims something you're about to touch, and
release your claims during `/wrap-up`.

## LLM routing for conversion tasks
- Understand source class logic     → Sonnet (Tab 1)
- Decide target architecture/traits → Opus   (Tab 1)
- Convert simple CRUD class         → Qwen   (Tab 2)
- Convert complex logic             → Sonnet plans, Qwen writes
- Debug compile error in target     → Haiku  (Tab 1)
- Security review of converted code → Sonnet (Tab 1)

## Context files
- Overview      → @ai-context/overview.md
- Architecture  → @ai-context/architecture.md
- Decisions     → @ai-context/decisions/INDEX.md
- Tasks         → @ai-context/tasks.md
- Patterns      → @ai-context/patterns.md
- Conversion    → @ai-context/conversion-progress.md
- LLM guide     → @ai-context/llm-routing.md
