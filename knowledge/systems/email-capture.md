# Email Capture

How we capture, store, and communicate with users across the portfolio.

---

## Jobs To Be Done

### Job 1: Waitlist / Interest Capture
**When** I'm building a product that isn't ready yet,
**I want to** capture emails from interested people,
**So that** I can notify them at launch and validate demand before shipping.

### Job 2: Product Download Email Capture
**When** someone downloads a product (e.g., Ration DMG),
**I want to** capture their email,
**So that** I can follow up with onboarding tips, updates, and eventually upsell.

### Job 3: Transactional Email (Future)
**When** a user takes an action (purchase, password reset, etc.),
**I want to** send them a triggered email,
**So that** the interaction feels professional and complete.

---

## Architecture

**Stack:** Supabase (storage) + Resend (delivery)

```
Form / In-App Prompt → Supabase `subscribers` table → Resend API (confirmation email)
```

### Supabase `subscribers` Table

| Column | Type | Notes |
|--------|------|-------|
| id | uuid | primary key |
| email | text | unique |
| source | text | e.g. "ration-waitlist", "pig-waitlist", "ration-download" |
| product | text | which property |
| created_at | timestamptz | auto |
| metadata | jsonb | optional: version downloaded, referrer, utm, etc. |

### Why This Stack

- **Already in use** — Supabase and Resend are portfolio defaults. No new vendors.
- **Covers all 3 jobs** — waitlist now, download capture now, transactional later.
- **Full control** — data lives in our Supabase, not a vendor's CRM.
- **Free tier** — Supabase free tier + Resend 3k emails/month free.
- **Simple** — a form, a table insert, an API call. No magic.

### Upgrade Path

If we outgrow this (need drip sequences, visual email builder, advanced automations), **Loops.so** is the natural next step — developer-friendly, API-first, covers waitlist + product email + transactional in one tool. But don't reach for it until the simple approach breaks.

---

## Per-Property Capture Strategies

### Ration (macOS App — Developer Audience)
**Approach: Soft capture, two touchpoints**

Don't gate the download. Developers hate that and it conflicts with the "respect intelligence" brand.

1. **Landing page:** Email field is prominent but optional. Download link is always visible. Frame as "Get notified about updates" — not a gate.
2. **In-app first launch:** After a few minutes of use, prompt for email. "Want update notifications?" This is where conversion will be highest — they've already decided the tool is worth their time.

**Source values:** `ration-landing`, `ration-in-app`

### Please Mr Pig (iOS App — Waitlist)
**Approach: Standard waitlist**

The product isn't ready yet, so email IS the action. Simple "Get notified when it launches" form. The character-driven brand makes this fun, not annoying.

**Source value:** `pig-waitlist`

### savemybrain.co (Newsletter)
**Approach: Newsletter signup**

Top-of-funnel for the whole ecosystem. Continue with current Resend-based signup.

**Source value:** `smb-newsletter`

---

## Related
- [Tooling](../../tech/tooling.md) — Resend as email tool
- [Patterns](../../tech/patterns.md) — Email capture implementation pattern
- [Product Pipeline](product-pipeline.md) — Signup and Lead Gen phases
- [Properties Index](../../properties/_index.md)
