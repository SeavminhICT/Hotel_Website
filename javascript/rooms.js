document.addEventListener('DOMContentLoaded', function() {
    // Get all slideshows
    const slideshows = document.querySelectorAll('.room-image-slider');
    
    slideshows.forEach(slideshow => {
        const slides = slideshow.querySelectorAll('.slides img');
        const dots = slideshow.querySelectorAll('.nav-dot');
        let currentSlide = 0;
        
        // Function to show specific slide
        function showSlide(index) {
            // Remove active class from all slides and dots
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Add active class to current slide and dot
            slides[index].classList.add('active');
            dots[index].classList.add('active');
        }
        
        // Function to show next slide
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        // Add click events to navigation dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });
        
        // Start automatic slideshow
        setInterval(nextSlide, 10000); // Change slide every 10 seconds
    });
});