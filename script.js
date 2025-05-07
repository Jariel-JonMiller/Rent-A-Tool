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
  
    function getMaxOffset() {
        const totalWidth = getImageWidthAndGap() * images.length - (parseFloat(window.getComputedStyle(track).gap) || 0);
        const sliderWidth = slider.getBoundingClientRect().width;
        return totalWidth - sliderWidth;
    }
  
    function slide() {
        index++;
        const visibleCount = getVisibleCount();
        if (index > images.length - visibleCount) index = 0;
        let offset = getImageWidthAndGap() * index;
        const maxOffset = getMaxOffset();
        if (offset > maxOffset) offset = maxOffset;
        track.style.transform = `translateX(-${offset}px)`;
    }
  
    let slideInterval = setInterval(slide, 3000);
  
    window.addEventListener('resize', () => {
        clearInterval(slideInterval);
        index = 0;
        track.style.transform = `translateX(0)`;
        slideInterval = setInterval(slide, 3000);
    });
  
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
  