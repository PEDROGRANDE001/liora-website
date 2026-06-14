/* Liora & Co. site — renders the home grid and per-collection detail pages from data.js. */

(function () {
  const pad = (n) => String(n).padStart(2, "0");

  function productRows(products) {
    if (!products || !products.length) return "";
    const rows = products
      .map(
        (p) => `
        <tr>
          <td class="name">${p.name}</td>
          <td class="dim">${p.cm} cm<span class="dim-in">${p.in}</span></td>
          <td class="code">${p.code}</td>
        </tr>`
      )
      .join("");
    return `
      <table class="product-table">
        <thead><tr><th>Piece</th><th>Dimensions (W × D × H)</th><th>Code</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>`;
  }

  function specThumbs(images) {
    if (!images || !images.length) return "";
    const thumbs = images
      .map(
        (src, i) => `
        <figure class="spec-thumb" data-full="${src}">
          <img src="${src}" alt="Specification sheet" loading="lazy" />
          <figcaption class="spec-cap">Spec ${i + 1}</figcaption>
        </figure>`
      )
      .join("");
    return `<div class="spec-links">${thumbs}</div>`;
  }

  /* ---------- Home: collection card grid ---------- */
  function renderCollectionGrid() {
    const grid = document.getElementById("collectionGrid");
    if (!grid || typeof COLLECTIONS === "undefined") return;
    grid.innerHTML = COLLECTIONS.map(
      (c, i) => `
      <a class="cc-card" href="collection.html?c=${c.id}">
        <span class="cc-card-img">
          <img src="${c.hero}" alt="${c.name} collection" loading="lazy" />
        </span>
        <span class="cc-card-body">
          <span class="num">${pad(i + 1)}</span>
          <span class="cc-name">${c.name}</span>
          <span class="cc-tag">${c.tagline}</span>
        </span>
      </a>`
    ).join("");
  }

  /* ---------- Detail page for a single collection ---------- */
  function renderCollectionDetail() {
    const root = document.getElementById("collectionDetail");
    if (!root || typeof COLLECTIONS === "undefined") return;

    const id = new URLSearchParams(location.search).get("c");
    const idx = COLLECTIONS.findIndex((c) => c.id === id);
    const c = COLLECTIONS[idx];

    if (!c) {
      root.innerHTML = `
        <div class="detail-missing">
          <h2>Collection not found</h2>
          <p><a href="index.html#collections">← Back to all collections</a></p>
        </div>`;
      return;
    }

    document.title = `${c.name} — Liora & Co.`;
    const total = COLLECTIONS.length;
    const prev = COLLECTIONS[(idx - 1 + total) % total];
    const next = COLLECTIONS[(idx + 1) % total];
    const note = c.note ? `<p class="collection-note">${c.note}</p>` : "";

    root.innerHTML = `
      <header class="detail-hero">
        <img src="${c.hero}" alt="${c.name} collection" />
        <div class="detail-hero-overlay">
          <span class="eyebrow">Collection ${pad(idx + 1)} of ${pad(total)}</span>
          <h1>${c.name}</h1>
          <p class="tagline">${c.tagline}</p>
        </div>
      </header>

      <nav class="detail-crumb"><a href="index.html#collections">← All collections</a></nav>

      <div class="detail-body">
        <p class="desc">${c.description}</p>
        ${note}
        ${productRows(c.products)}
        ${specThumbs(c.specImages)}
      </div>

      <nav class="detail-pager">
        <a class="pager-prev" href="collection.html?c=${prev.id}"><span>← Previous</span><strong>${prev.name}</strong></a>
        <a class="pager-next" href="collection.html?c=${next.id}"><span>Next →</span><strong>${next.name}</strong></a>
      </nav>`;
  }

  function renderContract() {
    const el = document.getElementById("contractBlock");
    if (!el || typeof CONTRACT === "undefined") return;
    const groups = CONTRACT.groups
      .map(
        (g) => `
        <div class="contract-group">
          <h4>${g.name}</h4>
          <p>${g.items}</p>
        </div>`
      )
      .join("");
    el.innerHTML = `<p>${CONTRACT.description}</p>${groups}`;
  }

  function renderMaterials() {
    const el = document.getElementById("materialsBlock");
    if (!el || typeof MATERIALS === "undefined") return;
    const imgs = MATERIALS.images
      .map((src) => `<img src="${src}" data-full="${src}" alt="Material support" loading="lazy" />`)
      .join("");
    el.innerHTML = `<p>${MATERIALS.description}</p><div class="materials-grid">${imgs}</div>`;
  }

  /* ---------- Nav dropdown (both pages) ---------- */
  function renderNavDropdown() {
    const dd = document.getElementById("navCollections");
    if (!dd || typeof COLLECTIONS === "undefined") return;
    dd.innerHTML = COLLECTIONS.map(
      (c) => `<a href="collection.html?c=${c.id}">${c.name}</a>`
    ).join("");
  }

  function wireLightbox() {
    const lb = document.getElementById("lightbox");
    const lbImg = document.getElementById("lightboxImg");
    const close = document.getElementById("lightboxClose");
    if (!lb) return;
    document.body.addEventListener("click", (e) => {
      const target = e.target.closest("[data-full]");
      if (target) {
        lbImg.src = target.getAttribute("data-full");
        lb.classList.add("open");
        document.body.style.overflow = "hidden";
      }
    });
    const hide = () => {
      lb.classList.remove("open");
      lbImg.src = "";
      document.body.style.overflow = "";
    };
    close.addEventListener("click", hide);
    lb.addEventListener("click", (e) => { if (e.target === lb) hide(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && lb.classList.contains("open")) hide(); });
  }

  function wireNav() {
    const nav = document.getElementById("nav");
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    const collectionsNav = document.getElementById("collectionsNav");
    if (!nav) return;
    const isMobile = () => window.matchMedia("(max-width: 820px)").matches;

    const solid = nav.dataset.solid === "true";
    const onScroll = () => nav.classList.toggle("scrolled", solid || window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (toggle) toggle.addEventListener("click", () => links.classList.toggle("open"));

    if (collectionsNav) {
      const navTop = collectionsNav.querySelector(".nav-top");
      navTop.addEventListener("click", (e) => {
        if (isMobile()) { e.preventDefault(); collectionsNav.classList.toggle("open"); }
      });
    }

    if (links) {
      links.addEventListener("click", (e) => {
        const a = e.target.closest("a");
        if (!a) return;
        if (!a.classList.contains("nav-top")) {
          links.classList.remove("open");
          if (collectionsNav) collectionsNav.classList.remove("open");
        }
      });
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderNavDropdown();
    renderCollectionGrid();
    renderCollectionDetail();
    renderContract();
    renderMaterials();
    wireLightbox();
    wireNav();
  });
})();
