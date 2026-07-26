# Edge cases

<!-- Claude appends here whenever it finds an edge case while reading or converting code.
     NEVER delete an entry. Only change its status.
     This is the memory that prevents re-discovering the same edge case at step 12
     that was already explained at step 3. -->

## Status meanings
| Status | Meaning |
|--------|---------|
| `open` | Found, not yet understood or handled |
| `by-design` | Intentional in source. Reason documented. Must be preserved. |
| `resolved` | Handled in target. Link to the ADR or file. |
| `wont-fix` | Known, accepted, not fixing. Reason documented. |
| `bug` | Genuine bug in source. Do NOT replicate in target. |

## Rules for Claude
1. When you find an edge case, add it here with status `open` immediately
2. Before flagging a NEW edge case, search this file — it may already be documented
3. If an existing `open` case becomes understood later, update its status + add the reason
4. Never silently replicate an edge case marked `bug`
5. Never silently remove an edge case marked `by-design`

---

## Cases

### EC-001: [short title]
- **Status:** open
- **Found:** YYYY-MM-DD, during [task/step]
- **Where:** [file:line or class name]
- **What:** [what the code does that is unexpected]
- **Why it matters:** [what breaks if this is handled wrong]
- **Resolution:** [empty while open — filled when status changes]
- **Related:** [ADR link / other EC ids]

---

## Quick index
| ID | Title | Status | Where |
|----|-------|--------|-------|
| EC-001 | | open | |
