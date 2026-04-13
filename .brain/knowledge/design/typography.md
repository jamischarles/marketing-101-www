# Jason Santa Maria + Google Fonts — Typography

## In a Nutshell

Typography is the first impression your product makes — before anyone reads a word, they've already decided whether to trust it based on how the type *feels*. Good typography welcomes readers in and convinces them to stay. Bad typography triggers disdain and sends people away before the content gets a chance. The craft isn't about picking a "cool font" — it's about readability, hierarchy, and respect for how human eyes actually move across a screen.

## Source

**Jason Santa Maria** — *On Web Typography* (A Book Apart, 2014). Santa Maria is a designer, creative director, and one of the earliest voices to take web typography seriously as a discipline. He was creative director at A List Apart and Typekit. His book is the definitive practical guide to making type work on screens — not a history lesson, but a field manual for people shipping products.

**Google Fonts Knowledge** — fonts.google.com/knowledge. A free, open educational resource with 30+ lessons organized into three modules: Introducing Type, Choosing Type, and Using Type. Covers everything from type anatomy to variable fonts, with contributions from working typographers. The best freely available typography education on the web.

## The Principles

### 1. Readability vs. Legibility

These are not the same thing. **Legibility** is mechanical — can the reader physically distinguish one letter from another? **Readability** is experiential — does the reader *want* to keep going? A typeface can be perfectly legible and still unreadable if the line length is exhausting, the spacing is claustrophobic, or the size is punishing.

Design for readability first. Legibility is the floor; readability is the goal. If people can read it but don't enjoy reading it, you've failed.

### 2. How We Read

Readers don't process text letter by letter. The eye moves in **saccades** — quick jumps between **fixation points** — taking in chunks of 7–9 characters at a time. We recognize words by their overall shape more than by individual letters. This is why ALL CAPS is harder to read: it flattens word shapes into uniform rectangles.

Design implications:
- Preserve the natural rhythm of word shapes (avoid excessive letter-spacing in body text)
- Give the eye clean landing spots (consistent spacing, clear line beginnings)
- Don't interrupt saccades with decorative noise

### 3. Type Hierarchy

Hierarchy is how you tell the reader's eye where to go. Without it, everything screams at the same volume and nothing gets heard. Build hierarchy with four tools:

- **Size** — the most obvious lever. Headlines big, body smaller, captions smallest.
- **Weight** — bold pulls attention. Use it surgically, not everywhere.
- **Color/contrast** — darker text on light backgrounds for primary content; lighter grays for secondary.
- **Spacing** — whitespace around an element signals importance. More space = more importance.

A strong hierarchy means a reader can scan the page in 3 seconds and know where to start, what matters, and what's secondary. If they can't, the hierarchy is broken.

### 4. Choosing Typefaces

Santa Maria's approach: look for **workhorse typefaces** — fonts that perform well across many contexts, not fonts that look cool in one. A good workhorse has:

- **Clean rendering at multiple sizes** — looks sharp at 14px body text *and* 48px headlines
- **Quality numerals and punctuation** — tabular figures for data, proper quotation marks, complete character sets
- **Accented character support** — essential for international audiences
- **Multiple weights** — at minimum: regular, bold, and italic. More weights = more flexibility.
- **Good x-height** — taller lowercase letters are more readable on screens

Test a typeface at the size you'll actually use it, on the device your audience uses. A font that looks gorgeous at 72px in a design tool can fall apart at 16px on a phone.

### 5. Pairing Typefaces

The rule: **contrast, not conflict**. Two typefaces should be different enough to create visual interest but harmonious enough to feel like they belong together.

Reliable pairing strategies:
- **Serif + sans-serif** — the classic combo. Use sans-serif for UI/headlines, serif for long-form body text (or vice versa).
- **Same family, different weights** — a superfamily with sans, serif, and mono variants guarantees harmony.
- **Match x-height** — when two typefaces have similar x-heights, they feel balanced even if structurally different.

Avoid: pairing two fonts that are too similar (Helvetica + Arial = why bother) or two display fonts fighting for attention.

Two typefaces is usually enough. Three is the maximum for most products. More than three is a red flag.

### 6. The Numbers

Jason Santa Maria's specific, battle-tested recommendations:

| Property | Recommendation | Why |
|---|---|---|
| **Body text size** | 16–18px minimum | Below 16px, most typefaces strain readability on screens. 16px is the browser default for a reason. |
| **Line length (measure)** | 45–75 characters per line | Shorter than 45 and the eye bounces too often. Longer than 75 and the eye loses its place on the return sweep. 65 is the sweet spot. |
| **Line spacing (leading)** | 1.2–1.8× the font size | Tighter for headlines (1.2), looser for body text (1.5). Longer line lengths need *more* line spacing to help the eye track back. |

These aren't guidelines — they're constraints. Violate them only when you have a specific reason and have tested the result.

### 7. Variable Fonts

A single font file that contains an entire range of weights, widths, and other axes. Instead of loading `Regular.woff2`, `Bold.woff2`, `Italic.woff2` separately, one variable font file does it all.

Why this matters:
- **Performance** — one file instead of 4–8 files. Fewer HTTP requests, smaller total download.
- **Design flexibility** — you're not locked to predefined weights. Want font-weight: 450? Go for it.
- **Responsive design** — adjust weight or width fluidly based on viewport size.

Google Fonts ships hundreds of variable fonts. Use them. The `font-variation-settings` CSS property gives you granular control over every axis.

### 8. Responsive Typography

Type that works at one breakpoint and breaks at another is unfinished work.

Core practices:
- **Fluid type scaling** — use CSS `clamp()` to smoothly scale font sizes between a minimum and maximum based on viewport width. No abrupt jumps at breakpoints.
- **Adjust hierarchy per breakpoint** — a 64px headline on desktop might need to be 32px on mobile. The *ratio* between heading and body changes, not just the sizes.
- **Re-evaluate line length** — a container that's 75 characters wide on desktop might be 90+ on a wide monitor. Set `max-width` on text containers.
- **Test on real devices** — simulators lie. Fonts render differently on iOS, Android, Windows, and Mac. Test where your users actually are.

### 9. Type Classification

Know the families so you can reach for the right tool:

| Classification | Character | Best for |
|---|---|---|
| **Serif** (Times, Georgia, Lora) | Small strokes at letter ends. Traditional, authoritative. | Long-form reading, editorial, credibility. |
| **Sans-serif** (Helvetica, Inter, Open Sans) | Clean, no strokes. Modern, neutral. | UI, headlines, mobile, product interfaces. |
| **Slab serif** (Rockwell, Roboto Slab) | Thick, blocky serifs. Bold, sturdy. | Headlines, CTAs, emphasis in data-heavy layouts. |
| **Monospace** (Fira Code, JetBrains Mono) | Every character same width. Technical, precise. | Code, tabular data, terminal UIs. |
| **Display** (Playfair Display, Lobster) | Designed for large sizes. Expressive, distinctive. | Headlines, logos, hero sections. Never body text. |

Default to sans-serif for product UIs. It's the safest bet on screens and the hardest to get wrong.

### 10. Web Font Performance

Fonts are render-blocking by default. A slow font load means invisible text or a jarring flash.

Best practices:
- **`font-display: swap`** — show fallback text immediately, swap in the web font when loaded. Never leave users staring at blank text.
- **Subset fonts** — if you only need Latin characters, don't ship Cyrillic, Greek, and Vietnamese glyphs. Google Fonts does this automatically.
- **Use WOFF2** — the most compressed web font format. All modern browsers support it. There's no reason to ship TTF or OTF on the web.
- **Preload critical fonts** — `<link rel="preload" href="font.woff2" as="font" crossorigin>` tells the browser to fetch the font early.
- **Limit font files** — every additional weight/style is another network request. Two weights (regular + bold) covers 90% of use cases.

## How I Apply It

- **Product UIs:** Pick one workhorse sans-serif (Inter, system-ui, or a variable font) as the primary. Add one display or serif face for marketing/hero sections only. Two fonts, done.
- **Body text:** 16px minimum, always. Line length capped at 75 characters with `max-width` on containers. Line-height at 1.5 for body, 1.2 for headings.
- **Mobile first:** Test type at 375px width before anything else. If it's readable there, it'll work everywhere.
- **Landing pages:** Hierarchy is the whole game. Visitor scans in 3 seconds — size, weight, and spacing must telegraph what to read first, second, third.
- **Data-heavy screens (Bifrost):** Tabular numerals (monospace or tabular figures) for numbers. Consistent sizing so columns align. Never use display fonts in dashboards.
- **Performance:** WOFF2 only. Subset to Latin. Preload the primary font. `font-display: swap`. Variable fonts when more than 2 weights are needed.

## Related

- [Dashboard & Infographic Design](dashboard-design.md) — Tufte's data visualization principles complement typography when building data-heavy UIs. Typography provides the readability layer; Tufte provides the data-ink discipline.
- [Resonate — Big Idea, Sparkline, STAR Moments](../storytelling/nancy-duarte-resonate.md) — Visual hierarchy in type serves the same function as narrative structure in storytelling: guiding attention through a sequence. Duarte's Sparkline is a content structure; typography is its visual expression.
- [Minimum Effective Dose](../principles/minimum-effective-dose.md) — Two fonts. Three sizes. One weight for emphasis. That's MED for typography. More is almost always worse.
- [Data Science Foundations](../data-science/foundations.md) — When presenting data, type choices directly affect whether people can read and trust the numbers. Tidy data deserves tidy type.
