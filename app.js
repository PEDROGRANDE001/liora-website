/* Liora & Co. site — renders collections from data.js and wires interactions. */

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

  function renderCollections() {
    const list = document.getElementById("collectionList");
    const index = document.getElementById("collectionIndex");
    if (!list || typeof COLLECTIONS === "undefined") return;

    index.innerHTML = COLLECTIONS.map(
      (c) => `<button class="chip" data-target="${c.id}">${c.name}</button>`
    ).join("");

    list.innerHTML = COLLECTIONS.map((c, i) => {
      const note = c.note ? `<p class="collection-note">${c.note}</p>` : "";
      return `
      <article class="collection" id="${c.id}">
        <div class="collection-hero">
          <div class="collection-figure">
            <img src="${c.hero}" alt="${c.name} collection" loading="lazy" />
          </div>
          <div class="collection-copy">
            <span class="num">${pad(i + 1)} — Collection</span>
            <h3>${c.name}</h3>
            <p class="tagline">${c.tagline}</p>
            <p class="desc">${c.description}</p>
            ${note}
            ${productRows(c.products)}
            ${specThumbs(c.specImages)}
          </div>
        </div>
      </article>`;
    }).join("");
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

  function wireLightbox() {
    const lb = document.getElementById("lightbox");
    const lbImg = document.getElementById("lightboxImg");
    const close = document.getElementById("lightboxClose");
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
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    toggle.addEventListener("click", () => links.classList.toggle("open"));
    links.addEventListener("click", (e) => { if (e.target.tagName === "A") links.classList.remove("open"); });
  }

  function wireChips() {
    document.getElementById("collectionIndex").addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      const el = document.getElementById(chip.dataset.target);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderCollections();
    renderContract();
    renderMaterials();
    wireChips();
    wireLightbox();
    wireNav();
  });
})();
