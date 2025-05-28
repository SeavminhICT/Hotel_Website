// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation hover effects
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#3498db';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#fff';
        });
    });

    // Resource card hover animation
    const resourceCards = document.querySelectorAll('.resource-card');
    resourceCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.05)';
        });
    });

    // Story card click handler
    const storyCards = document.querySelectorAll('.story-card');
    storyCards.forEach(card => {
        card.addEventListener('click', () => {
            const readLink = card.querySelector('.read-story').getAttribute('href');
            if (readLink) {
                window.location.href = readLink;
            }
        });
    });

    // Profile image click handler
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('click', () => {
            // Add profile menu toggle functionality
            console.log('Profile clicked');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Partner logo hover effect
    const partnerLogos = document.querySelectorAll('.partners-grid img');
    partnerLogos.forEach(logo => {
        logo.addEventListener('mouseover', () => {
            logo.style.opacity = '1';
        });
        logo.addEventListener('mouseout', () => {
            logo.style.opacity = '0.7';
        });
    });

    // Mobile menu toggle (for responsive design)
    const menuButton = document.createElement('button');
    menuButton.classList.add('mobile-menu-button');
    menuButton.innerHTML = '☰';
    const nav = document.querySelector('nav');
    
    if (window.innerWidth <= 768) {
        nav.parentNode.insertBefore(menuButton, nav);
        
        menuButton.addEventListener('click', () => {
            const ul = nav.querySelector('ul');
            ul.style.display = ul.style.display === 'flex' ? 'none' : 'flex';
        });
    }
});