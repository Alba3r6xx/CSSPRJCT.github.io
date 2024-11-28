document.addEventListener('DOMContentLoaded', () => {
    // GSAP and ScrollMagic Animations
    const controller = new ScrollMagic.Controller();

    const elementsToAnimate = document.querySelectorAll('.hero-content, .news-item, .article-item, .event-item, .cta-buttons, .membership-form');
    
    elementsToAnimate.forEach(element => {
        new ScrollMagic.Scene({
            triggerElement: element,
            triggerHook: 0.9,
            reverse: false
        })
        .setTween(gsap.from(element, {opacity: 0, y: 50, duration: 1}))
        .addTo(controller);
    });

    // Hamburger Menu Animation
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('nav-open');
        gsap.fromTo(navMenu, {opacity: 0, y: -50}, {opacity: 1, y: 0, duration: 0.5});
    });

    // Search Functionality
    document.getElementById('search-button').addEventListener('click', () => {
        const query = document.getElementById('search-input').value;
        if (query) {
            window.location.href = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
        }
    });

    // Three.js Background Animation
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // transparent background
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('threejs-background').appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0xff6347, wireframe: true });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    camera.position.z = 50;

    function animate() {
        requestAnimationFrame(animate);
        torusKnot.rotation.x += 0.01;
        torusKnot.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();

    // Responsive Design Adjustments
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Add cursor effects
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
    });

    // Add hover animation to sections
    const sections = document.querySelectorAll('.top-news, .featured-articles, .upcoming-events');
    sections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.style.transform = 'translateY(-5px)';
            section.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
        });
        section.addEventListener('mouseout', () => {
            section.style.transform = 'translateY(0)';
            section.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        });
    });

    // Membership Form Interactions
    const membershipForm = document.querySelector('.membership-form');
    if (membershipForm) {
        const nameInput = document.querySelector('#name');
        const emailInput = document.querySelector('#email');
        const passwordInput = document.querySelector('#password');
        const membershipTypeInput = document.querySelector('#membership-type');

        nameInput.addEventListener('focus', () => {
            nameInput.style.border = '1px solid #337ab7';
        });

        nameInput.addEventListener('blur', () => {
            nameInput.style.border = '1px solid #ccc';
        });

        emailInput.addEventListener('focus', () => {
            emailInput.style.border = '1px solid #337ab7';
        });

        emailInput.addEventListener('blur', () => {
            emailInput.style.border = '1px solid #ccc';
        });

        passwordInput.addEventListener('focus', () => {
            passwordInput.style.border = '1px solid #337ab7';
        });

        passwordInput.addEventListener('blur', () => {
            passwordInput.style.border = '1px solid #ccc';
        });

        membershipTypeInput.addEventListener('focus', () => {
            membershipTypeInput.style.border = '1px solid #337ab7';
        });

        membershipTypeInput.addEventListener('blur', () => {
            membershipTypeInput.style.border = '1px solid #ccc';
        });
    }
});
