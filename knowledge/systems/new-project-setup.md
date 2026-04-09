# New Project Setup

## Purpose

Repeatable process for scaffolding a new project repo with the brain as a git submodule, consistent tooling, and standard structure. Ensures every new property starts with the same foundation and is properly tracked in the brain.

## Steps

1. **Choose a name** — check GitHub repo availability, domain availability, npm package conflicts
2. **Create GitHub repo** — `jamischarles/{name}` (or `save-your-brain-co/{name}`), private, with description
3. **Scaffold the project** based on platform target:
   - **Content / marketing site:** Astro + Tailwind
   - **Web app:** React + Tailwind (or Astro with React islands)
   - **iOS / macOS:** SwiftUI
   - **Games / kids projects:** Godot
4. **Add brain as git submodule:**
   ```bash
   git submodule add -b main git@github.com:save-your-brain-co/brain.git .brain
   ```
5. **Create root `CLAUDE.md`** with:
   ```markdown
   # {Project Name}

   One-liner description.

   ## Business Context
   See .brain/CLAUDE.md for brand, properties, and business context.

   ## Tech Stack
   [Project-specific stack details]

   ## Project Structure
   [Key directories and their purpose]

   ## Conventions
   [Project-specific conventions, or reference .brain/tech/patterns.md]
   ```
6. **Create `docs/` directory** for project-specific docs (PRD, architecture decisions, strategy)
7. **Set up PostHog** — add analytics snippet (eat your own cooking)
8. **Set up Vercel** — connect GitHub repo for automatic deploys
9. **Create property file in brain** — use `templates/property.md` as starting point, save to the appropriate location:
   - Company property: `companies/{company}/properties/{name}.md`
   - Unassigned / personal: `properties/{name}.md`
10. **Update brain indexes:**
    - Company or master property index (`_index.md`)
    - Investment tiers (`knowledge/systems/investment-tiers.md`) — always Tier 1
11. **Initial commit** — `feat: scaffold {name} project`

## Triggers

When starting any new product or property.

## Tools

- GitHub (repo creation)
- Vercel (hosting and deploys)
- Brain repo (documentation and tracking)
- PostHog (analytics)

## Related

- [Product Pipeline](product-pipeline.md) — lifecycle phases for tracking property status
- [Investment Tiers](investment-tiers.md) — everything starts at Tier 1
- [Property Template](../../templates/property.md) — template for brain property files
- [Tech Patterns](../../tech/patterns.md) — coding conventions
- [Tech Stack](../../tech/stack.md) — platform target decisions
- [Tech Tooling](../../tech/tooling.md) — portfolio-wide tool choices
