// script.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Dejar de observar una vez visible
            }
        });
    }, {
        threshold: 0.1, // El 10% del elemento debe estar visible
        rootMargin: '0px 0px -50px 0px' // Comienza a revelarse 50px antes de entrar
    });

    revealElements.forEach(el => {
        observer.observe(el);
    });
    // --- Hamburger Menu (Mobile) ---
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeBtn = document.querySelector('.mobile-nav .close-btn');

    hamburger.addEventListener('click', () => {
        mobileNav.classList.add('is-active');
        document.body.style.overflow = 'hidden'; // Evita scroll en el body cuando el menú está abierto
    });

    closeBtn.addEventListener('click', () => {
        mobileNav.classList.remove('is-active');
        document.body.style.overflow = ''; // Restaura el scroll
    });

    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('is-active');
            document.body.style.overflow = '';
        });
    });
});
