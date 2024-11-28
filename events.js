document.addEventListener('DOMContentLoaded', () => {
    // GSAP and ScrollMagic Animations
    const controller = new ScrollMagic.Controller();

    document.querySelectorAll('.event').forEach((event, index) => {
        const tl = gsap.timeline();
        tl.fromTo(event, {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 1, delay: index * 0.3});
        new ScrollMagic.Scene({
            triggerElement: event,
            triggerHook: 0.9
        })
        .setTween(tl)
        .addTo(controller);
    });

    // Hamburger Menu Animation
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('nav-open');
        gsap.fromTo(navMenu, {opacity: 0, y: -50}, {opacity: 1, y: 0, duration: 0.5});
    });
});
