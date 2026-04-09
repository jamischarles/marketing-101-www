# Milou

## Overview
Solopreneur command center — business operations HQ for managing all Save My Brain properties, from feedback triage to strategy to task dispatch.

## Risk Appetite
**Balanced** — internal ops tool; only you use it, but breaking it disrupts the whole workflow.

## Repo
jamischarles/milou

## URL
Deployed on Vercel (internal use).

## Purpose
Central nervous system for the entire Save My Brain portfolio. Handles business ops, strategy tracking, feedback capture, bug triage, and automated fix dispatch. The feedback loop: **Telegram capture → Milou triage → GitHub issue → Claude Code GitHub Action → PR**. Lets Jamis capture a bug from his phone and have a fix PR ready by the time he sits down.

## Target Audience
Internal — built as Jamis's business operations dashboard across all properties.

## Positioning
Internal only — not a public product. It's the operational backbone behind everything else.

## Monetization
None.

## Current State
**Pipeline: Build > Dogfood**

Telegram bot integration, Supabase backend, GitHub integration all working. Dashboard has tabs for Biz, Strategy, Inbox, Bugs, Approvals, Tasks. App registry maps slugs to repos across the portfolio. Being used daily as the internal ops hub.

## Growth / Marketing
N/A — internal tool, not public-facing.

## Roadmap
- Continue refining triage workflow
- Expand app registry as new properties launch

## Related
- Connects to all other properties via app registry
