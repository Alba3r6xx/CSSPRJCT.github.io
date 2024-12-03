document.addEventListener('DOMContentLoaded', () => {
    // GSAP and ScrollMagic Animations
    const controller = new ScrollMagic.Controller();

    document.querySelectorAll('.event, .resource').forEach((element, index) => {
        const tl = gsap.timeline();
        tl.fromTo(element, {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 1, delay: index * 0.3});
        tl.to(element.querySelector('h3'), {color: '#ff6347', duration: 0.5, yoyo: true, repeat: 1});
        tl.from(element.querySelector('p'), {opacity: 0, duration: 0.5}, "-=0.5");

        new ScrollMagic.Scene({
            triggerElement: element,
            triggerHook: 0.9
        })
        .setTween(tl)
        .addTo(controller);
    });
    
    // Responsive Design Adjustments
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Form Animation
    const form = document.querySelector('#registrationForm');
    const formTl = gsap.timeline();
    formTl.fromTo(form, {opacity: 0, scale: 0.8}, {opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)'});
    new ScrollMagic.Scene({
        triggerElement: form,
        triggerHook: 0.7
    })
    .setTween(formTl)
    .addTo(controller);
});
// Hamburger Menu Animation
const hamburgerButton = document.getElementById('hamburger-button');
const navMenu = document.querySelector('.nav-menu');  // You're not using this, but it's in the original code
const categoryMenu = document.getElementById('category-menu'); // Or document.querySelector('.category-menu')

// Check if categoryMenu exists before adding event listener
if (categoryMenu) {
  hamburgerButton.addEventListener('click', () => {
      categoryMenu.classList.toggle('show');
      hamburgerButton.classList.toggle('active');
  });
} else {
  console.error("Element with ID 'category-menu' not found.");
  // Consider alternative action, e.g., showing a warning message to the user
}

 document.addEventListener('DOMContentLoaded', () => {
     const hamburger = document.querySelector('.hamburger-menu');
     const navMenu = document.querySelector('.nav-menu');
 
     hamburger.addEventListener('click', () => {
         navMenu.classList.toggle('nav-open');
     });
 });