const music = document.getElementById("bgMusic");

/* START MUSIC */
function playMusic() {
  if (!music) return;

  music.volume = 0.3;
  music.play();

  localStorage.setItem("musicPlaying", "yes");
}

/* SAVE CURRENT TIME EVERY SECOND */
setInterval(() => {
  if (music && !music.paused) {
    localStorage.setItem("musicTime", music.currentTime);
  }
}, 1000);

/* RESTORE MUSIC ON PAGE LOAD */
window.addEventListener("load", () => {
  if (!music) return;

  const shouldPlay = localStorage.getItem("musicPlaying");
  const savedTime = localStorage.getItem("musicTime");

  if (savedTime) {
    music.currentTime = parseFloat(savedTime);
  }

  if (shouldPlay === "yes") {
    music.volume = 0.3;
    music.play().catch(() => {});
  }
});

/* ===============================
   MEMORY HEART BURST + REVEAL
================================ */
function revealMemory(card) {
  if (card.classList.contains("open")) return;

  for (let i = 0; i < 10; i++) {
    const heart = document.createElement("div");
    heart.className = "heart-burst";
    heart.innerHTML = Math.random() > 0.5 ? "🤍" : "💙";

    const rect = card.getBoundingClientRect();
    heart.style.left = rect.left + rect.width / 2 + "px";
    heart.style.top = rect.top + rect.height / 2 + "px";

    heart.style.setProperty("--x", `${(Math.random() - 0.5) * 120}px`);
    heart.style.setProperty("--y", `${(Math.random() - 0.5) * 120}px`);

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 800);
  }

  setTimeout(() => {
    card.classList.add("open");
  }, 200);
}



let audioUnlocked = localStorage.getItem("audioUnlocked");

/* ONE-TIME USER INTERACTION TO UNLOCK AUDIO */
document.addEventListener("click", () => {
  localStorage.setItem("audioUnlocked", "yes");
  playCurrentPageMusic();
}, { once: true });

/* PLAY MUSIC FUNCTION */
function playCurrentPageMusic() {
  const music = document.getElementById("bgMusic");
  if (!music) return;

  music.volume = 0.3;
  music.play().catch(() => {});
}

/* HANDLE NORMAL LOAD */
window.addEventListener("load", () => {
  if (audioUnlocked === "yes") {
    playCurrentPageMusic();
  }
});

/* 🔥 HANDLE BACK / FORWARD NAVIGATION */
window.addEventListener("pageshow", (event) => {
  if (audioUnlocked === "yes") {
    playCurrentPageMusic();
  }
});

