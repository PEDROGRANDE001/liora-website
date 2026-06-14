/* Liora & Co. catalog data — extracted from Brochure 7 (Final 2025-2026).
   Edit freely: each collection has a hero image, description, spec-sheet
   page images, and a products list. Dimensions are W x D x H. */

const COLLECTIONS = [
  {
    id: "terra",
    name: "Terra",
    tagline: "Modular teak sectional system",
    hero: "img/heroes/terra.jpg",
    description:
      "A fully modular teak sectional with lavastone-topped coffee tables. Corner, centre, extension and ottoman modules combine freely to wrap any terrace, from an intimate L to an expansive lounge.",
    specImages: ["img/specs/terra-1.jpg"],
    note: "Spec sheet shown as-is from the brochure. Per-module dimensions and model codes on this page need correcting before publish (all modules currently read the same value).",
    products: []
  },
  {
    id: "oslo",
    name: "Oslo",
    tagline: "Plush anthracite on sanded teak",
    hero: "img/heroes/oslo.jpg",
    description:
      "Lounge chairs with plush anthracite cushions and finely sanded teak frames. Offered in two distinct frame designs — bold and lightweight — to suit different aesthetics.",
    specImages: ["img/specs/oslo-1.jpg", "img/specs/oslo-2.jpg", "img/specs/oslo-3.jpg"],
    products: [
      { name: "1 Seater Sofa", cm: "116 x 89 x 80", in: "45.7\" x 35\" x 31.5\"", code: "SFA515" },
      { name: "1 Seater Sofa Lite", cm: "100 x 85 x 80", in: "39.4\" x 33.5\" x 31.5\"", code: "SFB515" },
      { name: "3 Seater Sofa", cm: "256 x 89 x 80", in: "100.8\" x 35\" x 31.5\"", code: "SFC515" },
      { name: "3 Seater Sofa Lite", cm: "240 x 85 x 80", in: "94.5\" x 33.5\" x 31.5\"", code: "SFD515" },
      { name: "Coffee Table", cm: "143 x 80 x 30", in: "56.3\" x 31.5\" x 11.8\"", code: "CTA515" },
      { name: "Dining Chair", cm: "50 x 56 x 80", in: "19.7\" x 22\" x 31.5\"", code: "DCA515" },
      { name: "Arm Dining Chair", cm: "68 x 56 x 80", in: "26.8\" x 22\" x 31.5\"", code: "DCB515" },
      { name: "Dining Table", cm: "240 x 110 x 76", in: "94.5\" x 43.3\" x 29.9\"", code: "DTA515" },
      { name: "Square Dining Table", cm: "150 x 150 x 76", in: "59.1\" x 59.1\" x 29.9\"", code: "DTB515" },
      { name: "Single Sun Lounger", cm: "70 x 200 x 28", in: "27.6\" x 78.7\" x 11\"", code: "SLA515" },
      { name: "Double Sun Lounger", cm: "140 x 200 x 28", in: "55.1\" x 78.7\" x 11\"", code: "SLB515" },
      { name: "Hex Table", cm: "50 x 50 x 50", in: "19.7\" x 19.7\" x 19.7\"", code: "STA515" },
      { name: "Square Table", cm: "49 x 49 x 45", in: "19.3\" x 19.3\" x 17.7\"", code: "STB515" }
    ]
  },
  {
    id: "carter",
    name: "Carter",
    tagline: "Distinctive curved frame",
    hero: "img/heroes/carter.jpg",
    description:
      "Modern style with a distinctive curved wooden frame, an ideal addition to any outdoor space.",
    specImages: ["img/specs/carter-1.jpg"],
    note: "Placeholder hero — the brochure has no lifestyle photo for Carter (the intro page reuses a generic studio chair). Swap in a real Carter scene before publish.",
    products: [
      { name: "1 Seater Sofa", cm: "104 x 94 x 77", in: "40.9\" x 37\" x 30.3\"", code: "SFA516" },
      { name: "3 Seater Sofa", cm: "244 x 94 x 77", in: "96.1\" x 37\" x 30.3\"", code: "SFB516" },
      { name: "Coffee Table", cm: "180 x 80 x 30", in: "70.9\" x 31.5\" x 11.8\"", code: "CTA516" },
      { name: "Side Table", cm: "60 x 60 x 41", in: "23.6\" x 23.6\" x 16.1\"", code: "STA516" }
    ]
  },
  {
    id: "koa",
    name: "Koa",
    tagline: "Tropical, modular, boho teak",
    hero: "img/heroes/koa.jpg",
    description:
      "A tropical retreat with rounded forms, bohemian charm and rich natural teak. Modular by design — 1-seater, corner and 2-seater pieces arrange freely, with earthy-toned cushions for a cozy, inviting feel.",
    specImages: ["img/specs/koa-1.jpg", "img/specs/koa-2.jpg"],
    products: [
      { name: "Corner Seater Sofa", cm: "100 x 100 x 80", in: "39.4\" x 39.4\" x 31.5\"", code: "SFA518" },
      { name: "1 Seater Sofa", cm: "100 x 100 x 80", in: "39.4\" x 39.4\" x 31.5\"", code: "SFB518" },
      { name: "2 Seater Sofa", cm: "200 x 100 x 80", in: "78.7\" x 39.4\" x 31.5\"", code: "SFC518" },
      { name: "Square Coffee Table", cm: "100 x 100 x 23", in: "39.4\" x 39.4\" x 9.1\"", code: "CTA518" },
      { name: "Coffee Table", cm: "200 x 100 x 23", in: "78.7\" x 39.4\" x 9.1\"", code: "CTB518" },
      { name: "Single Sun Lounger", cm: "80 x 195 x 35", in: "31.5\" x 76.8\" x 13.8\"", code: "SLA518" },
      { name: "Double Sun Lounger", cm: "160 x 195 x 35", in: "62.8\" x 76.8\" x 13.8\"", code: "SLB518" },
      { name: "Side Table", cm: "66 x 80 x 23", in: "26\" x 31.5\" x 9.1\"", code: "STA518" }
    ]
  },
  {
    id: "lotus",
    name: "Lotus",
    tagline: "Teak braided with woven rope",
    hero: "img/heroes/lotus.jpg",
    description:
      "A complete set of sofas with finely sanded teak frames braided with woven ropes. Slatted table tops and intricate rope detailing create a rich, braided texture and contemporary depth.",
    specImages: ["img/specs/lotus-1.jpg", "img/specs/lotus-2.jpg", "img/specs/lotus-3.jpg"],
    products: [
      { name: "1 Seater Sofa", cm: "80 x 83 x 76", in: "31.5\" x 32.7\" x 29.9\"", code: "SFA519" },
      { name: "1 Seater Sofa with Full Weave", cm: "80 x 83 x 76", in: "31.5\" x 32.7\" x 29.9\"", code: "SFB519" },
      { name: "2 Seater Sofa", cm: "151 x 83 x 76", in: "59.4\" x 32.7\" x 29.9\"", code: "SFC519" },
      { name: "2 Seater Sofa with Full Weave", cm: "151 x 83 x 76", in: "59.4\" x 32.7\" x 29.9\"", code: "SFD519" },
      { name: "3 Seater Sofa", cm: "210 x 83 x 76", in: "82.7\" x 32.7\" x 29.9\"", code: "SFE519" },
      { name: "3 Seater Sofa with Full Weave", cm: "210 x 83 x 76", in: "82.7\" x 32.7\" x 29.9\"", code: "SFF519" },
      { name: "Round Coffee Table", cm: "60 x 60 x 45", in: "23.6\" x 23.6\" x 17.7\"", code: "CTA519" },
      { name: "Round Coffee Table", cm: "60 x 60 x 32", in: "23.6\" x 23.6\" x 12.6\"", code: "CTB519" },
      { name: "Round Coffee Table", cm: "90 x 90 x 32", in: "35.4\" x 35.4\" x 12.6\"", code: "CTC519" },
      { name: "Rectangle Coffee Table", cm: "140 x 80 x 36", in: "55.1\" x 31.5\" x 14.2\"", code: "CTD519" },
      { name: "Side Table", cm: "50 x 50 x 41", in: "19.7\" x 19.7\" x 16.1\"", code: "STA519" },
      { name: "Dining Chair", cm: "59 x 59.5 x 82", in: "23.2\" x 23.4\" x 32.3\"", code: "DCA519" },
      { name: "Dining Table", cm: "125 x 125 x 76", in: "49.2\" x 49.2\" x 29.9\"", code: "DTA519" }
    ]
  },
  {
    id: "mara",
    name: "Mara",
    tagline: "Curved backs in solid teak",
    hero: "img/heroes/mara.jpg",
    description:
      "Refined modern elegance with natural flowing forms and gracefully curved backs. Each piece is handcrafted from premium solid teak and upholstered in natural-colored outdoor fabric.",
    specImages: ["img/specs/mara-1.jpg", "img/specs/mara-2.jpg", "img/specs/mara-3.jpg"],
    products: [
      { name: "1 Seater Sofa", cm: "90 x 85 x 75", in: "35.4\" x 33.5\" x 29.5\"", code: "SFA520" },
      { name: "2 Seater Sofa", cm: "178 x 87 x 75", in: "70.1\" x 34.3\" x 29.5\"", code: "SFB520" },
      { name: "3 Seater Sofa", cm: "240 x 87 x 75", in: "94.5\" x 34.3\" x 29.5\"", code: "SFC520" },
      { name: "Ottoman", cm: "87 x 89 x 40", in: "34.3\" x 35\" x 15.7\"", code: "SFD520" },
      { name: "Coffee Table", cm: "178 x 80 x 30", in: "70.1\" x 31.5\" x 11.8\"", code: "CTA520" },
      { name: "Dining Chair", cm: "62 x 60 x 78", in: "24.4\" x 23.6\" x 30.7\"", code: "DCA520" },
      { name: "Dining Table", cm: "220 x 100 x 76", in: "86.6\" x 39.4\" x 29.9\"", code: "DTA520" },
      { name: "Sun Lounger", cm: "203 x 83 x 32", in: "79.9\" x 32.7\" x 12.6\"", code: "SLA520" },
      { name: "Bed Lounger", cm: "178 x 90 x 75", in: "70.2\" x 35.4\" x 29.5\"", code: "SLB520" },
      { name: "Side Table", cm: "50 x 50 x 40", in: "19.7\" x 19.7\" x 15.7\"", code: "STA520" }
    ]
  },
  {
    id: "panama",
    name: "Panama",
    tagline: "Clean lines, minimalist teak",
    hero: "img/heroes/panama.jpg",
    description:
      "Clean lines and a minimalist silhouette in sanded teak, paired with natural-colored upholstery for a sleek, modern look.",
    specImages: ["img/specs/panama-1.jpg"],
    products: [
      { name: "1 Seater Sofa", cm: "88 x 86 x 78", in: "34.6\" x 33.9\" x 30.7\"", code: "SFA521" },
      { name: "3 Seater Sofa", cm: "247 x 86 x 78", in: "97.2\" x 33.9\" x 30.7\"", code: "SFB521" },
      { name: "Coffee Table", cm: "185 x 80 x 30", in: "72.8\" x 31.5\" x 11.8\"", code: "CTA521" },
      { name: "Side Table", cm: "50 x 50 x 44", in: "19.7\" x 19.7\" x 17.3\"", code: "STA521" }
    ]
  },
  {
    id: "seville",
    name: "Seville",
    tagline: "Classic dining, modern twist",
    hero: "img/heroes/seville.jpg",
    description:
      "Refined classic design with a modern twist — sturdy craftsmanship and sleek lines for an effortlessly elegant, timeless dining setting.",
    specImages: ["img/specs/seville-1.jpg"],
    products: [
      { name: "Dining Chair", cm: "53 x 57.5 x 77", in: "20.9\" x 22.6\" x 30.3\"", code: "DCA522" },
      { name: "Dining Table", cm: "122 x 122 x 75", in: "48\" x 48\" x 29.5\"", code: "DTA522" }
    ]
  },
  {
    id: "suri",
    name: "Suri",
    tagline: "Tropical minimalism, Viro weave",
    hero: "img/heroes/suri.jpg",
    description:
      "Tropical and ethnic elements with a minimalist design — natural teak, earthy-toned cushions, and a sand-colored Viro weave on the seating supports.",
    specImages: ["img/specs/suri-1.jpg", "img/specs/suri-2.jpg", "img/specs/suri-3.jpg"],
    note: "Placeholder hero — the brochure has no lifestyle photo for Suri. Swap in a real Suri scene before publish.",
    products: [
      { name: "1 Seater Sofa", cm: "81 x 81 x 70", in: "31.9\" x 31.9\" x 27.6\"", code: "SFA523" },
      { name: "2 Seater Sofa", cm: "162 x 81 x 70", in: "63.8\" x 31.9\" x 27.6\"", code: "SFB523" },
      { name: "3 Seater Sofa", cm: "210 x 81 x 70", in: "82.7\" x 31.9\" x 27.6\"", code: "SFC523" },
      { name: "Coffee Table", cm: "170 x 80 x 28", in: "66.9\" x 31.5\" x 11\"", code: "CTA523" },
      { name: "Dining Chair", cm: "48 x 56 x 84", in: "18.9\" x 22\" x 33.1\"", code: "DCA523" },
      { name: "Dining Arm Chair", cm: "58 x 56 x 84", in: "22.8\" x 22\" x 33.1\"", code: "DCB523" },
      { name: "Dining Table", cm: "200 x 100 x 75", in: "78.7\" x 39.4\" x 29.5\"", code: "DTA523" },
      { name: "Square Dining Table", cm: "100 x 100 x 75", in: "39.4\" x 39.4\" x 29.5\"", code: "DTB523" },
      { name: "Sun Lounger", cm: "205 x 81 x 45", in: "80.7\" x 31.9\" x 17.7\"", code: "SLA523" },
      { name: "Bed Lounger", cm: "185 x 81 x 70", in: "72.8\" x 31.9\" x 27.6\"", code: "SLB523" },
      { name: "Bar & Counter Stool", cm: "50 x 52 x 115", in: "19.7\" x 20.5\" x 39.4\"", code: "CSA523" },
      { name: "Bar & Counter Table", cm: "100 x 100 x 90", in: "39.4\" x 39.4\" x 35.4\"", code: "HTA523" },
      { name: "Side Table", cm: "50 x 50 x 42", in: "19.7\" x 19.7\" x 16.5\"", code: "STA523" }
    ]
  },
  {
    id: "perpetual",
    name: "Perpetual",
    tagline: "Teak with plush off-white",
    hero: "img/heroes/perpetual.jpg",
    description:
      "Modern design crafted from high-quality teak and durable, water-resistant outdoor fabric, finished with plush off-white cushions.",
    specImages: ["img/specs/perpetual-1.jpg", "img/specs/perpetual-2.jpg"],
    products: [
      { name: "1 Seater Sofa", cm: "80 x 80 x 60", in: "31.5\" x 31.5\" x 23.6\"", code: "SFA524" },
      { name: "3 Seater Sofa", cm: "210 x 80 x 60", in: "82.7\" x 31.5\" x 23.6\"", code: "SFB524" },
      { name: "Coffee Table", cm: "142 x 80 x 30", in: "55.9\" x 31.5\" x 11.8\"", code: "CTA524" },
      { name: "Single Sun Lounger", cm: "208 x 80 x 30", in: "81.9\" x 31.5\" x 11.8\"", code: "SLA524" },
      { name: "Double Bed Lounger", cm: "208 x 146 x 30", in: "81.9\" x 57.5\" x 11.8\"", code: "SLB524" },
      { name: "Side Table", cm: "55 x 50 x 40", in: "21.7\" x 19.7\" x 15.7\"", code: "STA524" }
    ]
  },
  {
    id: "cayman",
    name: "Cayman",
    tagline: "Scandinavian teak dining",
    hero: "img/heroes/cayman.jpg",
    description:
      "Modern Scandinavian simplicity meets timeless teak craftsmanship — clean lines, curved backrests and seamless joints, built for durability across coastal and contemporary spaces.",
    specImages: ["img/specs/cayman-1.jpg"],
    products: [
      { name: "Dining Chair", cm: "52 x 52.5 x 78", in: "20.5\" x 20.7\" x 30.7\"", code: "DCA525" },
      { name: "Dining Table", cm: "240 x 120 x 76", in: "94.5\" x 47.2\" x 29.9\"", code: "DTA525" },
      { name: "Counter Stool", cm: "52 x 50 x 93", in: "20.5\" x 19.7\" x 36.6\"", code: "CSA525" },
      { name: "Backless Counter Stool", cm: "47 x 38 x 65", in: "18.5\" x 15\" x 25.6\"", code: "CSB525" }
    ]
  },
  {
    id: "iris",
    name: "Iris",
    tagline: "Sleek teak with stone tops",
    hero: "img/heroes/iris.jpg",
    description:
      "Modern design, comfort and durability with a wooden frame, outdoor cushions and sleek shapes — finished with a choice of teak or travertine table tops.",
    specImages: ["img/specs/iris-1.jpg"],
    products: [
      { name: "1 Seater Sofa", cm: "110 x 93.5 x 80", in: "43.3\" x 36.8\" x 31.5\"", code: "SFA517" },
      { name: "3 Seater Sofa", cm: "250 x 93.5 x 80", in: "98.4\" x 36.8\" x 31.5\"", code: "SFB517" },
      { name: "Coffee Table with Teak Top", cm: "117 x 94 x 37.5", in: "69.7\" x 37\" x 14.8\"", code: "CTA517" },
      { name: "Coffee Table with Travertine Top", cm: "117 x 94 x 37.5", in: "69.7\" x 37\" x 14.8\"", code: "CTB517" }
    ]
  }
];

/* Contract / hospitality lines and material support — image-led for now. */
const CONTRACT = {
  description:
    "A hospitality-grade contract program of French-made powder-coated aluminium sun loungers and canopy beds, foldable Xacú-wood dining chairs, bar and counter stools, lounge chairs, side stools, teak high chairs and professional-grade parasols. Available in a full range of frame, mattress and fabric colors.",
  groups: [
    { name: "Sun Loungers & Canopy Beds", items: "Praslin · Antigua · Samoa · Marbella · Ibiza · Bali Canopy · Capri · Sola · Luna Coast · Breeze · Aeris · Haven" },
    { name: "Dining Chairs", items: "Director Chair (Xacú wood) and a wide range of sling finishes" },
    { name: "Bar & Counter Stools", items: "Bouvet · Lena · Maldives · Marina · Merlin · Moes · Mur · Orvi · Reclaimed · Roga · Stone · Squarez · Travares · Zenna" },
    { name: "Lounge Chairs", items: "Bel Air · Bonna · Calaveras · Esma · Lady · Latte · London · Lumos · Mayra · Cove · Maris · Harbor · Sable Arch · Vista" },
    { name: "High Chairs & Parasols", items: "Alto High Chair (solid teak) · Bora Bora 3×3 Parasol (Made in France, 10-yr UV warranty)" }
  ]
};

const MATERIALS = {
  description:
    "Every piece is built for the outdoors. Teak finishes range from finely sanded to Golden Care® Teak Shield, weathered and black teak. Fabrics span acrylic, olefin and polyester; cushions use quick-dry and high-density foam.",
  images: ["img/specs/materials-1.jpg", "img/specs/materials-2.jpg"]
};
