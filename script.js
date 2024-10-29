let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let autoSlideInterval;

function showSlides(n) {
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    slides.forEach(slide => slide.style.transform = `translateX(-${slideIndex * 100}%)`);
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
    resetAutoSlide(); // Reinicia o intervalo após interação manual
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
    resetAutoSlide(); // Reinicia o intervalo após interação manual
}

function autoSlide() {
    autoSlideInterval = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 6000); // 6 segundos
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlide();
}

window.onload = function() {
    showSlides(slideIndex);
    autoSlide();
};

// Iniciar com a primeira imagem
showSlides(slideIndex);

document.addEventListener('DOMContentLoaded', () => {
    const sobreSection = document.querySelector('#sobre');

    function handleScroll() {
        const sectionTop = sobreSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;
        
        if (sectionTop < screenPosition) {
            sobreSection.classList.add('visible');
            window.removeEventListener('scroll', handleScroll); // Remove o listener após a animação inicial
        }
    }

    window.addEventListener('scroll', handleScroll);
});

// Menu transparente que muda ao rolar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


