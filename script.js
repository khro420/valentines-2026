const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

function moveNoButton() {
  const padding = 20;
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - padding);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - padding);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// Mobile + desktop support
noBtn.addEventListener("touchstart", moveNoButton);
noBtn.addEventListener("mouseover", moveNoButton);

yesBtn.addEventListener("click", () => {
  alert("Good choice 😌💘 Valentine’s secured.");
});
