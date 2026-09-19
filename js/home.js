// ART LAB — homepage: populate the artist dropdown, track the selected skill
// level, and send the visitor straight to that artist's dedicated page.

const artistSelect = document.getElementById("artistSelect");

ARTISTS.forEach((a, i) => {
  const opt = document.createElement("option");
  opt.value = a.slug;
  opt.textContent = a.name;
  artistSelect.appendChild(opt);
});

let currentSkill = "beginner";
document.querySelectorAll("#skillGroup .chip-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#skillGroup .chip-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentSkill = btn.dataset.val;
  });
});

function goToArtist(slug) {
  window.location.href = `artists/${slug}.html?skill=${currentSkill}`;
}

artistSelect.addEventListener("change", () => {
  if (artistSelect.value) goToArtist(artistSelect.value);
});

document.getElementById("viewGuideBtn").addEventListener("click", () => {
  if (artistSelect.value) goToArtist(artistSelect.value);
});

document.getElementById("surpriseBtn").addEventListener("click", () => {
  const pick = ARTISTS[Math.floor(Math.random() * ARTISTS.length)];
  goToArtist(pick.slug);
});

// TECHNIQUE LIBRARY PREVIEW — a few sample links on the homepage card
const techPreview = document.getElementById("techPreview");
if (techPreview) {
  TECHNIQUES.slice(0, 4).forEach(t => {
    const li = document.createElement("li");
    li.textContent = t.name;
    techPreview.appendChild(li);
  });
}
