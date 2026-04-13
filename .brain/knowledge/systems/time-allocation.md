# Time Allocation System

## Purpose

Define how my limited maker hours get divided so the priority stack
(Marcie > Kids > Work > Calling > Side projects) is honored daily — not just
in theory. This is the single source of truth for how time *should* be spent,
and the reference Milou uses to check how time *is* being spent.

Reality: full-time day job, father of five, 2–3 hours of maker time per day.
Every minute counts. There is no room for drift.

## Philosophy

Two ideas frame everything here:

**Big rocks first (Covey).** You don't have one life — you have roles: husband,
father, builder, steward. Each role needs intentional time or it atrophies.
Big rocks go in the calendar first; gravel fills the gaps. Quadrant II work
(important but not urgent — relationships, systems, skill-building) is where
the real leverage lives. This entire document is a Quadrant II artifact.

**Craftsman mindset (Newport).** Career capital accumulates through deliberate
practice on rare and valuable skills — not through "following your passion" or
shallow busywork. The maker blocks below are designed for deep, skill-building
output. Protect them ruthlessly. Two focused hours beats six scattered ones.

## Life Roles & Non-Negotiables

These are not buckets to optimize. They are commitments that override everything below.

| Role | Non-Negotiable | When |
|---|---|---|
| Husband | Quality time with Marcie, no screens | Evening, 8:30–9:30 PM |
| Father | Present for morning routine + bedtime | 7:00–8:00 AM, 7:00–8:00 PM |
| Father | Weekend half-day fully offline | Sat or Sun morning |
| Steward | Exercise or walk | 5:00–5:30 AM |
| Steward | 7+ hours sleep | Hard cutoff at 10:00 PM |

**Rule:** If a non-negotiable was skipped, the day is a fail — regardless of what
else was accomplished. Milou flags this immediately.

## Default Mode — Time Allocation

Default mode is steady-state: no launches, no crises, balanced progress across
all properties. This is where most weeks should live.

```yaml
# mode: default
# description: Steady-state. Balanced growth across all areas.
# effective: 2026-Q2
# basis: 2.5 hours/day (150 min)

allocations:
  process_improvements: 15   # ~22 min — systems, automation, tooling, brain repo, Milou
  marketing_social: 30       # ~45 min — Rule of 100 outreach, social posts, DMs, distribution
  content_shipping: 30       # ~45 min — writing, video, newsletter, 7-11-4 asset creation
  product_dev: 20            # ~30 min — code, design, bug fixes, feature shipping
  buffer: 5                  # ~8 min  — admin, comms, unexpected

daily_targets:
  deep_work_minutes: 90       # Minimum focused time (no Slack, no email)
  content_pieces_created: 1   # At least one publishable asset per day
  outreach_actions: 10        # DMs, comments, emails — Rule of 100 across the week
  code_commits: 1             # Ship something, even small

daily_limits:
  social_media_consumption: 15  # Minutes. Consumption, not creation.
  email_checks: 2               # Times per day, batched
  context_switches: 2           # Max major project switches per day
```

### Bucket Goals

Think of each allocation as a bucket that fills up during the week. The percentages are the *target fill level*, not a rigid daily prescription. Extreme flexibility in *how* each bucket fills — any task that serves the bucket's purpose counts. Wrote a tweet thread? Marketing bucket. Reviewed a PR? Product bucket. Updated the brain repo? Process bucket.

The weekly review checks bucket fill levels, not rigid task completion. The question is: "Did each area get enough energy this week?" not "Did I follow the exact schedule every day?" This reframes the system from compliance to balance.

Visual: imagine five meters, each filling toward their target line. If marketing is at 10% and product is at 50% by Wednesday, that's the signal to rebalance — not a failure. The [Rule of 100](../playbooks/rule-of-100.md) applied per-bucket gives each area its own volume target scaled to the allocation.

### Weekly Themes (Optional Layer)

Assign a default theme to each weekday to reduce decision fatigue about what to work on in each maker block. Example: Monday = marketing focus, Tuesday = product, Wednesday = content, Thursday = outreach, Friday = process/review.

Source: CGP Grey / Cortex podcast — themes set intention without creating rigid schedules. The theme biases your maker blocks but doesn't eliminate flexibility. If a sprint is active, the sprint overrides themes. If [Lion Energy](../mental-models/lion-energy.md) says Builder energy showed up on a "marketing day," ride the energy — the theme is a default, not a prison.

### Why This Split

- **Marketing + Content = 60%.** The weakest pillar right now is Lead Gen
  (see [Three Pillars](../mental-models/three-pillars.md)). Product is good enough
  to grow — distribution is the bottleneck.
- **Process at 15%** prevents "just one more improvement" from eating the day.
  Cap it. If you're spending more than 15% here, you're procrastinating.
- **Context switches capped at 2.** With only 2.5 hours, switching between more
  than two projects in a day guarantees nothing ships.
- **The 5% buffer is not slack.** Five kids generate interrupts. That's life.

## Sprint Modalities

Short-term shifts in allocation for intense, time-bounded pushes. A sprint
overrides Default Mode for a fixed number of days, then snaps back automatically.

### Ship Sprint

**When:** Pushing a product release across the finish line (e.g., Please Mr Pig App Store submission).
**Max duration:** 10 days.

```yaml
# mode: ship_sprint
# max_days: 10
# trigger: Product release within 2 weeks

allocations:
  process_improvements: 5
  marketing_social: 10
  content_shipping: 10
  product_dev: 70
  buffer: 5
```

### Launch Sprint

**When:** Marketing push around a launch (e.g., app launch week, newsletter campaign).
**Max duration:** 14 days.

```yaml
# mode: launch_sprint
# max_days: 14
# trigger: Launch event within 2 weeks

allocations:
  process_improvements: 5
  marketing_social: 40
  content_shipping: 35
  product_dev: 15
  buffer: 5
```

### Content Blitz

**When:** Building the 7-hour content library (Priestley 7-11-4), stacking assets fast.
**Max duration:** 7 days.

```yaml
# mode: content_blitz
# max_days: 7
# trigger: Content library needs rapid expansion

allocations:
  process_improvements: 5
  marketing_social: 15
  content_shipping: 65
  product_dev: 10
  buffer: 5
```

### Activating a Sprint

1. Declare it in Milou: `/sprint ship 10d` (or `launch`, `content`)
2. Milou shifts daily targets for the duration
3. At max duration, Milou auto-reverts to Default Mode and posts a sprint retro summary
4. 3-day cooldown in Default Mode before another sprint can start

## Daily Schedule Blocks

The "when" — structured around early bird pattern with a full-time day job.

| Block | Time | Type | Notes |
|---|---|---|---|
| Wake + Exercise | 5:00–5:30 | Steward | Move first, think second |
| Deep Work (AM) | 5:30–7:00 | Builder | Primary maker block. No Slack, no email. Highest-leverage task. |
| Family Morning | 7:00–8:00 | Father | Kids breakfast, school prep, presence |
| Day Job | 8:00–5:00 | Work | — |
| Family Evening | 5:00–7:30 | Father | Dinner, activities, homework, bedtime routine |
| Maker Block 2 | 7:30–8:30 | Builder | Second maker block. Lighter tasks, content, outreach. |
| Marcie Time | 8:30–9:30 | Husband | No screens, no work talk unless she initiates |
| Wind-down | 9:30–10:00 | Steward | Read, journal, prep tomorrow. Lights out by 10. |

**Total maker time: ~2.5 hours** (5:30–7:00 + 7:30–8:30).

The AM block is sacred. This is where deep product work and content creation
happen. The PM block is better suited for marketing outreach, social engagement,
and lighter creative work — energy is lower but these tasks don't require the
same cognitive load.

### Milou Time-of-Day Checks

Milou pings at transition points to confirm blocks are honored:

- **5:30 AM** — "Deep work starting. What's the #1 task?"
- **7:00 AM** — "Deep Work done. Family time."
- **8:30 PM** — "Maker Block 2 wrapped. Marcie time."
- **9:30 PM** — "Screens off. How was today?"

## Tracking Format — Milou Integration

### Daily Log Schema

Each day, Milou expects a log (via Telegram or auto-derived from time tracking):

```yaml
date: 2026-04-01
mode: default
hours_available: 2.5
blocks:
  process:    0.4h
  marketing:  0.8h
  content:    0.7h
  product:    0.5h
  buffer:     0.1h
non_negotiables:
  marcie_time:  true
  kids_time:    true
  deep_work_am: true
  exercise:     true
schedule_honored:
  deep_work_am_protected: true
  family_evening:         true
  marcie_evening:         true
```

### What Milou Checks

1. **Bucket variance** — flag if any bucket is >10 percentage points off target for current mode
2. **Non-negotiable streak** — track consecutive days all non-negotiables were hit
3. **Schedule adherence** — percentage of time-of-day blocks honored this week
4. **Sprint duration** — warn at max duration, auto-revert if not manually extended
5. **Weekly rollup** — average allocation vs. target, trend over 4 weeks

### Milou Alerts

- **Immediate:** missed non-negotiable → flag right away
- **Daily:** bucket >15% over/under → "You're drifting. Intentional?"
- **Daily:** process >20% for 3 consecutive days → "You're procrastinating."
- **Weekly:** summary of actual vs. target allocation
- **Sprint end:** retro prompt + auto-revert to default

## Rules & Guardrails

Hard rules. Not guidelines.

1. **Max consecutive sprint days: 14.** Must return to Default Mode for at
   least 3 days before starting another sprint.
2. **Minimum family time: 2.5 hours/day.** Father + Husband non-negotiables
   combined. Non-negotiable means non-negotiable.
3. **No work after 9:30 PM.** Wind-down is sacred. Sleep is non-negotiable.
4. **Deep Work AM is untouchable.** The 5:30–7:00 block is never sacrificed
   for email, planning, or "quick fixes."
5. **One sprint at a time.** No stacking Launch + Ship. Pick one.
6. **Weekly review required.** Every Sunday, review the week's allocation
   against targets. Adjust next week's plan. 15 minutes max.
7. **Two-project max per day.** With 2.5 hours, context switching is fatal.
   Pick two properties max and go deep.

## Triggers

- **Daily (5:30 AM):** Milou morning prompt — plan the day against current mode targets
- **Daily (9:30 PM):** Milou evening check-in — log the day
- **Weekly (Sunday):** Review actual vs. target, plan next week
- **On sprint start/end:** Milou activates/deactivates shifted allocations
- **On non-negotiable miss:** Immediate Milou flag

## Tools

- [Milou](../../properties/milou.md) — parses targets, enforces accountability, sends alerts
- Telegram — daily input channel for time logs and sprint commands
- Supabase — stores daily logs and weekly rollups

## Related

- [Rule of 100](../playbooks/rule-of-100.md) — drives the Marketing & Social bucket; bucket goals scale the "100" per area
- [7-11-4 Content Strategy](../playbooks/daniel-priestley-content.md) — drives the Content Shipping bucket
- [Volume Creates Skill](../principles/volume-creates-skill.md) — the principle behind doing reps, not perfecting
- [Three Pillars](../mental-models/three-pillars.md) — why Marketing + Content = 60% of default allocation
- [Goals](../../business/goals.md) — Q2 2026 priorities this allocation serves
- [Lion Energy](../mental-models/lion-energy.md) — burst pattern behind the daily schedule; energy overrides themes
- [Personal Kanban](../playbooks/personal-kanban.md) — the two-project-max rule is a WIP limit
- [Shape Up](../playbooks/shape-up.md) — sprint modalities are solo-adapted shaped cycles
- [GTD](../playbooks/gtd.md) — weekly review is the GTD Reflect step
- [Productivity Decision Tree](../systems/productivity-decision-tree.md) — "which technique do I need right now?"
