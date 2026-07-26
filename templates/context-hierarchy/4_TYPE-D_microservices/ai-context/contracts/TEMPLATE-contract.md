# Contract: [SERVICE NAME]

> I do NOT have this service's source code.
> Everything below is the observable interface only.
> Never infer implementation from this file.

## What I know
- **Owner team:** [team or "unknown"]
- **Base URL / topic:** [url or queue name]
- **Protocol:** REST / gRPC / Kafka / RabbitMQ / other
- **Auth:** [how my service authenticates to it]

## Endpoints / messages I call

### [METHOD] /path  — or  topic: [name]
**Purpose:** [one sentence]

**Request:**
```json
{ }
```

**Success response:**
```json
{ }
```

**Error responses:**
| Code | Meaning | What my service should do |
|------|---------|--------------------------|
| 400 | | |
| 404 | | |
| 500 | | |

**Known quirks:**
- [anything surprising — e.g. "returns 200 with error in body"]

**Timeout / retry policy:**
- [what my side does]

---

## What I do NOT know
<!-- Be explicit. This prevents Claude guessing. -->
- [ ] How it stores data
- [ ] Whether it is idempotent
- [ ] Its rate limits
- [ ] [anything else unknown]

## Open questions to ask the owning team
- [ ] [question]
