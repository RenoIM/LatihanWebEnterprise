const biodataBox = document.getElementById('biodataBox');
const glitchSound = document.getElementById('glitchSound');
const bgMusic = document.getElementById('bgMusic');

// Autoplay BGM Music biar keren
window.addEventListener('DOMContentLoaded', () => {
  bgMusic.volume = 0.5;
  bgMusic.play()
});

// Suara glitch interval dan efek glitch pada box tiap 15 detik, menyala abang ku
setInterval(() => {
  glitchSound.play();
  biodataBox.classList.add('glitch');
  glitchSound.currentTime = 0;
  setTimeout(() => {
    biodataBox.classList.remove('glitch');
  }, 3000);
}, 15000);

document.addEventListener("DOMContentLoaded", () => {
  // Play fade-in when entering
  document.body.classList.add('fade-in');

  // Find all normal links
  const links = document.querySelectorAll('a[href]');

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      const href = this.getAttribute('href');

      // Ignore anchor links like href="#something"
      if (href.startsWith('#')) return;

      event.preventDefault(); // stop instant jump
      document.body.classList.remove('fade-in');
      document.body.classList.add('fade-out');

      setTimeout(() => {
        window.location.href = href;
      }, 500); // match fadeOut animation
    });
  });
});
