# brain

Shared business context for all of Jamis Charles's projects.

This repo is intended to be connected as a `.brain` git submodule in every project repo.
Claude Code auto-loads `CLAUDE.md` from this directory, giving every session access to
brand, properties, tech preferences, and business goals.

## Structure

```
brain/
├── CLAUDE.md                # Entry point — Claude Code auto-loads this
├── brand/
│   ├── identity.md          # Name, handle, positioning, bio
│   └── voice.md             # Tone, writing style, content themes
├── properties/
│   ├── _index.md            # Quick-reference table of all sites/apps
│   └── {name}.md            # Details for each property
├── tech/
│   ├── stack.md             # Languages, frameworks, infra preferences
│   └── patterns.md          # Code conventions, git workflow, dependency policy
├── business/
│   ├── goals.md             # Current quarter priorities
│   └── audience.md          # Who I'm building for
├── knowledge/
│   ├── _index.md            # Knowledge base navigator
│   ├── mental-models/       # Frameworks for thinking about problems
│   ├── principles/          # Guiding beliefs and rules of thumb
│   ├── systems/             # Repeatable processes and workflows
│   └── insights/            # Observations and lessons from experience
└── templates/
    ├── property.md          # Blank template for new properties
    ├── mental-model.md      # Template for mental models
    ├── principle.md         # Template for principles
    ├── system.md            # Template for systems
    └── insight.md           # Template for insights
```

## Usage

### Adding to a new repo
```bash
git submodule add -b main git@github.com:save-your-brain-co/brain.git .brain
```

Then in the repo's `CLAUDE.md`, add:
```markdown
## Business Context
See .brain/CLAUDE.md for brand, properties, and business context.
```

### Pulling latest brain into a repo
```bash
git submodule update --remote .brain
git add .brain
git commit -m "chore: update .brain to latest"
git push
```
