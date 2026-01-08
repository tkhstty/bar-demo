document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('.site-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const navOverlay = document.querySelector('.mobile-nav-overlay');
    const navLinks = document.querySelectorAll('.mobile-nav-overlay a');

    toggleBtn.addEventListener('click', () => {
        toggleBtn.classList.toggle('active');
        navOverlay.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleBtn.classList.remove('active');
            navOverlay.classList.remove('active');
        });
    });

    // Fade In Animation on Scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => fadeInObserver.observe(el));
});
