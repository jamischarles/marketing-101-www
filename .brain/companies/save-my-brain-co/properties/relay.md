# Relay

## Overview
macOS deep focus block orchestrator — structures what you work on during maker time by cycling between tasks in groups.

## Repo
jamischarles/relay-macos-app (not yet created on GitHub)

## URL
Not yet launched.

## Purpose
Completes the attention management trio: Ration limits distractions, Respite enforces breaks, Relay orchestrates what you work on. When you sit down with 3-4 tasks competing for limited deep work time, Relay lets you pre-commit to a plan and cycle between them intentionally.

## Core Mechanic
- Add tasks organized into **groups (rounds)**
- Tasks within a group cycle each other on a timer
- When all tasks in a group are marked complete, the next group unlocks
- Notification-only switching — you decide when to actually move on (not auto-advance)
- Session summary shows time spent per task

## Current State
**Pipeline: Build > Prototype**

v0.0.1 — Xcode project compiles, core UI complete (planning/active/summary views), no public release yet. Working title; may become "Cadence."

## Roadmap
- Dogfood: use daily during maker time, iterate on UX
- macOS Do Not Disturb integration
- Ration integration (auto-lock distractions during sessions)
- Respite integration (insert breaks between task rotations)
- Hard-cut HUD takeover option for switching

## Related
- [Ration](ration.md) — sibling product (limits distractions)
- [Respite](respite.md) — sibling product (enforces breaks)
