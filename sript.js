let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

setInterval(() => {
  slides[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add('active');
}, 3000); // muda de imagem a cada 3 segundos