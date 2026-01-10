/* ===============================
   GLOBAL AUDIO HANDLER
================================ */

// mark audio unlocked on first user interaction
document.addEventListener("click", () => {
  localStorage.setItem("audioUnlocked", "yes");
  playMusic();
}, { once: true });

// play music safely
function playMusic() {
  const music = document.getElementById("bgMusic");
  if (!music) return;

  music.volume = 0.3;
  music.play().catch(() => {});
}

// play on normal page load
window.addEventListener("load", () => {
  if (localStorage.getItem("audioUnlocked") === "yes") {
    playMusic();
  }
});

// 🔥 play again when coming via BACK / FORWARD
window.addEventListener("pageshow", () => {
  if (localStorage.getItem("audioUnlocked") === "yes") {
    playMusic();
  }
});

/* ===============================
   MEMORY HEART BURST
================================ */
function revealMemory(card) {
  if (card.classList.contains("open")) return;

  for (let i = 0; i < 10; i++) {
    const heart = document.createElement("div");
    heart.className = "heart-burst";
    heart.innerHTML = Math.random() > 0.5 ? "😘" : "🥰";

    const rect = card.getBoundingClientRect();
    heart.style.left = rect.left + rect.width / 2 + "px";
    heart.style.top = rect.top + rect.height / 2 + "px";

    heart.style.setProperty("--x", `${(Math.random() - 0.5) * 120}px`);
    heart.style.setProperty("--y", `${(Math.random() - 0.5) * 120}px`);

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 800);
  }

  setTimeout(() => card.classList.add("open"), 200);
}


/* MEMORY HEART BURST */
function revealMemory(card) {
  if (card.classList.contains("open")) return;

  for (let i = 0; i < 10; i++) {
    const heart = document.createElement("div");
    heart.className = "heart-burst";
    heart.innerHTML = Math.random() > 0.5 ? "😘" : "🥰";

    const rect = card.getBoundingClientRect();
    heart.style.left = rect.left + rect.width / 2 + "px";
    heart.style.top = rect.top + rect.height / 2 + "px";

    heart.style.setProperty("--x", `${(Math.random() - 0.5) * 120}px`);
    heart.style.setProperty("--y", `${(Math.random() - 0.5) * 120}px`);

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 800);
  }

  setTimeout(() => card.classList.add("open"), 200);
}
