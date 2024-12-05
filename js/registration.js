document.addEventListener('DOMContentLoaded', () => {
  

    // Form Animation
    const form = document.querySelector('#registrationForm');
    const formTl = gsap.timeline();
    formTl.fromTo(form, {opacity: 0, scale: 0.8}, {opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)'});

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
