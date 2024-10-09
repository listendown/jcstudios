document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.mySlides');
    const showSlides = () => {
        slides.forEach((slide, index) => {
            slide.style.display = (index === slideIndex) ? 'block' : 'none';
        });
        slideIndex = (slideIndex + 1) % slides.length;
        setTimeout(showSlides, 3000);
    };
    showSlides();
});

function plusSlides(n) {
    let slides = document.querySelectorAll('.mySlides');
    slideIndex += n;
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}
