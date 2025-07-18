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
/* --- FUNCIONALIDAD PARA ACORDEÓN / DESPLEGABLES --- */
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    });
});
    });
});
// --- SMOOTH SCROLL PARA EL MANIFIESTO DE LA FUNDADORA ---
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            // Asegurarse de que no sea solo un "#"
            if (targetId.length > 1) {
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
