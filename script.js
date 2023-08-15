// Smooth scroll to the target section when clicking on a menu item
document.querySelectorAll('.menu a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            // Adjust the timing of the animation
            // Change the duration to a higher value for slower scrolling
            duration: 1000 // 1 second
        });
    });
});

// Slideshow functionality
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, idx) => {
        if (idx === index) {
            slide.style.opacity = 1;
        } else {
            slide.style.opacity = 0;
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Automatically advance the slideshow every few seconds
setInterval(nextSlide, 5000);

// Show the first slide initially
showSlide(currentSlide);
