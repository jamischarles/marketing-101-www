# Marketing 101

Interactive Astro web app — browse 35 marketing skills, 78 tool integrations, and book lessons.
Skills + tools content source: coreyhaines31/marketingskills (MIT licensed).
Book lessons are editorial notes authored in this repo (`content/lessons/`).

## Stack
- Astro 6.1.1, TypeScript, vanilla JS, CSS (dark theme, green accent)
- No component framework — all rendering is string concatenation in `<script define:vars>` blocks

## Content Pipeline
```
.skills/ (git subtree)      ┐
content/lessons/ (local)    ├─→ scripts/generate-ts.mjs ─→ src/data/{skills,tools,lessons}.ts ─→ Astro pages
```

## Commands
```bash
npm run generate   # markdown → src/data/ TypeScript
npm run dev        # generate + dev server
npm run build      # generate + production build
```

## Subtrees
- `.skills/` — content source (https://github.com/coreyhaines31/marketingskills.git)
- `.brain/` — shared brand context (git@github.com:save-your-brain-co/brain.git)

**⚠ Do not add book lessons inside `.skills/`.** That directory is a git subtree with an Agent-Skills spec enforced by `.skills/CLAUDE.md` — skills there must be agent instructions (second person, trigger phrases). Book lessons are editorial notes with a different format and belong in `content/lessons/` at the repo root.

## Sync commands
```bash
git subtree pull --prefix .skills https://github.com/coreyhaines31/marketingskills.git main --squash
git subtree pull --prefix .brain git@github.com:save-your-brain-co/brain.git main --squash
```

## Pages
- `/` — Skills browser with category filter + search (35 skills)
- `/skill?s=[slug]` — Skill detail with full rendered markdown + "Related Lessons" cross-link
- `/tools` — Tool integrations directory with capability filter
- `/lessons` — Book lessons browser with author filter (Weinberg, Hormozi, Priestley); click cards to expand full markdown

## Content: book lessons (`content/lessons/`)

Editorial notes extracted from marketing/growth books. One markdown file per lesson; filename = slug.

**Required frontmatter** (quote all string values — titles often contain colons):
```yaml
---
title: "The Bullseye Framework"
book: "Traction: How Any Startup Can Achieve Explosive Customer Growth"
author: "Gabriel Weinberg & Justin Mares"
author_key: "weinberg"   # weinberg | hormozi | priestley
topic: "Channel Strategy"
tags: [traction-channels, testing]
related_skills: [referral-program, free-tool-strategy]
---
```

The generator validates required fields and known `author_key` values; unknown authors or missing fields throw at build time. To add a new author, update `KNOWN_AUTHOR_KEYS` in `scripts/generate-ts.mjs` and the `AUTHOR_LABELS`/`AUTHOR_COLOR` maps in `src/pages/lessons.astro`.

## Patterns
- Data files in src/data/ are auto-generated — do not edit directly
- define:vars passes TypeScript data into page JS for client-side rendering
- Markdown rendered client-side via markdownToHtml() in each page
- Category colors: CRO=blue, Content=purple, SEO=teal, Paid=coral, Growth=green, Sales=amber, Strategy=steel
- Author colors (lessons): Weinberg=green, Hormozi=coral, Priestley=steel
