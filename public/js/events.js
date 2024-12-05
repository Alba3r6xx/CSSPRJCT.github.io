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
});    