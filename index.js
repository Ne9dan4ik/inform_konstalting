const testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

document.querySelector('.right-arrow').addEventListener('click', () => {
  testimonials[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % testimonials.length;
  testimonials[currentIndex].classList.add('active');
});

document.querySelector('.left-arrow').addEventListener('click', () => {
  testimonials[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  testimonials[currentIndex].classList.add('active');
});

// Показ кнопки при прокрутке
window.addEventListener('scroll', function() {
    const scrollTopButton = document.querySelector('.scroll-to-top');
    if (window.scrollY > 300) { // Порог показа кнопки (например, 300px)
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

// Прокрутка страницы вверх при клике на кнопку
document.querySelector('.scroll-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Плавная прокрутка
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.navigator');
    
    if (window.scrollY > 250) { // Когда прокрутка больше 50px
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
