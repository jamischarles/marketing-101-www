# Patterns & Conventions

## General
- Prefer simple over clever
- Small files, single responsibility
- Name things for what they do, not what they are

## JavaScript / TypeScript
- ESM imports, no CommonJS in new code
- Prefer const and arrow functions
- Error handling: fail fast, surface errors early
- Avoid classes unless there's a clear reason

## Project Structure
- Flat-ish — avoid deep nesting
- Collocate tests with source files
- README in every project root

## Git
- Conventional commits (feat:, fix:, chore:)
- Small, focused PRs
- Main branch is always deployable

## Dependencies
- Fewer is better
- Audit before adding — check maintenance status, bundle size
- Pin versions in production

## Email Capture
- Form → Supabase `subscribers` insert → Resend API confirmation
- Always include `source` (e.g. "ration-landing") and `product` fields to segment later
- Don't gate downloads for developer audiences — use soft capture (optional form + in-app prompt)
- Waitlists are fine to gate — email IS the action when the product isn't ready yet
- See [email-capture system](../knowledge/systems/email-capture.md) for full architecture
