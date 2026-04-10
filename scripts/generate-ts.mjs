#!/usr/bin/env node

/**
 * Codegen: .skills/ markdown → src/data/ TypeScript
 *
 * Reads the SKILL.md files from .skills/skills/ and tool integration
 * markdown from .skills/tools/integrations/, then generates TypeScript
 * data files that the Astro pages import.
 *
 * Usage: node scripts/generate-ts.mjs
 */

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SKILLS_DIR = join(ROOT, ".skills", "skills");
const TOOLS_DIR = join(ROOT, ".skills", "tools", "integrations");
const LESSONS_DIR = join(ROOT, "content", "lessons");
const DATA = join(ROOT, "src", "data");

const KNOWN_AUTHOR_KEYS = new Set(["weinberg", "hormozi", "priestley"]);

/** Parse frontmatter safely — falls back to regex if YAML is malformed */
function safeMatter(raw) {
  try {
    return matter(raw);
  } catch {
    // Manually extract frontmatter fields for files with unquoted colons
    const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    if (!fmMatch) return { data: {}, content: raw };
    const fmBlock = fmMatch[1];
    const body = fmMatch[2];
    const data = {};
    const nameMatch = fmBlock.match(/^name:\s*(.+)$/m);
    if (nameMatch) data.name = nameMatch[1].trim();
    const descMatch = fmBlock.match(/^description:\s*([\s\S]*?)(?=\n\w|\n---)/m);
    if (descMatch) data.description = descMatch[1].trim();
    const versionMatch = fmBlock.match(/version:\s*(.+)$/m);
    if (versionMatch) data.metadata = { version: versionMatch[1].trim() };
    return { data, content: body };
  }
}

function writeTs(filename, content) {
  const header = `// Auto-generated from markdown sources. Do not edit directly.\n// Run: node scripts/generate-ts.mjs\n\n`;
  mkdirSync(DATA, { recursive: true });
  writeFileSync(join(DATA, filename), header + content);
  console.log(`  ✓ ${filename}`);
}

function json(val) {
  return JSON.stringify(val, null, 2);
}

const CATEGORY_MAP = {
  // CRO
  "page-cro": "CRO",
  "signup-flow-cro": "CRO",
  "onboarding-cro": "CRO",
  "form-cro": "CRO",
  "popup-cro": "CRO",
  "paywall-upgrade-cro": "CRO",
  "ab-test-setup": "CRO",
  // Content & Copy
  copywriting: "Content & Copy",
  "copy-editing": "Content & Copy",
  "content-strategy": "Content & Copy",
  "social-content": "Content & Copy",
  "cold-email": "Content & Copy",
  "email-sequence": "Content & Copy",
  // SEO
  "seo-audit": "SEO",
  "ai-seo": "SEO",
  "programmatic-seo": "SEO",
  "schema-markup": "SEO",
  "site-architecture": "SEO",
  // Paid & Measurement
  "paid-ads": "Paid & Measurement",
  "ad-creative": "Paid & Measurement",
  "analytics-tracking": "Paid & Measurement",
  // Growth & Retention
  "referral-program": "Growth & Retention",
  "free-tool-strategy": "Growth & Retention",
  "churn-prevention": "Growth & Retention",
  "community-marketing": "Growth & Retention",
  "lead-magnets": "Growth & Retention",
  // Sales & GTM
  revops: "Sales & GTM",
  "sales-enablement": "Sales & GTM",
  "launch-strategy": "Sales & GTM",
  "competitor-alternatives": "Sales & GTM",
  // Strategy
  "marketing-ideas": "Strategy",
  "marketing-psychology": "Strategy",
  "customer-research": "Strategy",
  "pricing-strategy": "Strategy",
  "product-marketing-context": "Strategy",
};

// ─── Skills ───────────────────────────────────────────────────
function generateSkills() {
  const dirs = readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

  const skills = dirs.map((slug) => {
    const filepath = join(SKILLS_DIR, slug, "SKILL.md");
    const raw = readFileSync(filepath, "utf-8");
    const { data: fm, content: body } = safeMatter(raw);
    return {
      slug,
      name: fm.name || slug,
      description: fm.description || "",
      version: fm.metadata?.version ?? null,
      category: CATEGORY_MAP[slug] ?? "Other",
      body,
    };
  });

  writeTs(
    "skills.ts",
    `export interface Skill {
  slug: string;
  name: string;
  description: string;
  version: string | null;
  category: string;
  body: string;
}

export const SKILLS: Skill[] = ${json(skills)};

export const CATEGORIES: string[] = ${json([...new Set(skills.map((s) => s.category))])};
`
  );
}

// ─── Tools ────────────────────────────────────────────────────
function parseCapabilities(body) {
  const caps = { api: false, mcp: false, cli: false, sdk: false };
  const tableMatch = body.match(
    /\|\s*Integration\s*\|.*\n\|[-\s|]+\n([\s\S]*?)(?:\n\n|\n##|\n$)/
  );
  if (!tableMatch) return caps;
  const rows = tableMatch[1].trim().split("\n");
  for (const row of rows) {
    const cells = row.split("|").map((c) => c.trim());
    const label = (cells[1] || "").toLowerCase();
    const avail = (cells[2] || "").includes("✓");
    if (label === "api") caps.api = avail;
    if (label === "mcp") caps.mcp = avail;
    if (label === "cli") caps.cli = avail;
    if (label === "sdk") caps.sdk = avail;
  }
  return caps;
}

function generateTools() {
  const files = readdirSync(TOOLS_DIR)
    .filter((f) => f.endsWith(".md"))
    .sort();

  const tools = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const raw = readFileSync(join(TOOLS_DIR, filename), "utf-8");
    const { content: body } = safeMatter(raw);

    // Extract name from first H1
    const h1Match = body.match(/^#\s+(.+)$/m);
    const name = h1Match ? h1Match[1].trim() : slug;

    // Extract first paragraph as description
    const descMatch = body.match(/^#[^\n]+\n+([^#\n][^\n]+)/m);
    const description = descMatch ? descMatch[1].trim() : "";

    const capabilities = parseCapabilities(body);

    return { slug, name, description, capabilities, body };
  });

  writeTs(
    "tools.ts",
    `export interface ToolCapabilities {
  api: boolean;
  mcp: boolean;
  cli: boolean;
  sdk: boolean;
}

export interface Tool {
  slug: string;
  name: string;
  description: string;
  capabilities: ToolCapabilities;
  body: string;
}

export const TOOLS: Tool[] = ${json(tools)};
`
  );
}

// ─── Lessons ──────────────────────────────────────────────────
function generateLessons() {
  let files;
  try {
    files = readdirSync(LESSONS_DIR)
      .filter((f) => f.endsWith(".md"))
      .sort();
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("  ⚠ content/lessons/ not found — skipping lessons");
      return;
    }
    throw err;
  }

  const seenSlugs = new Set();
  const lessons = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    if (seenSlugs.has(slug)) {
      throw new Error(`Duplicate lesson slug: ${slug}`);
    }
    seenSlugs.add(slug);

    const raw = readFileSync(join(LESSONS_DIR, filename), "utf-8");
    const { data: fm, content: body } = safeMatter(raw);

    // Required fields
    for (const field of ["title", "book", "author", "author_key"]) {
      if (!fm[field]) {
        throw new Error(`Lesson ${slug}: missing required frontmatter field "${field}"`);
      }
    }
    if (!KNOWN_AUTHOR_KEYS.has(fm.author_key)) {
      throw new Error(
        `Lesson ${slug}: unknown author_key "${fm.author_key}" (expected one of: ${[...KNOWN_AUTHOR_KEYS].join(", ")})`
      );
    }

    return {
      slug,
      title: fm.title,
      book: fm.book,
      author: fm.author,
      authorKey: fm.author_key,
      topic: fm.topic || "",
      tags: Array.isArray(fm.tags) ? fm.tags : [],
      relatedSkills: Array.isArray(fm.related_skills) ? fm.related_skills : [],
      body,
    };
  });

  writeTs(
    "lessons.ts",
    `export interface Lesson {
  slug: string;
  title: string;
  book: string;
  author: string;
  authorKey: string;
  topic: string;
  tags: string[];
  relatedSkills: string[];
  body: string;
}

export const LESSONS: Lesson[] = ${json(lessons)};

export const AUTHORS: string[] = ${json([...new Set(lessons.map((l) => l.authorKey))])};
`
  );
}

// ─── Main ─────────────────────────────────────────────────────
console.log("Generating TS from markdown sources...\n");
generateSkills();
generateTools();
generateLessons();
console.log("\nDone.");
