function next(step) {
  document.getElementById(`a${step}`).classList.remove("active");
  document.getElementById(`a${step + 1}`).classList.add("active");
}

function yes() {
  document.getElementById("a4").classList.remove("active");
  document.getElementById("end").classList.add("active");
}

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", escape);
noBtn.addEventListener("click", escape);

function escape() {
  const x = Math.random() * 260;
  const y = Math.random() * 80;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}