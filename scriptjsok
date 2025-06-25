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

    // --- Custom Cursor ---
    const customCursor = document.getElementById('custom-cursor');

    // Deshabilitar el custom cursor en pantallas táctiles o móviles
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    const isMobile = window.innerWidth <= 992; // Usamos el breakpoint de tablet para deshabilitarlo

    if (!isTouchDevice && !isMobile) {
        document.addEventListener('mousemove', e => {
            customCursor.style.left = `${e.clientX}px`;
            customCursor.style.top = `${e.clientY}px`;
        });

        // Efectos de hover para el cursor
        document.querySelectorAll('a, button, .blog-entry, .contact-form input, .contact-form textarea').forEach(el => {
            el.addEventListener('mouseenter', () => {
                customCursor.style.width = '30px';
                customCursor.style.height = '30px';
                customCursor.style.backgroundColor = 'var(--color-accent-red)';
                customCursor.style.boxShadow = '0 0 25px var(--color-accent-red), 0 0 10px var(--color-accent-red)';
            });
            el.addEventListener('mouseleave', () => {
                customCursor.style.width = '16px';
                customCursor.style.height = '16px';
                customCursor.style.backgroundColor = 'var(--color-accent-terracotta)';
                customCursor.style.boxShadow = '0 0 15px var(--color-accent-terracotta), 0 0 5px var(--color-accent-terracotta)';
            });
        });
    } else {
        customCursor.style.display = 'none'; // Ocultar el cursor si es touch/mobile
        document.body.style.cursor = 'default'; // Asegurar cursor nativo
    }

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
