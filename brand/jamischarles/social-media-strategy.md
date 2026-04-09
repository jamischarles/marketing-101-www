# Social Media Strategy — Jamis Charles

> Last updated: March 2026
> Status: Active. Revisit quarterly.
> Dependency: Read `persona.md` first for voice, positioning, and principles.

---

## Strategy Summary

**jamischarles.com is the hub. Everything else is distribution.**

Social platforms are where people discover me. The site is where the real work lives. Every social post should either stand alone as signal or drive people back to the site. Never the reverse — I don't create content for social and then scramble to make a site post from it.

---

## Platform Strategy

### 1. jamischarles.com — Home Base

**Role:** Portfolio of builds, essays, and interactive content. The thing people link to.

**Current state:** Developer portfolio optimized for hiring. Needs full rebuild.

**Target state:**
- **Landing page:** Who I am, what I'm about, recent work. Not a resume.
- **/builds** (replacing /projects): Reframed from "things I learned" to "things I shipped." Each build gets a writeup with context, decisions, and outcome.
- **/writing:** Essays with opinions and positions. Interactive pieces when warranted. This is the Dustin Curtis / Tobias van Schneider layer — fewer pieces, higher craft.
- **/dead-ends:** Failed builds and abandoned experiments with honest postmortems. This is differentiated content almost nobody else publishes.
- **/til:** Keep it, but de-emphasize in nav. It's a reference garden, not a showcase. Useful for SEO and credibility, not for audience building.
- **RSS feed:** For the kind of people who use RSS. These are my people.

**Architecture notes:**
- Monorepo or shared repo for the site + content (decide during rebuild)
- Static generation, fast, no bloat
- The site itself should be a demonstration of craft

**Action items:**
- [ ] 30-day site rebuild (scope it tight — don't let this become a project that blocks everything else)
- [ ] Write the first Weekend Build post during the rebuild, so the new site launches with at least one piece of real content
- [ ] Update all external bios to point here

---

### 2. X / Twitter (@jamischarles) — Signal & Conversation

**Role:** Short-form signal. Interesting observations, build updates, opinions. The "campfire" where conversations happen.

**Tone:** Casual but sharp. No threads about productivity. No "10 things I learned" lists. Just: here's what I'm working on, here's what I think about it, here's a question worth discussing.

**Content types:**
- Build-in-progress screenshots and observations (1-2 per active project)
- Short opinions on tech, tools, AI, craft
- Links to new site posts with a one-line take (not "New blog post!")
- Replies and conversations with other builders
- Occasional "I asked Claude to roast me" or self-deprecating AI content

**What I don't post:**
- Engagement bait ("What's your unpopular tech opinion?")
- Threads designed to go viral
- Anything about follower counts or growth
- Retweets of motivational content
- Screenshots of my own analytics

**Cadence:** No schedule. Post when there's signal. Could be 3x/day during an active build, could be silent for a week. Silence is fine.

**SEO note:** "Jamis Charles" has a name collision with James Charles (beauty YouTuber, 24M subscribers). This means organic search discovery is hard. Mitigate by: always using full handle @jamischarles, building backlinks from site and other platforms, and accepting that Twitter discovery will be conversation-driven, not search-driven.

**Action items:**
- [ ] Update bio: something like "I build things. No drama. Just craft. → jamischarles.com"
- [ ] Pin a tweet that represents the new positioning (first Weekend Build post, or a strong opinion piece)
- [ ] Unfollow accounts that don't represent signal

---

### 3. LinkedIn — Professional Builder Posts

**Role:** "Interesting things I learned" posts aimed at the professional/engineering audience. This is where senior engineers, hiring managers, and potential collaborators live.

**Tone:** Professional but not corporate. The bar: would a staff engineer find this interesting enough to share with their team?

**Content types:**
- Short posts about technical discoveries, architecture decisions, or surprising learnings from builds
- Occasional longer posts with a clear opinion/position on industry trends
- Cross-posts of major site essays (summarized, with link)
- Conference talk announcements or recordings if/when relevant

**What I don't post:**
- "I'm humbled to announce..."
- Anything that reads like a LinkedIn influencer post
- Engagement farming (polls, "agree?", etc.)
- Anything about my employer that isn't public information

**Cadence:** 1-2x per week when actively building. Less when not. Quality over quantity.

**Action items:**
- [ ] Update headline from PayPal-centric to maker/builder identity
- [ ] Update About section to reflect new positioning
- [ ] First post: a short, opinionated take on something technical — zero preamble, just the insight

---

### 4. YouTube (@jamischarles) — Optional, High-Leverage

**Role:** Long-form demonstrations of craft. NOT a tutorial channel. Think: build vlogs, interactive essay walkthroughs, "Weekend Build" video versions.

**Why optional:** Video is the highest-effort medium, and I have five kids and a full-time job. Only invest here if the content naturally wants to be video (demos, visual walkthroughs, interactive pieces).

**If I do it:**
- Short (5-15 min), well-edited, craft-focused
- Show the build, not a tutorial. "Here's what I made this weekend and the decisions I faced" — not "How to build X in React"
- Consistent thumbnail style (minimal, clean, same font as site)
- AI-assisted editing to keep production time reasonable

**If I don't:**
- That's fine. Writing-first is a valid and sustainable strategy.
- Embed video demos on the site when useful, hosted wherever (even unlisted YouTube)

**Action items:**
- [ ] Decide: am I doing YouTube as a channel, or just using it for embedded demos? (Decide after first 3 Weekend Builds — see if any of them naturally want video.)

---

### 5. GitHub — The Receipts

**Role:** Proof of work. Every build should have a public repo (or at least the non-proprietary parts).

**What matters:**
- Clean READMEs that explain what the project does and why
- Active commit history (shows the work is real)
- Stars and forks are vanity — don't optimize for them

**Action items:**
- [ ] Audit existing repos — archive dead ones, update READMEs on active ones
- [ ] Ensure every new build has a corresponding public repo linked from the site

---

## How Ideas Become Content

Recurring series (Weekend Builds, Dead Ends, Essays) follow the site-first model — I know upfront these will be full pieces, so I write for the site and distribute to social. But for ad-hoc ideas — observations, opinions, small insights — I use the [Content Expansion Ladder](/knowledge/mental-models/content-expansion-ladder.md): tweet it first, and only expand to a thread, post, or full writeup when demand signals prove the idea is worth more time. Most ideas stay as tweets. The good ones earn their way up.

---

## Content Formats (Recurring Series)

### Weekend Build

**What:** A time-boxed build (one weekend) documented as a writeup.

**Structure:**
1. What I built and why
2. Key decisions and tradeoffs
3. What worked / what didn't
4. Worth it? Not worth it?
5. Open questions / what's next

**Where it lives:** jamischarles.com/builds/[name]
**Distribution:** Tweet thread summary → LinkedIn post → full writeup on site

**Cadence:** When I do a weekend build. Not every weekend. Maybe 1-2x/month.

---

### Dead End Builds

**What:** Projects I started and abandoned, with honest analysis of why.

**Structure:**
1. The idea and why it seemed good
2. How far I got
3. Why I stopped
4. What I'd do differently
5. Is there anything salvageable?

**Where it lives:** jamischarles.com/dead-ends/[name]
**Distribution:** Same as Weekend Build. Optional: cross-post with snarky self-commentary.

**Cadence:** Whenever I kill a project. Backlog of past dead ends to draw from.

**Why this matters:** Almost nobody publishes their failures with real analysis. This is high-signal, differentiated content that builds trust.

---

### "I Asked Claude to Roast Me"

**What:** A recurring bit where I use AI as a foil — auditing my code, my site, my decisions, my projects. Transparent about AI usage. Self-deprecating but insightful.

**Format:** Could be a tweet, a short post, or a longer piece depending on how interesting the roast is.

**Why this works:** It's meta in a way that's currently resonant. Most people either hide AI use or are performative about it. Using it as comedic self-deprecation while also getting genuine value from it is a third path that feels authentic.

---

### Essays (Infrequent, High-Craft)

**What:** Longer pieces with a clear position. Optionally interactive (animated diagrams, live code examples, visual explorations).

**Examples of topics:**
- Why breadth beats depth in the AI age
- The death of tutorial content (and what replaces it)
- Responsive disclosure: what to share and when
- How CRDTs actually work (interactive)
- Historical technology shifts and what they tell us about now

**Where it lives:** jamischarles.com/writing/[name]
**Distribution:** This is the content most likely to be shared organically. Post once, let it spread.

**Cadence:** One every 1-2 months. Do not force these. They happen when an idea is ready.

**The Dustin Curtis bar:** If it's going to be an interactive essay, it should be genuinely beautiful and functional. If I can't hit that bar, publish it as a regular essay instead.

---

## Metrics (What I Track, What I Ignore)

### Track (loosely)

- Site traffic (is anyone reading?)
- Inbound conversations (are people reaching out about the work?)
- Quality of replies/DMs (are interesting people engaging?)
- Project usage (are people using what I build?)

### Ignore

- Follower counts
- Like/retweet ratios
- "Impressions"
- Any platform-specific vanity metric
- Comparison to anyone else's numbers

### The Real Metric

Am I building things I'm proud of, and is the documentation of that building useful to me and at least a few other people? If yes, continue. If no, adjust or stop.

---

## Anti-Patterns to Avoid

1. **The content treadmill.** If I'm writing content instead of building, something is wrong.
2. **Audience capture.** If I start making decisions based on what "the audience" wants rather than what I want to build, something is wrong.
3. **The brand-before-work trap.** If I'm redesigning the site instead of shipping builds, something is wrong.
4. **Comparison spiral.** Pieter Levels does $250K/month. I am not Pieter Levels. I have a different life, different constraints, different goals. The reference creators are for strategic learning, not measuring myself against.
5. **Guilt about silence.** If I don't post for two weeks because life happened, that's fine. The "zero following energy" posture means I owe nobody a posting schedule.
6. **Scope creep on builds.** A Weekend Build is a weekend. If it's turning into a month, either ship what exists or move it to Dead End Builds.

---

## 30-Day Launch Plan

**Week 1:**
- [ ] Update all bios (Twitter, LinkedIn, GitHub, Pluralsight) to reflect new positioning
- [ ] Start site rebuild — scope it to: landing page, /builds, /writing, /dead-ends. No TIL migration yet.
- [ ] Choose and commit to: typeface, color palette, headshot

**Week 2:**
- [ ] Continue site rebuild
- [ ] Start first Weekend Build (ideally something that can ship in a weekend)
- [ ] Write the Weekend Build post as you go (don't build first, write later)

**Week 3:**
- [ ] Finish site rebuild (MVP — it doesn't need to be perfect)
- [ ] Publish first Weekend Build post on new site
- [ ] Share on Twitter and LinkedIn with zero fanfare — just the work

**Week 4:**
- [ ] Write one Dead End Build from the backlog (you have plenty of abandoned projects)
- [ ] Write one short LinkedIn post about something interesting you learned
- [ ] Assess: how did this feel? Adjust cadence and approach based on energy, not metrics

---

## Long-Term Vision (6-12 Months)

If this goes well:
- A portfolio of 10-15 shipped Weekend Builds with documentation
- 3-5 interactive essays that showcase technical craft
- A small but engaged audience of other builders and engineers
- Inbound opportunities (collaborations, speaking, consulting) that come from the work, not from networking
- Optionally: a course or digital product that packages something I've learned (only if it emerges naturally from the builds)

If this doesn't go well:
- I still have a better portfolio site, cleaner public repos, and documentation of my work
- Nothing lost. The builds happened anyway. I just talked about them.
