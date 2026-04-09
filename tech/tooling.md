# Tooling

Portfolio-wide tool choices, organized by job-to-be-done.
When I need X, I reach for Y.

For languages, frameworks, and code-level preferences, see [stack.md](stack.md).

## Guiding Principles

- **Free or generous tiers by default.** Only pay when there's critical need and/or outsized value — and no better or cheaper alternative exists.
- **Example:** Claude Max is worth paying for. It's critical to the workflow, delivers outsized value, and nothing else comes close.
- **Pay when profitable.** Keep costs near zero until revenue justifies it. Then pay for tools where the value and DX are clearly there.
- This discipline is a key source of portfolio leverage.

---

## Analytics & Instrumentation

- **PostHog** — product analytics, feature flags, session replay

## Product & Project Management

- **Linear** — feature planning, issue tracking, product launches

## Command Center / Internal Ops

- **Milou** — personal operations hub, cross-property orchestration (Telegram → triage → GitHub → Claude Code → PR)

## Platform Targets

| Platform | Framework / Tool |
|---|---|
| iOS | SwiftUI |
| macOS | SwiftUI |
| Web apps | React + Tailwind |
| Blog / marketing sites | Astro |
| Games / kids projects | Godot |

## Database & Backend

- **Supabase** — portfolio-wide default for database, auth, and backend services

## Monitoring & Crash Reporting

- **Sentry** — crash reporting for native apps (iOS/macOS)

## Development

- **Claude Code** — primary dev assistant
- **Claude.ai** — brainstorming, writing, research
- **GitHub** — source control, CI, collaboration
- **Vercel** — hosting and deploys

## Content & Media

- **Midjourney** — image generation (brand, marketing)
- **Google Stitch** — image generation (alternate)

## Email & Comms

- **Resend** — email delivery across the portfolio: waitlist confirmations, download follow-ups, newsletter, and (future) transactional email. API-first, React email templates, generous free tier (3k emails/month).
- **Supabase** (see Database above) — stores subscriber data in a `subscribers` table. Queryable, exportable, no vendor lock-in.
- See [email-capture system](../knowledge/systems/email-capture.md) for full JTBD analysis, architecture, and per-property strategies.

## Design

_TBD — placeholder for when a tool is chosen._

## Payments & Billing

_TBD — placeholder for when a tool is chosen._
