/**
 * Main JavaScript file for Magnum Opus Institute website
 * Features: Smooth scrolling, typing effect, and course card animations
 */

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Typing Effect for Hero Tagline
function initTypingEffect() {
    const tagline = document.querySelector('#home p');
    if (!tagline) return;

    const text = tagline.textContent;
    tagline.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            tagline.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust typing speed here
        }
    }

    // Start typing effect after a slight delay
    setTimeout(type, 500);
}

// Course Card Hover Effects
function initCourseCardHover() {
    const courseCards = document.querySelectorAll('#courses .bg-white');
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
}

// Initialize All Features
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScrolling();
    initTypingEffect();
    initCourseCardHover();
});