// ART LAB — renders a single artist's studio guide. The page shell only needs
// <body data-slug="..."> — this script finds the matching artist in
// site-data.js and fills in the rest, driven by the Beginner/Pro toggle.

const slug = document.body.dataset.slug;
const artist = findArtistBySlug(slug);

if (!artist) {
  document.getElementById("sheetRoot").innerHTML =
    "<p>Couldn't find that artist. <a href=\"../index.html\">Back to Studio Configuration</a>.</p>";
} else {
  const params = new URLSearchParams(window.location.search);
  let currentSkill = params.get("skill") === "advanced" ? "advanced" : "beginner";

  document.querySelectorAll("#skillGroup .chip-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.val === currentSkill);
    btn.addEventListener("click", () => {
      currentSkill = btn.dataset.val;
      document.querySelectorAll("#skillGroup .chip-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const url = new URL(window.location);
      url.searchParams.set("skill", currentSkill);
      history.replaceState({}, "", url);
      render();
    });
  });

  function render() {
    document.title = `${artist.name} — ART LAB Studio Guide`;

    document.getElementById("outTitle").textContent =
      `${artist.name.toUpperCase()}: ${artist.core.split("&")[0].toUpperCase()}`;
    document.getElementById("outSubtitle").textContent = `${artist.movement} // Focus: ${artist.core}`;
    document.getElementById("outBadge").textContent =
      currentSkill === "beginner" ? "FOUNDATION LEVEL" : "PORTFOLIO READY";

    document.getElementById("outArtist").textContent = artist.name;
    document.getElementById("outMovement").textContent = artist.movement;

    // Reference artwork image
    const artistImgBase = `../images/artists/${artist.slug}`;
    document.getElementById("outArtistImageWrap").innerHTML =
      imageBlockHTML(artistImgBase, `Reference artwork by ${artist.name}`, `images/artists/${artist.slug}`);

    // Supplies — tied to skill level, not medium
    const supplies = SUPPLIES[currentSkill];
    document.getElementById("outSuppliesNote").textContent = supplies.note;
    const suppliesList = document.getElementById("outSuppliesList");
    suppliesList.innerHTML = "";
    supplies.items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      suppliesList.appendChild(li);
    });

    // History & Philosophy
    document.getElementById("outHistory").textContent =
      `${artist.name} revolutionized modern art by questioning classical assumptions about space and representation. Working within ${artist.movement}, their emphasis on ${artist.core.toLowerCase()} provides the benchmark for this project. Study their key works closely, then apply that same sensibility to your own piece — bridging historical awareness with hands-on technique.`;

    // Steps
    const stepsList = document.getElementById("outSteps");
    stepsList.innerHTML = "";
    const stepsData = [
      {
        title: "Foundational Setup & Proportion Mapping",
        detail: currentSkill === "beginner"
          ? "Establish your basic grid or perspective horizon lines lightly using an HB pencil. Break your subject into raw geometric primitives (cylinders, blocks, spheres). Ensure your composition follows the Rule of Thirds before committing to heavy marks."
          : "Execute a rapid thumbnail study evaluating spatial tension and negative space. Construct dynamic sight lines or foreshortened contours directly onto the surface with architectural accuracy."
      },
      {
        title: `Adopting ${artist.name}'s Signature Mark Making`,
        detail: `Examine the stylistic essence of ${artist.name} (${artist.core}). Rather than merely drawing an outline, apply direct texture and gestures — whether sharp, fragmented strokes, bold chiaroscuro value planes, or pierced voids.`
      },
      {
        title: "Value Hierarchy, Light & Form Development",
        detail: "Identify your dominant light source (ambient vs. directed key light). Push your deep values first to establish drama, then work toward mid-tones and highlights, checking that shapes feel structural and spatial depth is achieved."
      },
      {
        title: "Portfolio Refinement & Presentation Critique",
        detail: currentSkill === "beginner"
          ? "Clean up unnecessary construction lines. Re-intensify boundary edges using crisp linework or high-contrast shadows. Verify the piece reads clearly from 6 feet away."
          : "Add final accent glazes, deliberate mark disruptions, or texture contrast. Prepare clean borders suitable for digital scanning into an Affinity Designer portfolio sheet or gallery mount."
      }
    ];

    stepsData.forEach((s, idx) => {
      const li = document.createElement("li");
      const stepImgBase = `../${STEP_IMAGES[idx]}`;
      li.innerHTML = `
        <div class="step-num">${idx + 1}</div>
        <div>
          <strong>${s.title}</strong>
          <p>${s.detail}</p>
          <div class="img-wrap step-image-wrap">
            ${imageBlockHTML(stepImgBase, s.title, STEP_IMAGES[idx])}
          </div>
        </div>
      `;
      stepsList.appendChild(li);
    });

    // Affinity notes zone
    document.getElementById("affinityNotes").innerHTML = `
      <strong>Technical Drawing Overlay (${artist.name}):</strong><br>
      • Measure proportion along the main perspective vanishing axis.<br>
      • Reserve highlights on the paper plane for maximum chiaroscuro contrast.<br>
      • Open this page's print/PDF export inside Affinity Designer to drop your custom vector annotations.
    `;
  }

  render();

  const printBtn = document.getElementById("printBtn");
  if (printBtn) printBtn.addEventListener("click", () => window.print());
}
