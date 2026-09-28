#!/usr/bin/env node
/* ==========================================================================
   Encrypts a private draft so only the passphrase can open it again.

   Drafts live in PrivateEssays/ (git-ignored) and never leave this machine.
   The encrypted output in hidden/ is the only thing that gets committed.

     node tools/encrypt.mjs add PrivateEssays/my-draft.md
     node tools/encrypt.mjs list
     node tools/encrypt.mjs remove <id>

   Two passphrase layers: the page passphrase encrypts hidden/index.json
   (the list of titles), and each article gets its own passphrase. Losing a
   passphrase means losing that article — there is no recovery path.
   ========================================================================== */

import { webcrypto as crypto } from "node:crypto";
import { readFile, writeFile, unlink, mkdir, readdir } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT_DIR = path.join(ROOT, "hidden");
const INDEX_FILE = path.join(OUT_DIR, "index.json");
const DRAFTS_DIR = path.join(ROOT, "PrivateEssays");

// Deliberately slow: a guessing program has to pay this cost per attempt.
const ITERATIONS = 600000;
const MIN_PASSPHRASE = 12;

/* ==========================================================================
   Crypto: PBKDF2-SHA256 -> AES-256-GCM. Same format hidden.js reads.
   ========================================================================== */

async function deriveKey(passphrase, salt) {
  const material = await crypto.subtle.importKey(
    "raw", new TextEncoder().encode(passphrase), "PBKDF2", false, ["deriveKey"],
  );
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: ITERATIONS, hash: "SHA-256" },
    material,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"],
  );
}

async function encrypt(passphrase, data) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(passphrase, salt);
  const ct = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv }, key, new TextEncoder().encode(JSON.stringify(data)),
  );
  return {
    v: 1,
    iter: ITERATIONS,
    salt: b64(salt),
    iv: b64(iv),
    ct: b64(new Uint8Array(ct)),
  };
}

// Returns null when the passphrase is wrong: AES-GCM fails to authenticate,
// so there is no separate password check to store or leak.
async function decrypt(passphrase, payload) {
  try {
    const key = await deriveKey(passphrase, unb64(payload.salt));
    const plain = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: unb64(payload.iv) }, key, unb64(payload.ct),
    );
    return JSON.parse(new TextDecoder().decode(plain));
  } catch {
    return null;
  }
}

const b64 = (bytes) => Buffer.from(bytes).toString("base64");
const unb64 = (text) => new Uint8Array(Buffer.from(text, "base64"));

/* ==========================================================================
   Terminal prompts
   ========================================================================== */

const canPrompt = Boolean(process.stdin.isTTY && process.stdin.setRawMode);

// Piped input (tests, scripts): take the answers a line at a time. Reading it
// up front avoids losing the lines while an answer is being processed.
let pipedLines = null;
async function readPiped() {
  if (pipedLines) return pipedLines;
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  pipedLines = Buffer.concat(chunks).toString("utf8").split(/\r?\n/);
  return pipedLines;
}

// Read a line of keystrokes without echoing them. Reading the keys directly
// rather than through readline's terminal mode is what works consistently
// across PowerShell, Windows Terminal and Unix shells.
function askHidden(question) {
  return new Promise((resolve) => {
    const stdin = process.stdin;
    process.stdout.write(question);
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding("utf8");

    let answer = "";
    const finish = (value) => {
      stdin.removeListener("data", onData);
      stdin.setRawMode(false);
      stdin.pause();
      process.stdout.write("\n");
      resolve(value);
    };

    const onData = (chunk) => {
      for (const char of chunk) {
        if (char === "\r" || char === "\n") return finish(answer.trim());
        if (char === "\u0003") { finish(""); process.exit(130); }        // Ctrl-C
        if (char === "\u007f" || char === "\b") answer = answer.slice(0, -1);
        else if (char >= " ") answer += char;
      }
    };

    stdin.on("data", onData);
  });
}

async function ask(question) {
  if (canPrompt) return askHidden(question);

  process.stdout.write(question);
  const lines = await readPiped();
  const answer = (lines.shift() || "").trim();
  process.stdout.write("\n");
  return answer;
}

async function askPassphrase(label, { confirm = false } = {}) {
  for (;;) {
    const pass = await ask(`${label}: `);
    if (pass.length < MIN_PASSPHRASE) {
      console.log(`  Too short. Use at least ${MIN_PASSPHRASE} characters — four or more random words is ideal.`);
      continue;
    }
    if (!confirm) return pass;
    const again = await ask(`${label} (again): `);
    if (again === pass) return pass;
    console.log("  Those didn't match. Try again.");
  }
}

/* ==========================================================================
   Drafts

   title: My title
   subtitle: optional
   date: 2026-09-22
   image: Images/something.png   (optional, 4:3, shown on the card)
   excerpt: optional             (defaults to the opening of the first paragraph)
   <blank line>
   Paragraphs, separated by blank lines.
   ========================================================================== */

function parseDraft(text) {
  const lines = text.replace(/\r\n/g, "\n").replace(/^﻿/, "").split("\n");

  // Header lines run until the first line that isn't "key: value".
  const meta = {};
  let cursor = 0;
  for (; cursor < lines.length; cursor += 1) {
    const match = lines[cursor].match(/^(title|subtitle|date|image|excerpt):\s*(.+)$/i);
    if (!match) break;
    meta[match[1].toLowerCase()] = match[2].trim();
  }
  const rest = lines.slice(cursor).join("\n");

  if (!meta.title) throw new Error("The draft needs a first line like: title: My title");
  if (meta.date && !/^\d{4}-\d{2}-\d{2}$/.test(meta.date)) {
    throw new Error("date must look like 2026-09-22");
  }

  const paragraphs = rest
    .split(/\n{2,}/)
    .map((block) => block.replace(/\n/g, " ").trim())
    .filter(Boolean);

  if (!paragraphs.length) throw new Error("The draft has no body text under the header lines.");

  return {
    title: meta.title,
    subtitle: meta.subtitle || "",
    date: meta.date || new Date().toISOString().slice(0, 10),
    image: meta.image || "",
    excerpt: meta.excerpt || summarise(paragraphs[0]),
    body: paragraphs.map((block) => `<p>${escapeHtml(block)}</p>`).join("\n"),
  };
}

// Card excerpt: the opening of the piece, cut at a word so it reads cleanly.
function summarise(paragraph, limit = 160) {
  if (paragraph.length <= limit) return paragraph;
  const cut = paragraph.slice(0, limit);
  return `${cut.slice(0, cut.lastIndexOf(" ")).trim()}...`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]);
}

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/* ==========================================================================
   The encrypted index of titles
   ========================================================================== */

async function readIndex(passphrase) {
  let raw;
  try {
    raw = JSON.parse(await readFile(INDEX_FILE, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return { articles: [] }; // first run
    throw error;
  }
  const data = await decrypt(passphrase, raw);
  if (!data) {
    console.error("That page passphrase doesn't open the existing index. Nothing was changed.");
    process.exit(1);
  }
  return data;
}

async function writeIndex(passphrase, data) {
  await mkdir(OUT_DIR, { recursive: true });
  await writeFile(INDEX_FILE, `${JSON.stringify(await encrypt(passphrase, data))}\n`);
}

/* ==========================================================================
   Commands
   ========================================================================== */

async function add(draftPath) {
  if (!draftPath) {
    const drafts = await readdir(DRAFTS_DIR).catch(() => []);
    console.error("Usage: node tools/encrypt.mjs add PrivateEssays/<draft>");
    if (drafts.length) console.error(`Drafts here now: ${drafts.join(", ")}`);
    process.exit(1);
  }

  const article = parseDraft(await readFile(path.resolve(ROOT, draftPath), "utf8"));
  const slug = slugify(article.title);

  console.log(`\n"${article.title}"${article.subtitle ? ` — ${article.subtitle}` : ""} · ${article.date}\n`);

  const pagePass = await askPassphrase("Page passphrase");
  const index = await readIndex(pagePass);

  const existing = index.articles.find((entry) => entry.slug === slug);
  if (existing) console.log(`\nThis replaces the published version of "${existing.title}".\n`);

  // The filename is random so the repo gives nothing away; the mapping from
  // title to file lives inside the encrypted index.
  const id = existing ? existing.id : Buffer.from(crypto.getRandomValues(new Uint8Array(8))).toString("hex");
  const articlePass = await askPassphrase(`Passphrase for this article${existing ? " (a new one replaces the old)" : ""}`, { confirm: true });

  if (articlePass === pagePass) {
    console.error("\nUse a different passphrase from the page one, or the second layer adds nothing.");
    process.exit(1);
  }

  await mkdir(OUT_DIR, { recursive: true });
  await writeFile(path.join(OUT_DIR, `${id}.json`), `${JSON.stringify(await encrypt(articlePass, article))}\n`);

  // The card needs the image and excerpt before the article itself is
  // unlocked, so they live in the encrypted index alongside the title.
  const entry = {
    id,
    slug,
    title: article.title,
    subtitle: article.subtitle,
    date: article.date,
    image: article.image,
    excerpt: article.excerpt,
  };
  if (existing) Object.assign(existing, entry);
  else index.articles.push(entry);
  index.articles.sort((a, b) => b.date.localeCompare(a.date));

  await writeIndex(pagePass, index);

  console.log(`\nEncrypted to hidden/${id}.json and listed in hidden/index.json.`);
  console.log("Save that article passphrase in your password manager now — it cannot be recovered.");
  console.log("Then commit the hidden/ folder.");
}

async function list() {
  const pagePass = await askPassphrase("Page passphrase");
  const index = await readIndex(pagePass);
  if (!index.articles.length) return console.log("\nNothing published yet.");
  console.log("");
  for (const entry of index.articles) {
    console.log(`  ${entry.id}  ${entry.date}  ${entry.title}${entry.subtitle ? ` — ${entry.subtitle}` : ""}`);
  }
}

async function remove(id) {
  if (!id) {
    console.error("Usage: node tools/encrypt.mjs remove <id>   (see: node tools/encrypt.mjs list)");
    process.exit(1);
  }
  const pagePass = await askPassphrase("Page passphrase");
  const index = await readIndex(pagePass);
  const entry = index.articles.find((item) => item.id === id);
  if (!entry) {
    console.error(`No article with id ${id}.`);
    process.exit(1);
  }
  index.articles = index.articles.filter((item) => item.id !== id);
  await writeIndex(pagePass, index);
  await unlink(path.join(OUT_DIR, `${id}.json`)).catch(() => {});
  console.log(`\nRemoved "${entry.title}". Commit the change to publish the removal.`);
}

const [command, argument] = process.argv.slice(2);
const commands = { add, list, remove };

if (!commands[command]) {
  console.error("Usage:\n  node tools/encrypt.mjs add PrivateEssays/<draft>\n  node tools/encrypt.mjs list\n  node tools/encrypt.mjs remove <id>");
  process.exit(1);
}

commands[command](argument).catch((error) => {
  console.error(`\n${error.message}`);
  process.exit(1);
});
