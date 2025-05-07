//Slider functionality
const track = document.querySelector('.slider-track');
const images = document.querySelectorAll('.slider img');

let index = 0;

function getImageWidth() {
    return images[0].getBoundingClientRect().width;
}

setInterval(() => {
    index++;
    if (index > images.length - 3) index = 0; // stop before last 3
    const offset = getImageWidth() * index;
    track.style.transform = `translateX(-${offset}px)`;
}, 3000);

// Basic client-side contact form validation feedback
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
