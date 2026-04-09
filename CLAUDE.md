# Marketing 101

Interactive Astro web app — browse 35 marketing skills and 78 tool integrations.
Content source: coreyhaines31/marketingskills (MIT licensed).

## Stack
- Astro 6.1.1, TypeScript, vanilla JS, CSS (dark theme, green accent)
- No component framework — all rendering is string concatenation in `<script define:vars>` blocks

## Content Pipeline
.skills/ git subtree → scripts/generate-ts.mjs → src/data/skills.ts + tools.ts → Astro pages

## Commands
```bash
npm run generate   # .skills/ markdown → src/data/ TypeScript
npm run dev        # generate + dev server
npm run build      # generate + production build
```

## Subtrees
- `.skills/` — content source (https://github.com/coreyhaines31/marketingskills.git)
- `.brain/` — shared brand context (git@github.com:save-your-brain-co/brain.git)

## Sync commands
```bash
git subtree pull --prefix .skills https://github.com/coreyhaines31/marketingskills.git main --squash
git subtree pull --prefix .brain git@github.com:save-your-brain-co/brain.git main --squash
```

## Pages
- `/` — Skills browser with category filter + search (35 skills)
- `/skill?s=[slug]` — Skill detail with full rendered markdown
- `/tools` — Tool integrations directory with capability filter

## Patterns
- Data files in src/data/ are auto-generated — do not edit directly
- define:vars passes TypeScript data into page JS for client-side rendering
- Markdown rendered client-side via markdownToHtml() in each page
- Category colors: CRO=blue, Content=purple, SEO=teal, Paid=coral, Growth=green, Sales=amber, Strategy=steel
