const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

let scale = 1;

function messWithNo() {
  if (navigator.vibrate) navigator.vibrate(120);

  scale -= 0.12;
  if (scale < 0.4) scale = 0.4;
  noBtn.style.transform = `scale(${scale})`;

  noBtn.textContent = "eh 😳";
}

if (noBtn) {
  noBtn.addEventListener("click", messWithNo);
}

if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    window.location.href = "yes.html";
  });
}
