# Service map

<!-- The whole mesh, including services I do not have locally.
     This is the ONE place that shows the full picture. -->

## The mesh
```
[ASCII diagram — Claude fills this during Session 1]

Example shape:

  [gateway]  ← have
      │
      ├──REST──▶ [order-svc]   ← have
      │              │
      │              ├──Kafka──▶ [billing-svc]   ← CONTRACT ONLY
      │              └──REST───▶ [inventory-svc] ← CONTRACT ONLY
      │
      └──REST──▶ [user-svc]    ← have
                     │
                     └──REST───▶ [auth-svc]      ← CONTRACT ONLY
```

## Legend
- `← have` — full source + full context available
- `← CONTRACT ONLY` — no source. See ai-context/contracts/[name]-contract.md

## Communication table
| From | To | Protocol | Sync/Async | Contract file |
|------|----|----------|-----------|---------------|
| | | | | |

## Shared data
| What | Owned by | Read by | How |
|------|----------|---------|-----|

## Rule for Claude
Before changing anything that crosses a service boundary:
1. Check this map — is the other side "have" or "contract only"?
2. If contract only → load that contract, do not guess at its behavior
3. If a change breaks a contract → STOP and tell me, this needs the other team
