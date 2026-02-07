// ---------- SCENE NAVIGATION ----------
function next(step) {
  document.getElementById(`a${step}`).classList.remove("active");
  document.getElementById(`a${step + 1}`).classList.add("active");
}

function yes() {
  document.getElementById("a4").classList.remove("active");
  document.getElementById("end").classList.add("active");
}

// ---------- NO BUTTON ESCAPE LOGIC ----------
const noBtn = document.getElementById("noBtn");
const container = document.querySelector(".choices");

// Prevent accidental focus / click
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  escape();
});

// Mobile touch support
noBtn.addEventListener("touchstart", escape);

// Desktop: escape BEFORE hover happens
container.addEventListener("mousemove", (e) => {
  const btnRect = noBtn.getBoundingClientRect();

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const btnCenterX = btnRect.left + btnRect.width / 2;
  const btnCenterY = btnRect.top + btnRect.height / 2;

  const distance = Math.hypot(
    mouseX - btnCenterX,
    mouseY - btnCenterY
  );

  // If cursor comes close, run away
  if (distance < 90) {
    escape();
  }
});

function escape() {
  const maxX = container.clientWidth - noBtn.offsetWidth;
  const maxY = container.clientHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}