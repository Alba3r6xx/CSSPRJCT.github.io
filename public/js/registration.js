document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu Animation
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('nav-open');
        gsap.fromTo(navMenu, {opacity: 0, y: -50}, {opacity: 1, y: 0, duration: 0.5});
    });

    // Form Animation
    const form = document.querySelector('#registrationForm');
    const formTl = gsap.timeline();
    formTl.fromTo(form, {opacity: 0, scale: 0.8}, {opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)'});
});
