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

// Seleccionamos todos los botones con la clase "accordion"
const accordions = document.querySelectorAll('.accordion');

// Recorremos cada botón
accordions.forEach(accordion => {
    // Le añadimos un evento de "click"
    accordion.addEventListener('click', function() {
        // Al hacer clic, le añadimos o quitamos la clase "active"
        this.classList.toggle('active');
        
        // Seleccionamos el panel que está justo después del botón
        const panel = this.nextElementSibling;
        
        // Si el panel ya tiene una altura máxima, la quitamos (lo cerramos)
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.padding = "0 25px";
        } else {
            // Si no, le damos la altura necesaria para que se vea (lo abrimos)
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.style.padding = "10px 25px 20px 25px";
        } 
    });
});
    });
});
