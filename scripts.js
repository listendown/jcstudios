document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slides img');
    const showSlides = () => {
        slides.forEach((slide, index) => {
            slide.style.display = (index === slideIndex) ? 'block' : 'none';
        });
        slideIndex = (slideIndex + 1) % slides.length;
        setTimeout(showSlides, 3000);
    };
    showSlides();
});
