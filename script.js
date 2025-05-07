window.addEventListener('DOMContentLoaded', () => {
    console.log("Slider script loaded");
  
    //Slider functionality
    const track = document.querySelector('.slider-track');
    const images = document.querySelectorAll('.slider img');
    const slider = document.querySelector('.slider');
  
    let index = 0;
  
    function getImageWidthAndGap() {
        const imageWidth = images[0].getBoundingClientRect().width;
        const style = window.getComputedStyle(track);
        const gap = parseFloat(style.gap) || 0;
        return imageWidth + gap;
    }
  
    function getVisibleCount() {
        const sliderWidth = slider.getBoundingClientRect().width;
        const imageWidthAndGap = getImageWidthAndGap();
        return Math.floor(sliderWidth / imageWidthAndGap);
    }
  
    setInterval(() => {
        index++;
        const visibleCount = getVisibleCount();
        if (index > images.length - visibleCount) index = 0;
        const offset = getImageWidthAndGap() * index;
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
  });
  