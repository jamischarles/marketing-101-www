# Solopreneur Engineering Skills

## Overview
A Claude Code skill plugin — a library of AI agent skills for solo developer / solopreneur engineering workflows. Installed as a Claude Code plugin so agents can invoke skills like `task-shaping`, `impact-scoring`, `cost-control`, etc. during coding sessions.

## Risk Appetite
**Low** — internal tooling; breaking it degrades Claude Code sessions across all properties.

## Repo
jamischarles/solopreneur-engineering-skills

## Purpose
Encodes hard-won solo dev engineering principles as callable AI agent skills. Covers: task shaping, scope discipline, AI pair programming, cost control, prioritization, and incremental investment. Skills are invoked by Claude Code agents during development sessions on any property.

## Depends On
**brain** (`save-your-brain-co/brain`) — included as a git subtree at `brain/`. Used to pull in brand, typography, design, and identity context into the skill library.

To update from brain:
```
git subtree pull --prefix=brain brain main --squash
```

## Target Audience
Internal — used by Claude Code agents working on any Jamis Charles / Save My Brain Co. / Uplevel Co. property.

## Current Skills
- `ai-pair-programming` — working effectively with AI coding agents
- `cost-control` — avoiding runaway API/third-party costs
- `incremental-investment` — building in small, validated bets
- `minimum-effective-dose` — doing the least required for signal
- `scope-discipline` — cutting scope before it cuts you
- `ship-daily` — shipping something every day
- `task-shaping` — shaping work before building (Shape Up for solo devs)
- `problem-first` — never solution without a clear problem statement
- `impact-scoring` — capturing, scoring, and prioritizing all problems before acting

## Related
- [Milou](milou.md) — primary host for day-to-day Claude Code sessions that use these skills
- [Tech Stack](../tech/stack.md)
- [Typography](../brand/jamischarles/typography.md) — design reference pulled in via subtree
