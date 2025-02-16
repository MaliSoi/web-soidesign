let slideIndex = 0;

// Function to move to the next or previous slide
function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    slideIndex += direction;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    updateSlidePosition();
}

// Function to update the position of slides
function updateSlidePosition() {
    const slides = document.querySelector('.carousel-images');
    const slideWidth = slides.children[0].clientWidth; // Get width of each slide
    slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

// Optionally: Add automatic sliding after a certain time interval
setInterval(() => moveSlide(1), 3000); // Moves every 3 seconds