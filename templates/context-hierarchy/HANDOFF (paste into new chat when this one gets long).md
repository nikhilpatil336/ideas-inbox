# HANDOFF — paste this as the FIRST message in a new Claude conversation
# This transfers everything we built without re-explaining it.

---

I'm continuing work from a previous conversation. Here is my full context.

## Who I am
Software developer. Windows (username: nikhi). IntelliJ + Claude Code.
I run two Claude Code tabs:
- Tab 1 = Anthropic models (Sonnet/Opus/Haiku) for planning, decisions, debugging
- Tab 2 = local Qwen2.5 Coder 7B via Ollama for code generation (free)

I do NOT write test cases. Never generate or run tests unless I explicitly ask.

## What I built (already done, do not rebuild)
A universal Claude Code context hierarchy kit with three parts:

**base/** — goes into every project:
- CLAUDE.md (auto-loads; contains Karpathy working rules + decision transparency block)
- ai-context/ — overview.md, architecture.md, tasks.md, patterns.md, edge-cases.md,
  llm-routing.md, decisions/INDEX.md + one ADR file per decision
- .claude/agents/ — explorer (haiku, read-only), reviewer (sonnet), debugger (sonnet),
  edge-scout (sonnet)
- .claude/commands/ — implement, plan, sync, wrap-up, review
- sessions/ — session summaries written by /wrap-up

**type-conversion/** — added on top of base for language conversion projects:
- conversion-progress.md tracker
- converter agent
- /convert command

**type-microservices/** — added on top of base when I don't have all services:
- service-map.md (mesh view, marks each service "have" or "contract only")
- contracts/ folder — one contract file per service I don't have locally
- Rule: never infer implementation from a contract

**~/.claude/** (machine-level, already set up):
- CLAUDE.md — my personal preferences
- settings.json — hooks with forward-slash paths (C:/Users/nikhi/...)
- hooks/token-tracker.js — prints token usage bar after every response

## Key rules I follow
1. Show a diff BEFORE changing any file. Wait for yes/no/add-context.
2. After writing: just say "Done ✓" — don't show code again.
3. Explain in 2-5 bullets: what changed + why. No preambles.
4. End every response with a DECISIONS I MADE block listing anything chosen
   without asking me. If none: "DECISIONS I MADE: none".
5. Karpathy rules: don't assume, don't hide confusion, simplicity first,
   surgical changes, surface tradeoffs.
6. Use the explorer agent for reading files — never load whole codebase in main session.
7. /clear between unrelated tasks.
8. After git pull: run /sync (reads only changed files, updates only affected docs).
   Never re-run the full bootstrap.

## My workflow
Session start → paste PROMPT-session-start.md
During work → /plan, /implement, /debug, /review
Session end → /wrap-up then /clear

## What I want from you now
[WRITE YOUR NEW QUESTION HERE]

---
