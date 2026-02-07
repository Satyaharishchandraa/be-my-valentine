// ---------- SCENE NAVIGATION ----------
function next(step) {
  document.getElementById(`a${step}`).classList.remove("active");
  document.getElementById(`a${step + 1}`).classList.add("active");
}

function yes() {
  document.getElementById("a4").classList.remove("active");
  document.getElementById("end").classList.add("active");
}

// ---------- NO BUTTON ESCAPE (MOBILE + DESKTOP) ----------
const noBtn = document.getElementById("noBtn");
const container = document.querySelector(".choices");

// Prevent focus / click
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  escape();
});

// Mobile: escape on touch proximity
container.addEventListener("touchstart", escape);
container.addEventListener("touchmove", escape);

// Desktop: escape before hover
container.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();

  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  const distance = Math.hypot(e.clientX - cx, e.clientY - cy);

  if (distance < 100) escape();
});

function escape() {
  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}