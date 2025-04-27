const bgMusic = document.getElementById('bgMusic');

// Autoplay BGM Music biar keren
window.addEventListener('DOMContentLoaded', () => {
  bgMusic.volume = 0.5;
  bgMusic.play()
});

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

// JS Untuk menampilkan gambar jadi fullscreen ketika dipencet
const modal = document.getElementById("artworkModal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.getElementsByClassName("close")[0];

// When an artwork image is clicked
document.querySelectorAll('.artwork-item img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = "block";
    modalImage.src = img.src;
  });
});

// When the close button is clicked
closeBtn.addEventListener('click', () => {
  modal.style.display = "none";
});

// Also close modal if you click outside the image
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});