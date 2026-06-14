/* Liora & Co. site — renders the home grid and per-collection detail pages from data.js. */

(function () {
  const pad = (n) => String(n).padStart(2, "0");

  /* Product-type taxonomy — derived from piece names across all collections. */
  const PRODUCT_TYPES = [
    { id: "sofas", label: "Sofas & Seating", match: (n) => /seater sofa|corner seater/i.test(n) },
    { id: "ottomans", label: "Ottomans", match: (n) => /ottoman/i.test(n) },
    { id: "coffee-tables", label: "Coffee Tables", match: (n) => /coffee table/i.test(n) },
    { id: "side-tables", label: "Side Tables", match: (n) => /side table/i.test(n) || /^hex table$/i.test(n) || /^square table$/i.test(n) },
    { id: "dining-chairs", label: "Dining Chairs", match: (n) => /dining (arm )?chair|arm dining chair/i.test(n) },
    { id: "dining-tables", label: "Dining Tables", match: (n) => /dining table/i.test(n) },
    { id: "loungers", label: "Sun Loungers & Beds", match: (n) => /lounger/i.test(n) },
    { id: "stools", label: "Bar & Counter Stools", match: (n) => /stool/i.test(n) },
    { id: "bar-tables", label: "Bar & Counter Tables", match: (n) => /counter table/i.test(n) }
  ];

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

  function productGallery(c) {
    const items = c.products || [];
    if (!items.length) return "";
    const cards = items
      .map(
        (p) => `
        <a class="pg-card" href="model.html?c=${c.id}&code=${p.code}">
          <span class="pg-img"><img src="img/products/${p.code}.jpg" alt="${p.name}" loading="lazy" /></span>
          <span class="pg-body">
            <span class="pg-name">${p.name}</span>
            <span class="pg-code">${p.code}</span>
          </span>
        </a>`
      )
      .join("");
    return `
      <div class="product-gallery-head"><h2>The pieces</h2><p>Select any piece for full dimensions and specification.</p></div>
      <div class="product-gallery">${cards}</div>`;
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
      </div>

      <section class="gallery-section">${productGallery(c)}</section>

      ${c.specImages && c.specImages.length ? `<div class="detail-body"><h3 class="spec-heading">Specification sheets</h3>${specThumbs(c.specImages)}</div>` : ""}

      <nav class="detail-pager">
        <a class="pager-prev" href="collection.html?c=${prev.id}"><span>← Previous</span><strong>${prev.name}</strong></a>
        <a class="pager-next" href="collection.html?c=${next.id}"><span>Next →</span><strong>${next.name}</strong></a>
      </nav>`;
  }

  /* ---------- Single-model detail page ---------- */
  function renderModelDetail() {
    const root = document.getElementById("modelDetail");
    if (!root || typeof COLLECTIONS === "undefined") return;

    const params = new URLSearchParams(location.search);
    const cid = params.get("c");
    const code = params.get("code");
    const c = COLLECTIONS.find((x) => x.id === cid);
    const items = c ? c.products || [] : [];
    const idx = items.findIndex((p) => p.code === code);
    const p = items[idx];

    if (!c || !p) {
      root.innerHTML = `
        <div class="detail-missing">
          <h2>Piece not found</h2>
          <p><a href="index.html#collections">← Back to all collections</a></p>
        </div>`;
      return;
    }

    document.title = `${p.name} — ${c.name} — Liora & Co.`;
    const prev = items[(idx - 1 + items.length) % items.length];
    const next = items[(idx + 1) % items.length];

    root.innerHTML = `
      <nav class="detail-crumb">
        <a href="index.html#collections">All collections</a>
        <span class="crumb-sep">/</span>
        <a href="collection.html?c=${c.id}">${c.name}</a>
      </nav>

      <div class="model-detail">
        <div class="model-media">
          <img src="img/products/${p.code}.jpg" data-full="img/products/${p.code}.jpg" alt="${p.name}" />
        </div>
        <div class="model-info">
          <span class="eyebrow">${c.name} Collection</span>
          <h1>${p.name}</h1>
          <dl class="model-spec">
            <div><dt>Dimensions (W × D × H)</dt><dd>${p.cm} cm<span class="dim-in">${p.in}</span></dd></div>
            <div><dt>Model code</dt><dd class="model-code">${p.code}</dd></div>
          </dl>
          <p class="model-note">Finely sanded teak / French aluminium. Specifications subject to change as part of continuous product development.</p>
          <a class="btn btn-line" href="index.html#contact">Inquire about this piece</a>
        </div>
      </div>

      ${items.length > 1 ? `
      <nav class="detail-pager model-pager">
        <a class="pager-prev" href="model.html?c=${c.id}&code=${prev.code}"><span>← Previous</span><strong>${prev.name}</strong></a>
        <a class="pager-next" href="model.html?c=${c.id}&code=${next.code}"><span>Next →</span><strong>${next.name}</strong></a>
      </nav>` : ""}`;
  }

  /* ---------- Type detail page (all pieces of one type, across collections) ---------- */
  function renderTypeDetail() {
    const root = document.getElementById("typeDetail");
    if (!root || typeof COLLECTIONS === "undefined") return;

    const id = new URLSearchParams(location.search).get("t");
    const type = PRODUCT_TYPES.find((t) => t.id === id);

    if (!type) {
      root.innerHTML = `
        <div class="detail-missing">
          <h2>Product type not found</h2>
          <p><a href="index.html#collections">← Back to collections</a></p>
        </div>`;
      return;
    }

    document.title = `${type.label} — Liora & Co.`;
    let count = 0;
    const blocks = COLLECTIONS.map((c) => {
      const items = (c.products || []).filter((p) => type.match(p.name));
      if (!items.length) return "";
      count += items.length;
      const cards = items
        .map(
          (p) => `
          <a class="pg-card" href="model.html?c=${c.id}&code=${p.code}">
            <span class="pg-img"><img src="img/products/${p.code}.jpg" alt="${p.name}" loading="lazy" /></span>
            <span class="pg-body"><span class="pg-name">${p.name}</span></span>
          </a>`
        )
        .join("");
      return `
        <section class="type-group">
          <h2 class="type-group-head"><a href="collection.html?c=${c.id}">${c.name}</a></h2>
          <div class="product-gallery">${cards}</div>
        </section>`;
    }).join("");

    root.innerHTML = `
      <header class="type-head">
        <span class="eyebrow">By Product Type</span>
        <h1>${type.label}</h1>
        <p class="type-count">${count} ${count === 1 ? "piece" : "pieces"} across the collections</p>
      </header>
      <nav class="detail-crumb"><a href="index.html#collections">← All collections</a></nav>
      <div class="type-body">
        ${blocks || '<p class="type-empty">No catalogued pieces in this category yet.</p>'}
      </div>`;
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

  /* ---------- Nav dropdowns (all pages) ---------- */
  function renderNavDropdown() {
    const dd = document.getElementById("navCollections");
    if (dd && typeof COLLECTIONS !== "undefined") {
      dd.innerHTML = COLLECTIONS.map(
        (c) => `<a href="collection.html?c=${c.id}">${c.name}</a>`
      ).join("");
    }
    const td = document.getElementById("navTypes");
    if (td) {
      td.innerHTML = PRODUCT_TYPES.map(
        (t) => `<a href="type.html?t=${t.id}">${t.label}</a>`
      ).join("");
    }
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
    if (!nav) return;
    const isMobile = () => window.matchMedia("(max-width: 820px)").matches;

    const solid = nav.dataset.solid === "true";
    const onScroll = () => nav.classList.toggle("scrolled", solid || window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (toggle) toggle.addEventListener("click", () => links.classList.toggle("open"));

    const dropdowns = Array.from(document.querySelectorAll(".has-dropdown"));
    dropdowns.forEach((dd) => {
      const top = dd.querySelector(".nav-top");
      if (!top) return;
      const noJump = top.getAttribute("href") === "#";
      top.addEventListener("click", (e) => {
        if (isMobile() || noJump) {
          e.preventDefault();
          dropdowns.forEach((other) => { if (other !== dd) other.classList.remove("open"); });
          dd.classList.toggle("open");
        }
      });
    });

    if (links) {
      links.addEventListener("click", (e) => {
        const a = e.target.closest("a");
        if (!a) return;
        if (!a.classList.contains("nav-top")) {
          links.classList.remove("open");
          dropdowns.forEach((dd) => dd.classList.remove("open"));
        }
      });
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderNavDropdown();
    renderCollectionGrid();
    renderCollectionDetail();
    renderModelDetail();
    renderTypeDetail();
    renderContract();
    renderMaterials();
    wireLightbox();
    wireNav();
  });
})();
