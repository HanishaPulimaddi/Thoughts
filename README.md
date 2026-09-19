# Learning in public

Hanisha Pulimaddi's essays site. Plain static HTML/CSS/JS with no build step.

- `index.html` is the page: nav, hero, featured block, essay grid, about + contact, footer, and the article view
- `styles.css` has the design tokens (light and dark) and all styles
- `main.js` holds the `essays` array, renders the cards, routes articles by URL hash (`/#slug`), and runs the theme toggle and contact form
- `Images/` holds the hero photo, profile picture and essay illustrations
- `essays/` holds the original PDF drafts (not linked from the page)

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

## Deploy

Netlify or Vercel: import the repo with **no build command**, and set the publish/output directory to the project root.
