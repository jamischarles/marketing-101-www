# Shape Up

## In a Nutshell

A product development methodology built around fixed time, variable scope. Instead of estimating how long something will take (and being wrong), you decide upfront how much time you're willing to spend — the *appetite* — and shape the work to fit. If it's not done when the appetite runs out, it doesn't automatically get more time.

## Source

Ryan Singer — *Shape Up: Stop Running in Circles and Ship Work that Matters* (Basecamp, 2019). Free online. Born from how Basecamp ships software with a small team on 6-week cycles.

## The Framework

### 1. Shaping

Before betting on a project, shape it: define the problem, sketch a rough solution (fat-marker level, not wireframes), and identify rabbit holes. Shaping happens at the right level of abstraction — concrete enough to know what you're building, abstract enough to leave room for the builder to make decisions.

### 2. Betting

At the "betting table," decide what to build next. Each shaped pitch gets an appetite — a time budget that reflects how much the work is *worth*, not how long it might take. If the appetite is 2 weeks, the scope must fit in 2 weeks. No negotiation after the bet is placed.

### 3. Building

Work proceeds in cycles. Use hill charts to track progress:
- **Uphill** = figuring it out (unknowns, exploration, design decisions)
- **Downhill** = executing (known work, implementation, polish)

A task stuck on the uphill side for too long is a red flag — it means the problem isn't understood yet.

### 4. Circuit Breaker

If the work isn't done when the appetite runs out, it stops. No automatic extensions. The team can re-pitch it for the next cycle, but it competes fresh against other bets. This prevents sunk-cost death spirals and forces honest shaping upfront.

### 5. Cool-Down

Between cycles, take a cool-down period for cleanup, bug fixes, exploration, and shaping the next round of bets. This prevents the treadmill feeling of back-to-back sprints.

## Key Concepts

- **Appetite vs. estimate** — "How much is this worth?" not "How long will this take?" Flips the framing from prediction to commitment.
- **Fixed time, variable scope** — the opposite of traditional project management. Time is the constraint; scope flexes to fit.
- **Fat-marker sketches** — shape at low fidelity so builders have latitude. Over-specifying kills creativity and creates fake precision.
- **Hill charts** — a visual for tracking whether work is in the "figuring it out" phase or the "making it happen" phase.
- **No backlogs** — pitches that don't get bet on are discarded. If an idea is important, it'll come back. Backlogs are graveyards that create guilt.
- **Circuit breaker** — the discipline of stopping when appetite runs out. Prevents the "just one more week" trap.

## How I Apply It

Solo adaptation for 2.5 hours/day maker time:

- **Appetite = maker-hours I'm willing to spend.** A 2-week appetite at 2.5h/day = ~25 hours. That's the budget. If a feature can't ship in 25 hours, re-shape it smaller or don't bet on it.
- **Hill charts as a mental check.** Am I still figuring out what to build (uphill) or am I executing on known work (downhill)? If I've been uphill for half the appetite, that's the signal to re-shape or kill the bet.
- **Circuit breaker prevents Tier 1 death spirals.** An explore-tier experiment gets a small appetite. If it doesn't ship, it doesn't earn more time — matches the [Investment Tiers](../systems/investment-tiers.md) philosophy of signal over enthusiasm.
- **Sprint modalities are solo cycles.** The Ship Sprint, Launch Sprint, and Content Blitz in [Time Allocation](../systems/time-allocation.md) are shaped bets with built-in appetites and circuit breakers.
- **No backlogs.** Milou captures ideas, but the Monday review decides what to bet on this week. Unclaimed ideas stay in the pile — no guilt, no grooming.

## Related

- [Investment Tiers](../systems/investment-tiers.md) — appetite maps to tier; Tier 1 = small appetite, Tier 3 = large
- [Time Allocation](../systems/time-allocation.md) — sprint modalities are the solo version of shaped cycles
- [Tiny Bets](../mental-models/tiny-bets.md) — circuit breaker = killing a losing bet without guilt
- [Personal Kanban](personal-kanban.md) — WIP limits complement appetite by preventing parallel overload
- [Now/Next/Later](../mental-models/now-next-later.md) — shaping moves an idea from Later to Next
