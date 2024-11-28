document.addEventListener('DOMContentLoaded', () => {
    // GSAP and ScrollMagic Animations
    const controller = new ScrollMagic.Controller();

    document.querySelectorAll('.event, .resource, .form-group').forEach((element, index) => {
        const tl = gsap.timeline();
        tl.fromTo(element, {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 1, delay: index * 0.3});
        tl.to(element.querySelector('label'), {color: '#ff6347', duration: 0.5, yoyo: true, repeat: 1});

        new ScrollMagic.Scene({
            triggerElement: element,
            triggerHook: 0.9
        })
        .setTween(tl)
        .addTo(controller);
    });

    // Social Media Icons Animation
    document.querySelectorAll('.social-media img').forEach((img, index) => {
        gsap.fromTo(img, {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 1, delay: index * 0.3});
    });

    // Hamburger Menu Animation
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('nav-open');
        hamburgerMenu.classList.toggle('menu-open');
        gsap.fromTo(navMenu, {opacity: 0, y: -50}, {opacity: 1, y: 0, duration: 0.5});
    });

    // Form Animation
    const form = document.querySelector('#contactForm');
    const formTl = gsap.timeline();
    formTl.fromTo(form, {opacity: 0, scale: 0.8}, {opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)'});
    new ScrollMagic.Scene({
        triggerElement: form,
        triggerHook: 0.7
    })
    .setTween(formTl)
    .addTo(controller);
});
