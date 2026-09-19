// ART LAB — shared data used by index.html, every artists/*.html page, and
// techniques/index.html. Keep artist/technique content changes here so every
// page that reads it stays in sync.

const ARTISTS = [
  { slug: "alberto-giacometti", name: "Alberto Giacometti", movement: "Surrealism / Existential Modernism", core: "Armature, Negative Space & Elongated Proportion" },
  { slug: "alexander-calder", name: "Alexander Calder", movement: "Kinetic Art", core: "Balance, Dynamic Equilibrium & Wire Linework" },
  { slug: "andy-goldsworthy", name: "Andy Goldsworthy", movement: "Land Art / Ephemeral", core: "Natural Materials, Color Wash & Site-Specific Flow" },
  { slug: "andy-warhol", name: "Andy Warhol", movement: "Pop Art", core: "Screenprint Contrast, High Value Tints & Commercial Branding" },
  { slug: "auguste-rodin", name: "Auguste Rodin", movement: "Modern Realism / Bronze", core: "Foreshortening, Gesture, Form & Expressive Muscle" },
  { slug: "banksy", name: "Banksy", movement: "Street Art / Stencil", core: "High Contrast Stencil, Narrative Art & Satire" },
  { slug: "barbara-hepworth", name: "Barbara Hepworth", movement: "Modernist Abstract Sculpture", core: "Pierced Form, Organic Negative Space & Smooth Planar Texture" },
  { slug: "beatrix-potter", name: "Beatrix Potter", movement: "Natural History Illustration", core: "Delicate Wash, Line Work & Proportion of Anatomy" },
  { slug: "caravaggio", name: "Caravaggio", movement: "Baroque", core: "Chiaroscuro, Dramatic Ambient Light & Extreme Value Contrast" },
  { slug: "christo-and-jeanne-claude", name: "Christo and Jeanne-Claude", movement: "Environmental Installation", core: "Draping, Fabric Form, Scale & Monumental Space" },
  { slug: "clarice-cliff", name: "Clarice Cliff", movement: "Art Deco Ceramics", core: "Bold Geometric Shapes, Vibrant Glaze Hue & Outline" },
  { slug: "claude-monet", name: "Claude Monet", movement: "Impressionism", core: "En Plein Air, Optical Mixing & Broken Brushwork" },
  { slug: "damien-hirst", name: "Damien Hirst", movement: "Young British Artists (YBA)", core: "Conceptual Vitrines, Repetition & Grid Geometry" },
  { slug: "edouard-manet", name: "Édouard Manet", movement: "Realism / Pre-Impressionism", core: "Direct Tonal Shifts, Flat Picture Planes & Modern Life" },
  { slug: "emily-kame-kngwarreye", name: "Emily Kame Kngwarreye", movement: "Contemporary Indigenous Australian", core: "Dynamic Dot Technique, Mark Making & Sacred Landscape" },
  { slug: "frida-kahlo", name: "Frida Kahlo", movement: "Surrealist Symbolism", core: "Narrative Portraiture, Personal Symbolism & Vibrant Hue" },
  { slug: "georges-seurat", name: "Georges Seurat", movement: "Neo-Impressionism", core: "Pointillism / Divisionism & Color Theory Harmony" },
  { slug: "gustav-klimt", name: "Gustav Klimt", movement: "Art Nouveau / Symbolism", core: "Decorative Gold Leaf Pattern, Flat Shapes & Ornate Borders" },
  { slug: "henri-matisse", name: "Henri Matisse", movement: "Fauvism", core: "Pure Saturated Hue, Cut-outs & Fluid Expressive Contour" },
  { slug: "henry-moore", name: "Henry Moore", movement: "Modern Sculpture", core: "Biomorphic Voids, Reclining Forms & Monumental Bronze" },
  { slug: "jackson-pollock", name: "Jackson Pollock", movement: "Abstract Expressionism", core: "Action Drip Painting, Uninhibited Mark Making & Rhythmic Layering" },
  { slug: "jean-michel-basquiat", name: "Jean-Michel Basquiat", movement: "Neo-Expressionism", core: "Raw Typography, Street Mark Making & Anatomical Diptychs" },
  { slug: "jeff-koons", name: "Jeff Koons", movement: "Neo-Pop / Kitsch", core: "High Gloss Reflective Surface, American Kitsch & Assemblage" },
  { slug: "joan-miro", name: "Joan Miró", movement: "Surrealist Automatism", core: "Biomorphic Symbols, Primary Palettes & Intuitive Space" },
  { slug: "keith-haring", name: "Keith Haring", movement: "Pop Shop Graffiti", core: "Continuous Thick Contour Lines, Rhythm & High Chroma" },
  { slug: "l-s-lowry", name: "L.S. Lowry", movement: "Modern Figurative", core: "Matchstick Figures, Industrial Perspective & Bleak Value Tones" },
  { slug: "mark-rothko", name: "Mark Rothko", movement: "Colour Field Painting", core: "Feathered Luminous Rectangles, Value Immersion & Scumbling" },
  { slug: "maud-lewis", name: "Maud Lewis", movement: "Folk Art", core: "Pure Direct Pigment, Joyful Stylized Landscapes & No Perspective Rule" },
  { slug: "pablo-picasso", name: "Pablo Picasso", movement: "Analytical / Synthetic Cubism", core: "Multiple Viewpoints, Fragmented Planes & Collage Integration" },
  { slug: "rembrandt-van-rijn", name: "Rembrandt van Rijn", movement: "Dutch Golden Age", core: "Impasto Highlighting, Deep Shadow Glazes & Chiaroscuro" },
  { slug: "roy-lichtenstein", name: "Roy Lichtenstein", movement: "Pop Art", core: "Ben-Day Dots, Comic Strips, Hard Outlines & Primary Hues" },
  { slug: "salvador-dali", name: "Salvador Dalí", movement: "Surrealism", core: "Photorealistic Paranoia, Melting Perspective & Foreshortening" },
  { slug: "tracey-emin", name: "Tracey Emin", movement: "Conceptual Confessional Art", core: "Appliqué Stitching, Monotype Line Drawings & Raw Narrative" },
  { slug: "vincent-van-gogh", name: "Vincent van Gogh", movement: "Post-Impressionism", core: "High Impasto Swirls, Complementary Color Vibration & Raw Tone" },
  { slug: "william-morris", name: "William Morris", movement: "Arts and Crafts Movement", core: "Interlocking Repeating Patterns, Symmetrical Flora & Block Print" }
];

// Each technique links out to its own how-to page in /techniques/.
const TECHNIQUES = [
  { slug: "grid-method", name: "The Grid Method & Accurate Proportion", vocab: ["Picture Plane", "Alignment", "Scaling", "Tone"] },
  { slug: "one-point-perspective", name: "One-Point Perspective & Horizon Line", vocab: ["Horizon Line", "Vanishing Point", "Orthogonals", "Space"] },
  { slug: "two-point-perspective", name: "Two-Point Perspective (Corner View)", vocab: ["Two-Point Perspective", "Picture Plane", "High Horizon"] },
  { slug: "three-point-perspective", name: "Three-Point Perspective (Bird/Worm Eye)", vocab: ["Three-Point Perspective", "Low Level Horizon", "Atmospheric Value"] },
  { slug: "foreshortening-anatomy", name: "Foreshortening & Dynamic Hand/Body Anatomy", vocab: ["Foreshortening", "Form", "Contour", "Negative Space"] },
  { slug: "chiaroscuro-tonal-shading", name: "Chiaroscuro & Extreme Tonal Shading", vocab: ["Chiaroscuro", "Value", "Ambient Light", "Cast Shadow"] },
  { slug: "complementary-color-theory", name: "Complementary & Saturated Color Theory", vocab: ["Complementary Colours", "Hue", "Saturation", "Vibration"] },
  { slug: "ceramic-handbuilding", name: "Ceramic Handbuilding & Texture Marking", vocab: ["Coiling", "Sgraffito", "Slip", "Earthenware", "Leather-Hard"] }
];

// Supplies are tied to skill level, not medium — beginner stays minimal and
// medium-agnostic; pro can (but doesn't have to) pull in more.
const SUPPLIES = {
  beginner: {
    note: "Minimal supplies — you likely already have these.",
    items: [
      "Pencil or a fine liner pen",
      "Plain paper (any size you have on hand)",
      "Eraser",
      "Ruler (optional — useful for grid or perspective guides)"
    ]
  },
  advanced: {
    note: "A more technical project. Can include more supplies, but doesn't have to — mix and match based on what you have.",
    items: [
      "Everything from the beginner list",
      "Your choice of paint, ink, or clay, depending on the piece",
      "A proper surface — canvas, illustration board, or a sculpting base",
      "Finishing materials if you take it to completion (varnish, fixative, or glaze)",
      "Any specialty tools for the technique you pick from the Technique Library"
    ]
  }
};

// IMAGES — drop files matching these paths into the repo and they'll appear automatically.
// Artist reference images: images/artists/<slug>.{jpg,jpeg,png,webp}
// Step diagrams: images/steps/0N-*.{jpg,jpeg,png,webp} (shared across all artists)
const IMG_EXTS = ["jpg", "jpeg", "png", "webp"];

const STEP_IMAGES = [
  "images/steps/01-foundational-setup",
  "images/steps/02-signature-mark-making",
  "images/steps/03-value-hierarchy",
  "images/steps/04-refinement"
];

// Cycles through IMG_EXTS for a given base path; falls back to a placeholder note if none load.
function tryImageExts(imgEl) {
  const attempt = parseInt(imgEl.dataset.attempt || "0", 10);
  if (attempt >= IMG_EXTS.length) {
    imgEl.style.display = "none";
    const fallback = imgEl.nextElementSibling;
    if (fallback) fallback.style.display = "flex";
    return;
  }
  imgEl.dataset.attempt = String(attempt + 1);
  imgEl.src = `${imgEl.dataset.base}.${IMG_EXTS[attempt]}`;
}

function imageBlockHTML(basePath, altText, fallbackPath) {
  return `
    <img src="${basePath}.${IMG_EXTS[0]}" data-base="${basePath}" data-attempt="1" alt="${altText}" onerror="tryImageExts(this)">
    <div class="img-fallback">
      <strong>No image yet</strong>
      <span>Add <code>${fallbackPath}.jpg</code> (or .png/.webp)</span>
    </div>
  `;
}

function findArtistBySlug(slug) {
  return ARTISTS.find(a => a.slug === slug) || null;
}
