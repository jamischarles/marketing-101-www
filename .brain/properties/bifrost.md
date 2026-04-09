# Bifrost

## Overview
Analytics co-pilot for vibe coders — question-driven observability that reduces analytics friction by 10x for people building apps with AI.

## Risk Appetite
**Ship Fast** — alpha stage, dogfooding on own properties. Speed of learning matters most.

## Repos
- `jamischarles/bifrost-tinybird` — monorepo (API, tracker, dashboard, Tinybird pipes, Supabase migrations, docs)

## URL
Deployed at bifrost-tinybird.vercel.app. Domain TBD.

## Tech Stack
- **Tracker:** bifrost.js — 2.7KB, zero-dep, esbuild-compiled IIFE, sendBeacon + fetch fallback
- **Data pipeline:** Tinybird (managed ClickHouse) — multi-tenant, one SQL pipe per question, 12-month TTL
- **API:** Vercel Functions (Next.js) — event proxy, query proxy, tenant CRUD, LLM onboarding endpoints
- **Dashboard:** Next.js, Chart.js, server components, 5-min query cache
- **Auth:** Supabase (email + Google OAuth, RLS on tenants + filter rules)
- **Hosting:** Vercel (auto-deploy via Git)

## Purpose
Vibe coders ship apps but fly blind on whether anyone uses them. Traditional analytics tools are powerful but overwhelming. Bifrost organizes everything around **questions** ("Are people actually using my app?"), not metrics ("DAU"). Drop in a script tag, get a dashboard that answers the 5 questions every app needs answered. LLM-first integration — users paste a prompt into their AI tool, the LLM writes the code.

## Target Audience
- Developers and vibe coders building AI-native SaaS and side projects who want observability without operational burden
- AI coding tools (Claude Code, Cursor) as first-class integration partners
- Indie hackers / junior devs who know they should track metrics but don't know what or how

## Positioning
Question-driven analytics, not metric dashboards. User never sees Tinybird. Everything is a question with an answer: "How many people visited today?" not "Check your DAU chart." LLM-first onboarding — `/api/instructions` returns framework-aware integration prompts.

## Monetization
- **Free:** 1 app, Tier 1 questions (5 core), limited AI chats
- **Pro ($19/mo or $149/yr):** All tiers, all recipes, AI chat, benchmarks, context export
- **Lifetime ($299):** Everything forever, first 100 customers

Free tier is generous. Don't ask for payment until the user has traffic worth analyzing.

## Current State
**Pipeline: Build > Dogfood**

M1 (Foundation) complete. M2 (Live Dashboard + Multi-Tenant) in progress. Currently dogfooding on 3 own sites: jamischarles.com, conf-recap-www, interview-jamis.

What's working:
- End-to-end event flow: tracker → event proxy → Tinybird → query proxy → dashboard
- 5 Tier 1 pipes: daily visitors, traffic sources, CTA rate, signup funnel, bounce rate
- Supabase auth with app/tenant management and auto-generated API keys
- Traffic filtering (smart defaults + custom rules, query-time, reversible)
- LLM-first onboarding APIs (`/api/instructions`, `/api/verify`, `/api/onboarding/status`)
- Dashboard with question tiles, date range selector, app switcher, Chart.js visualizations

## Growth / Marketing
- Community-first: r/vibecoding, r/SideProject, Indie Hackers
- Content marketing: recipes as SEO-friendly posts ("The 5 Questions Every Vibe Coder Should Answer")
- Build in public on jamischarles.com and X

## Roadmap
- **Phase 0 (now):** Daily driver — polish dogfood experience, clean data on all 3 sites
- **Phase 1:** Dogfood polish — answer-first tile text, FOUC fix, visual polish
- **Phase 2:** Invite 3-5 friends — cold LLM onboarding test, error states
- **Phase 3:** Early access (10-20 paying alpha users) — session list, drill-through, context export
- **M3:** AI chat (Claude API), health score, Tier 3 pipes, paywall, MCP server

## Architecture
```
User App (script tag + Bifrost.track())
  → /api/events (Vercel Function — validates API key, injects tenant_id, geo enrichment)
  → Tinybird analytics_events (multi-tenant, partitioned by month)
  → SQL Pipes (one per question, scoped by tenant_id)
  → /api/query (caches 5 min, resolves filter exclusions)
  → Dashboard (question tiles, chart visualizations)
```

## Operating Model
- Solo founder build
- Automatic deploy via Vercel Git integration
- Cost: $0 at M1-M2 (Tinybird free + Vercel free), scaling to ~$50-120/mo at M3 (Claude API, Stripe)

## Related
- [Feasibility Brief](bifrost-feasibility.md) — market research, TAM, competitive landscape
- [Product Pipeline](../knowledge/systems/product-pipeline.md)
- [Investment Tiers](../knowledge/systems/investment-tiers.md)
