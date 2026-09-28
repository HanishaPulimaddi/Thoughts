/* ==========================================================================
   Hidden articles.

   Everything in hidden/ is encrypted with AES-GCM; the passphrase is the only
   way back. Nothing here checks a password — a wrong passphrase simply fails
   to decrypt, so the files give nothing away on their own.

   Two layers: the page passphrase opens hidden/index.json (the titles), and
   each article has its own passphrase. Write new articles with
   `node tools/encrypt.mjs add PrivateEssays/<draft>`.
   ========================================================================== */

// Wrapped so nothing here collides with main.js, which also runs on this page.
(() => {
  const PAGE_KEY = "hidden-pass"; // sessionStorage: survives a refresh, not a closed tab

  const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

  function formatDate(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    return dateFormat.format(new Date(y, m - 1, d));
  }

  const unb64 = (text) => Uint8Array.from(atob(text), (c) => c.charCodeAt(0));

  async function deriveKey(passphrase, salt, iterations) {
    const material = await crypto.subtle.importKey(
      "raw", new TextEncoder().encode(passphrase), "PBKDF2", false, ["deriveKey"],
    );
    return crypto.subtle.deriveKey(
      { name: "PBKDF2", salt, iterations, hash: "SHA-256" },
      material,
      { name: "AES-GCM", length: 256 },
      false,
      ["decrypt"],
    );
  }

  // null means the passphrase was wrong (or the file is damaged).
  async function decrypt(passphrase, payload) {
    try {
      const key = await deriveKey(passphrase, unb64(payload.salt), payload.iter);
      const plain = await crypto.subtle.decrypt(
        { name: "AES-GCM", iv: unb64(payload.iv) }, key, unb64(payload.ct),
      );
      return JSON.parse(new TextDecoder().decode(plain));
    } catch {
      return null;
    }
  }

  async function fetchEncrypted(file) {
    const response = await fetch(file, { cache: "no-store" });
    if (!response.ok) throw new Error(`missing ${file}`);
    return response.json();
  }

  const session = {
    get() {
      try { return sessionStorage.getItem(PAGE_KEY); } catch { return null; }
    },
    set(value) {
      try { sessionStorage.setItem(PAGE_KEY, value); } catch { /* storage unavailable */ }
    },
    clear() {
      try { sessionStorage.removeItem(PAGE_KEY); } catch { /* storage unavailable */ }
    },
  };

  function initHidden() {
    const views = {
      gate: document.getElementById("gate-view"),
      list: document.getElementById("list-view"),
      article: document.getElementById("article-view"),
    };
    if (!views.gate || !views.list || !views.article) return;

    const gateForm = document.getElementById("gate-form");
    const gatePass = document.getElementById("gate-pass");
    const gateStatus = document.getElementById("gate-status");
    const gateSubmit = document.getElementById("gate-submit");
    const listEl = document.getElementById("hidden-list");

    const articleForm = document.getElementById("article-form");
    const articlePass = document.getElementById("article-pass");
    const articleStatus = document.getElementById("article-status");
    const articleSubmit = document.getElementById("article-submit");
    const articleTitle = document.getElementById("article-title");
    const articleSubtitle = document.getElementById("article-subtitle");
    const articleDate = document.getElementById("article-date");
    const articleBody = document.getElementById("article-body");

    let openEntry = null; // the listed article being opened

    function show(name) {
      Object.entries(views).forEach(([key, view]) => { view.hidden = key !== name; });
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    // Decrypting is deliberately slow, so say so rather than looking frozen.
    async function whileWorking(button, status, run) {
      button.disabled = true;
      status.textContent = "Checking…";
      try {
        return await run();
      } finally {
        button.disabled = false;
      }
    }

    // Same card as the public essay grid, built from the decrypted index.
    function renderList(index) {
      listEl.innerHTML = index.articles.map((entry, position) => `
        <article class="card">
          <button class="card__link" type="button" data-position="${position}">
            ${entry.image
              ? `<img class="photo card__media" src="${escapeHtml(entry.image)}" width="1600" height="1200" alt="" loading="lazy" />`
              : `<div class="ph card__media" aria-hidden="true"><span class="ph__label">Image placeholder</span></div>`}
            <span class="card__category">Hidden</span>
            <h3 class="card__title">${escapeHtml(entry.title)}</h3>
            ${entry.subtitle ? `<p class="card__subtitle">${escapeHtml(entry.subtitle)}</p>` : ""}
            <time class="card__date" datetime="${escapeHtml(entry.date)}">${formatDate(entry.date)}</time>
            ${entry.excerpt ? `<p class="card__excerpt">${escapeHtml(entry.excerpt)}</p>` : ""}
          </button>
        </article>`).join("");

      if (!index.articles.length) {
        listEl.innerHTML = `<p class="hidden-empty">Nothing here yet.</p>`;
      }

      listEl.querySelectorAll("[data-position]").forEach((button) => {
        button.addEventListener("click", () => openArticle(index.articles[Number(button.dataset.position)]));
      });
    }

    async function unlockPage(passphrase, { remembered = false } = {}) {
      let payload;
      try {
        payload = await fetchEncrypted("hidden/index.json");
      } catch {
        gateStatus.textContent = "There are no hidden articles published yet.";
        return false;
      }

      const index = await decrypt(passphrase, payload);
      if (!index) {
        if (remembered) session.clear();
        gateStatus.textContent = "That code didn't work.";
        return false;
      }

      session.set(passphrase);
      gateStatus.textContent = "";
      gatePass.value = "";
      renderList(index);
      show("list");
      return true;
    }

    function openArticle(entry) {
      openEntry = entry;
      articleTitle.textContent = entry.title;
      articleSubtitle.textContent = entry.subtitle || "";
      articleSubtitle.hidden = !entry.subtitle;
      articleDate.dateTime = entry.date;
      articleDate.textContent = formatDate(entry.date);
      articleBody.hidden = true;
      articleBody.innerHTML = "";
      articleForm.hidden = false;
      articleStatus.textContent = "";
      articlePass.value = "";
      show("article");
      articlePass.focus();
    }

    gateForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const passphrase = gatePass.value;
      if (!passphrase) return;
      whileWorking(gateSubmit, gateStatus, () => unlockPage(passphrase));
    });

    articleForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const passphrase = articlePass.value;
      if (!passphrase || !openEntry) return;

      whileWorking(articleSubmit, articleStatus, async () => {
        let payload;
        try {
          payload = await fetchEncrypted(`hidden/${openEntry.id}.json`);
        } catch {
          articleStatus.textContent = "That article is missing from the site.";
          return;
        }

        const article = await decrypt(passphrase, payload);
        if (!article) {
          articleStatus.textContent = "That code didn't work.";
          return;
        }

        articlePass.value = "";
        articleStatus.textContent = "";
        articleForm.hidden = true;
        articleBody.innerHTML = article.body;
        articleBody.hidden = false;
      });
    });

    document.getElementById("article-back").addEventListener("click", () => show("list"));
    document.getElementById("article-back-foot").addEventListener("click", () => show("list"));

    document.getElementById("lock-again").addEventListener("click", () => {
      session.clear();
      listEl.innerHTML = "";
      openEntry = null;
      show("gate");
      gatePass.focus();
    });

    // Coming back from an article within the same tab shouldn't ask again.
    const remembered = session.get();
    if (remembered) unlockPage(remembered, { remembered: true });
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[c]);
  }

  initHidden();
})();
