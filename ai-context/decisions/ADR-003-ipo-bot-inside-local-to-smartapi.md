# ADR-003: Build IPO exit bot inside local_to_smartapi, isolated from intraday flow

- **Date:** 2026-11-04
- **Status:** active (host/broker decided by user; detailed design still awaiting approval)

## What was decided
The IPO listing-day exit bot is a new `ipo/` package inside the existing Pi app
`D:\portable\springboot\wrkspc\1_percent_growth\local_to_smartapi` (Angel One SmartAPI),
not a separate project.

## Why
User's choice: that app already has the Angel One login, live price websocket, order-update
websocket, static-IP proxy and Docker deploy on the Pi. Rebuilding those would be duplicate work.

## Constraints that come with it
- The user requires that existing intraday behaviour is not affected. So the IPO module must never
  register in `OrderRegistry` or `BalanceService`. The 15:00 `EODSquareOffScheduler` only iterates
  `OrderRegistry`, so this rule is what keeps it away from IPO holdings.
- It uses its own non-blocking timers, because the app's Spring scheduler is single-threaded.
- It builds its own order requests (DELIVERY product, NSE or BSE). It does not touch
  `ChartinkOrderRequestFactory`, which hardcodes NSE/INTRADAY.
- It persists its state to JSON under `/home/trade_conf/ipo/` (the container restarts daily at 07:00).
- Only two shared-code edits are allowed: the price-filter freeze fix and the BSE resubscribe fix in
  `MarketFeedWebSocketConnector`. Both change existing behaviour only in their currently broken case.

## Alternatives rejected
- Separate service on a cloud VM: needs a second static IP and a second login. A second login
  would also invalidate the shared JWT of the running app.
