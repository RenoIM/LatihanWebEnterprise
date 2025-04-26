const biodataBox = document.getElementById('biodataBox');
const glitchSound = document.getElementById('glitchSound');
const bgMusic = document.getElementById('bgMusic');

// Autoplay BGM Music biar keren
window.addEventListener('DOMContentLoaded', () => {
  bgMusic.volume = 0.5;
  bgMusic.play().then(() => {
    // Direkomendasikan untuk di unmute untuk mencegah Autoplay di block?
    setTimeout(() => {
      bgMusic.muted = false;
    }, 200);
  }).catch((error) => {
    console.warn("Autoplay blocked:", error);
  });
});

// Suara glitch interval dan efek glitch pada box tiap 10 detik, menyala abang ku
setInterval(() => {
  biodataBox.classList.add('glitch');
  glitchSound.currentTime = 0;
  glitchSound.play();
  setTimeout(() => {
    biodataBox.classList.remove('glitch');
  }, 300);
}, 10000);
