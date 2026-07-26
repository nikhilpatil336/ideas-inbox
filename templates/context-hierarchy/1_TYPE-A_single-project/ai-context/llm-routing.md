# LLM routing guide

## Two-tab setup

| Tab | Model | Cost | Use for |
|-----|-------|------|---------|
| Tab 1 | Claude Sonnet / Opus / Haiku | Paid | Thinking, planning, debugging |
| Tab 2 | Local Qwen2.5 Coder (Ollama) | Free | Writing code |

## Full task routing table

| Task | Model | Tab | Reason |
|------|-------|-----|--------|
| Architectural planning | Opus | 1 | Needs deep tradeoff reasoning |
| Big tech decisions | Opus | 1 | High stakes, needs nuance |
| Task planning / breakdown | Sonnet | 1 | Good planner, cheaper than Opus |
| Complex bug — unclear cause | Sonnet | 1 | Needs multi-file trace |
| Security review | Sonnet | 1 | Needs security knowledge |
| Git pull sync (find what changed) | Sonnet | 1 | Reasoning about diffs |
| Known error / clear stack trace | Haiku | 1 | Fast + cheap for simple bugs |
| Boilerplate / CRUD | Qwen | 2 | Free, fast, repetitive code |
| Code gen from clear spec | Qwen | 2 | Free, follows instructions well |
| Template / config files | Qwen | 2 | Free, mechanical |

## Start Tab 2 (Qwen via Ollama) — Windows

Open a second PowerShell:
```powershell
$env:ANTHROPIC_BASE_URL="http://localhost:11434"
$env:ANTHROPIC_API_KEY="ollama"
cd [your project path]
claude --model qwen2.5-coder:7b
```

## Token saving rules
- Use Haiku for any error with a visible stack trace — Sonnet is 5x the cost
- Use Qwen for all code generation — zero cost
- Use explorer agent for file exploration — keeps main session lean
- /clear between unrelated tasks — cuts per-message cost 30–50%
- Load only the @ai-context/ file needed for today's task
