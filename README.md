# Learning in public

Hanisha Pulimaddi's essays site. Plain static HTML/CSS/JS with no build step.

- `index.html` is the page: nav, hero, featured block, essay grid, about + contact, footer, and the article view
- `styles.css` has the design tokens (light and dark) and all styles
- `main.js` holds the `essays` array, renders the cards, routes articles by URL hash (`/#slug`), and runs the theme toggle and contact form
- `Images/` holds the hero photo, profile picture and essay illustrations
- `essays/` holds the original PDF drafts (not linked from the page)
- `hidden.html`, `hidden.js` and `hidden/` are the passphrase-protected articles; `tools/encrypt.mjs` publishes them
- `PrivateEssays/` holds the unencrypted drafts of those articles and is git-ignored — keep it that way

`style.css`, `theme.js`, `thoughts.js` and `thoughts-data.js` belong to the previous version of the page and aren't loaded by `index.html`.

## Adding an essay

Add an object to the `essays` array in `main.js`:

```js
{
  title: "…",
  subtitle: "…",                // optional, shown smaller under the title
  category: "Technology",
  date: "2026-09-11",           // ISO; shown as "11 September 2026"
  excerpt: "…",
  slug: "my-new-essay",         // URL becomes /#my-new-essay
  image: "Images/my-image.png", // optional, 4:3
  note: "…",                    // optional author's note
  body: `<p>…</p><p>…</p>`,
  refs: ["…"],                  // optional references
  minutes: 12,                  // optional; overrides the word-count read time
}
```

The card, the article page and the "Read the latest essay" button update automatically.

## Hidden articles

`hidden.html` (linked in small type in the footer) holds writing that isn't public. Two passphrase
layers: one opens the list of titles, and each article has its own. Everything committed under
`hidden/` is AES-256-GCM ciphertext, keyed by PBKDF2-SHA256 at 600,000 iterations, so the repo
reveals nothing but file sizes and dates. There is no password check to bypass — the wrong
passphrase simply fails to decrypt. **A lost passphrase means a lost article.** Keep them in a
password manager.

Write the draft in `PrivateEssays/` (git-ignored, so the plain text never reaches GitHub):

```
title: My title
subtitle: Optional
date: 2026-09-22

Blank lines separate paragraphs.
```

Then publish it, entering the page passphrase and a fresh one for the article:

```sh
node tools/encrypt.mjs add PrivateEssays/my-draft.md   # add or replace an article
node tools/encrypt.mjs list                            # titles and ids
node tools/encrypt.mjs remove <id>                     # unpublish one
```

Commit the changed files under `hidden/`. Re-running `add` with the same title replaces that
article and can change its passphrase — which is also how you revoke access you've given out.

## Deploy

Netlify or Vercel: import the repo with **no build command**, and set the publish/output directory to the project root.
