let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
let instructorIndex = 0;
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
    resetAutoSlide(); 
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
    resetAutoSlide(); 
}

function autoSlide() {
    autoSlideInterval = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 6000); 
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlide();
}

function showInstructorSlides(index) {
    const slides = document.querySelectorAll('.instructor-card');
    const slidesContainer = document.querySelector('.instructors-slides');
    const slideWidth = slides[0].offsetWidth + 20; // Inclui o gap

    if (index >= slides.length) instructorIndex = 0;
    if (index < 0) instructorIndex = slides.length - 1;

    const offset = instructorIndex * -slideWidth;
    slidesContainer.style.transform = `translateX(${offset}px)`;
}

function openFullscreenModal(imageSrc, name, description) {
    const modal = document.getElementById("fullscreenModal");
    const modalImage = document.getElementById("modalImage");
    const modalName = document.getElementById("modalName");
    const modalDescription = document.getElementById("modalDescription");

    modalImage.src = imageSrc;
    modalName.textContent = name;
    modalDescription.textContent = description;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Desabilita o scroll
}

function closeFullscreenModal() {
    const modal = document.getElementById("fullscreenModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Reabilita o scroll
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeFullscreenModal();
    }
});

window.onload = function() {
    showSlides(slideIndex);
    autoSlide();
};

showSlides(slideIndex);

document.addEventListener('DOMContentLoaded', () => {
    const sobreSection = document.querySelector('#sobre');

    function handleScroll() {
        const sectionTop = sobreSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;
        
        if (sectionTop < screenPosition) {
            sobreSection.classList.add('visible');
            window.removeEventListener('scroll', handleScroll); 
        }
    }

    window.addEventListener('scroll', handleScroll);
    showInstructorSlides(instructorIndex);
});


window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.querySelector('.prev').addEventListener('click', () => changeInstructorSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeInstructorSlide(1));