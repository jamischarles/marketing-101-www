# LDS Conference Recap

## Overview
Content site that helps Latter-day Saints digest, summarize, and deeply engage with General Conference talks and other spiritual content.

## Risk Appetite
**Ship Fast** — content site in idea stage; speed of learning matters most.

## Repos
- `save-my-brain-co/conf-recap-www` — Astro 6 static site (public-facing)
- `save-my-brain-co/conf-recap-capture` — Node.js real-time transcription and publishing tool

## URL
Deployed on Vercel (auto-deploy from conf-recap-www). Domain TBD.

## Tech Stack
- **Site:** Astro 6, Tailwind CSS, Vercel
- **Capture tool:** Node.js, TypeScript, Express, Deepgram Nova-2 (speech-to-text), Anthropic SDK (structured extraction), WebSocket (real-time UI), yt-dlp + FFmpeg (YouTube Live audio capture), simple-git (auto-publish to www repo)

## Purpose
Help me digest and focus on the spiritual content I want to spend more time with. Conference talks are rich but dense — this site makes them accessible with summaries, key takeaways, and shareable quotes. AI does the heavy lifting; human editorial ensures reverence and accuracy.

## Target Audience
- Latter-day Saints who want to engage more deeply with General Conference
- Members who struggle to keep up with the volume of talks
- Study groups and individuals looking for structured discussion guides

## Positioning
AI-powered conference companion. Not a replacement for reading the talks — a tool to help you get more out of them.

## Monetization
Free content as primary offering. Potential for premium study guides or notification-based delivery.

## Current State
**Pipeline: Build > Dogfood**

Live and being shared with family. Currently covering April 2026 General Conference. Features:
- Talk summaries with progressive disclosure
- Session-filtered browsing
- Shareable talk and quote landing pages with OG meta unfurling
- Quote search
- Real-time capture pipeline: YouTube Live → Deepgram transcription → Claude structured extraction → auto-publish to site

## Operating Model
- Capture tool runs during live conference streaming, producing structured Talk objects + transcripts
- Auto-publishes to conf-recap-www via git, which auto-deploys on Vercel
- Seasonal cadence (primary content around April and October General Conference)
- Low-maintenance between conferences

## Roadmap
- Buy a domain and go public
- Polish content and design for broader sharing
- Explore notification-based delivery for new content

## Related
- Part of the Uplevel Co. suite of AI-for-good content properties
