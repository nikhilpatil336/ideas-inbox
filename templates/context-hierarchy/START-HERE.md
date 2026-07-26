# START HERE — read this first

This kit has 4 project templates + machine-level files.
Pick the ONE template that matches your project. Ignore the others.

═══════════════════════════════════════════════════════════
STEP 1 — MACHINE SETUP (do this ONCE, ever)
═══════════════════════════════════════════════════════════

Folder: 0_MACHINE-LEVEL (copy to C-Users-nikhi)/

Copy the .claude folder from inside it into C:\Users\nikhi\
so you end up with:
  C:\Users\nikhi\.claude\CLAUDE.md
  C:\Users\nikhi\.claude\settings.json
  C:\Users\nikhi\.claude\hooks\token-tracker.js

IMPORTANT — you already have a C:\Users\nikhi\.claude\settings.json.
Our settings.json keeps "theme": "dark" and adds the hooks.
If you customised yours, merge by hand instead of overwriting.

Then: open token-tracker.js, line 9, set PLAN_LIMIT to your real
monthly token limit (from console.anthropic.com → Settings → Limits).

Install Ollama + Qwen for Tab 2:
  https://ollama.com/download
  ollama pull qwen2.5-coder:7b

═══════════════════════════════════════════════════════════
STEP 2 — PICK YOUR TEMPLATE
═══════════════════════════════════════════════════════════

1_TYPE-A_single-project     → one codebase, any language
2_TYPE-B_conversion-project → converting one language to another
3_TYPE-C_monorepo           → multiple services, you HAVE all of them
4_TYPE-D_microservices      → multiple services, you DON'T have all of them

═══════════════════════════════════════════════════════════
STEP 3 — COPY THE TEMPLATE INTO YOUR PROJECT
═══════════════════════════════════════════════════════════

Copy EVERYTHING inside your chosen template folder into your
project root (the folder you open in Claude Code).

Example for Type A:
  Copy contents of 1_TYPE-A_single-project/  →  D:\your-project\

You should end up with, at your project root:
  CLAUDE.md
  PROMPTS-bootstrap.md
  PROMPT-session-start.md
  ai-context/     (folder)
  sessions/       (folder)
  .claude/        (folder — may be hidden in Explorer, that's fine)

═══════════════════════════════════════════════════════════
STEP 4 — FILL THE PROJECT NAME
═══════════════════════════════════════════════════════════

Open CLAUDE.md. Fill line 1 (project name) and line 2 (description).
For conversion/microservices: also fill the folder names near the top.
Everything else gets filled AUTOMATICALLY in Step 5. Don't fill by hand.

═══════════════════════════════════════════════════════════
STEP 5 — RUN THE BOOTSTRAP (fills all your context docs)
═══════════════════════════════════════════════════════════

Open PROMPTS-bootstrap.md.
Run each SESSION block one at a time in Claude Code (Tab 1 = Sonnet).
After each session: type /wrap-up, then /clear, then run the next.

This reads your codebase and fills:
  ai-context/overview.md, architecture.md, decisions/, tasks.md
  and the empty sections of CLAUDE.md

You do this ONCE per project.

═══════════════════════════════════════════════════════════
STEP 6 — DAILY WORKFLOW (every session after bootstrap)
═══════════════════════════════════════════════════════════

Start:   paste PROMPT-session-start.md into Tab 1
         (after a git pull: type /sync first)
Work:    /plan [task]      → plan before coding
         /implement [task] → code with diff approval
         /debug [error]    → structured debugging
         /review           → before committing
         /convert [class]  → (Type B only) convert one class
End:     /wrap-up  →  /clear

═══════════════════════════════════════════════════════════
WHAT EACH FILE DOES (reference)
═══════════════════════════════════════════════════════════

CLAUDE.md              auto-loads every session; rules + routing
PROMPTS-bootstrap.md   run once, fills your context docs
PROMPT-session-start.md paste at the start of each session

ai-context/
  overview.md          what the project is, stack, commands
  architecture.md      folder map, system design, data flows
  decisions/INDEX.md   list of all decisions (ADR files)
  decisions/ADR-*.md   one decision each (add as you go)
  tasks.md             current / next / completed tasks
  patterns.md          reusable patterns + lessons (grows over time)
  edge-cases.md        edge cases with status (never delete entries)
  llm-routing.md       which model for which task
  conversion-progress.md  (Type B) class-by-class tracker
  service-map.md       (Type D) the mesh, marks have/contract-only
  contracts/           (Type D) one file per service you don't have

.claude/
  agents/explorer.md   reads files in isolated context (Haiku)
  agents/reviewer.md   checks code vs decisions (Sonnet)
  agents/debugger.md   root-cause analysis (Sonnet)
  agents/edge-scout.md finds edge cases (Sonnet)
  agents/converter.md  (Type B) source→target conversion (Sonnet)
  commands/*.md        your slash commands

sessions/              /wrap-up writes summaries here
  active-work.md       claim registry — check before editing if running
                       more than one Claude Code session on this project;
                       see CLAUDE.md → Multi-session coordination

═══════════════════════════════════════════════════════════
WHEN THIS CHAT GETS LONG
═══════════════════════════════════════════════════════════

Open "HANDOFF (paste into new chat...).md"
Paste it as the first message in a fresh Claude conversation,
write your new question at the bottom. Nothing is lost.
