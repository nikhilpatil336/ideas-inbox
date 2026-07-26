# Contracts index

Services my code talks to but whose source I do NOT have.

| Service | Protocol | Contract file | Confidence |
|---------|----------|--------------|------------|
| [name]  | REST     | [name]-contract.md | high / partial / guessed |

## Confidence meanings
- **high** — I have real API docs or an OpenAPI spec
- **partial** — I inferred it from my own calling code, may be incomplete
- **guessed** — I inferred it from usage only. Treat as unreliable. Verify before relying on it.

## Rule for Claude
When a task touches a contract-only service:
1. Load ONLY that one contract file
2. If the contract's confidence is "guessed" or the answer isn't in the file, STOP and say:
   "Contract for [service] doesn't cover this. I need the real API docs or a sample response."
3. Never invent an endpoint, field, or error code that isn't in the contract
