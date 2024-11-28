document.addEventListener('DOMContentLoaded', () => {
    // GSAP and ScrollMagic Animations
    const controller = new ScrollMagic.Controller();

    const elementsToAnimate = document.querySelectorAll('.benefits h2, .benefits ul li, .form-group');
    
    elementsToAnimate.forEach(element => {
        new ScrollMagic.Scene({
            triggerElement: element,
            triggerHook: 0.9,
            reverse: false
        })
        .setTween(gsap.from(element, {opacity: 0, y: 50, duration: 1}))
        .addTo(controller);
    });

    // Form Validation and Submission
    const membershipForm = document.getElementById('membershipForm');
    membershipForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const year = document.getElementById('year').value;

        if (name && email && year) {
            alert(`Thank you for joining us, ${name}!`);
            membershipForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Background Animation without Three.js
    const backgroundAnimation = document.querySelector('.css-background-animation');
    backgroundAnimation.style.animation = 'gradientAnimation 10s ease infinite';

    // Adding an additional simple effect to the buttons on hover
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.addEventListener('mouseover', () => {
        gsap.to(submitButton, { scale: 1.1, duration: 0.3 });
    });
    submitButton.addEventListener('mouseout', () => {
        gsap.to(submitButton, { scale: 1, duration: 0.3 });
    });
});
