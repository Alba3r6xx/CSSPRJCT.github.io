document.addEventListener('DOMContentLoaded', () => {
    const categories = ["Merchandise", "Study Material", "Events", "Airtime"];
    const products = [
        { id: 1, name: "Society T-Shirt", category: "Merchandise", price: 10, image: "images/futureAI.jpg" },
        { id: 2, name: "Notebook", category: "Study Material", price: 5, image: "images/python.jpg" },
        { id: 3, name: "Event Ticket", category: "Events", price: 20, image: "images/csslogo.jpg" },
        { id: 4, name: "Airtime Voucher", category: "Airtime", price: 15, image: "images/futureAI.jpg" }
    ];

    // Adding more demo products (30 total) with random images and categories
    const images = ["images/futureAI.jpg", "images/python.jpg", "images/csslogo.jpg"];
    for (let i = 5; i <= 30; i++) {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        products.push({ id: i, name: `Demo Product ${i}`, category: randomCategory, price: (i * 2.5).toFixed(2), image: randomImage });
    }

    const productList = document.querySelector('.product-grid');
    const cartItems = document.getElementById('cart-items');
    const checkoutSection = document.getElementById('checkout-section');
    const cartSection = document.getElementById('cart-section');
    const cartCount = document.getElementById('cart-count');
    const searchInput = document.getElementById('search-input');
    const categoryMenu = document.getElementById('category-menu');
    const hamburgerButton = document.getElementById('hamburger-button');
    const pagination = document.getElementById('pagination');

    let cart = [];
    let currentPage = 1;
    const itemsPerPage = 6;

    function displayCategories() {
        categories.forEach(category => {
            const categoryItem = document.createElement('li');
            categoryItem.textContent = category;
            categoryItem.addEventListener('click', () => filterByCategory(category));
            categoryMenu.appendChild(categoryItem);
        });
    }

    function displayProducts(productsToDisplay) {
        productList.innerHTML = '';
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedProducts = productsToDisplay.slice(start, end);

        paginatedProducts.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card', 'animate__animated', 'animate__fadeInUp');
            productCard.style.animationDelay = `${index * 0.2}s`; // Slightly slower animation
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>$${product.price}</p>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            `;
            productList.appendChild(productCard);
        });

        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', () => {
                const productId = parseInt(button.getAttribute('data-id'));
                addToCart(productId);
            });
        });

        displayPagination(productsToDisplay.length);
    }

    function addToCart(productId) {
        const product = products.find(prod => prod.id === productId);
        if (product) {
            cart.push(product);
            displayCart();
        }
    }

    function displayCart() {
        cartItems.innerHTML = '';
        if (cart.length === 0) {
            cartItems.innerHTML = '<p>No items in cart</p>';
        } else {
            cart.forEach((item, index) => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item', 'animate__animated', 'animate__fadeInRight');
                cartItem.innerHTML = `
                    <div>
                        <h4>${item.name}</h4>
                        <p>$${item.price}</p>
                    </div>
                    <button onclick="removeFromCart(${index})">Remove</button>
                `;
                cartItems.appendChild(cartItem);
            });
        }

        cartCount.textContent = cart.length;
    }

    window.removeFromCart = function(index) {
        cart.splice(index, 1);
        displayCart();
    }

    window.toggleCart = function() {
        cartSection.classList.toggle('show');
    }

    document.querySelector('.close-cart').addEventListener('click', () => {
        cartSection.classList.remove('show');
    });

    document.getElementById('checkout-button').addEventListener('click', () => {
        cartSection.classList.remove('show');
        checkoutSection.classList.add('show');
    });

    document.querySelector('.close-checkout').addEventListener('click', () => {
        checkoutSection.classList.remove('show');
    });

    document.getElementById('checkout-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Payment submitted!');
        cart = [];
        displayCart();
        checkoutSection.classList.remove('show');
    });

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
        currentPage = 1; // Reset to first page when searching
        displayProducts(filteredProducts);
    });

    hamburgerButton.addEventListener('click', () => {
        categoryMenu.classList.toggle('show');
        hamburgerButton.classList.toggle('active');
    });

    function filterByCategory(category) {
        const filteredProducts = products.filter(product => product.category === category);
        currentPage = 1; // Reset to first page when filtering
        displayProducts(filteredProducts);
        categoryMenu.classList.remove('show');
        hamburgerButton.classList.remove('active');
    }

    function viewAllProducts() {
        currentPage = 1;
        displayProducts(products);
        categoryMenu.classList.remove('show');
        hamburgerButton.classList.remove('active');
    }

    function displayPagination(totalItems) {
        pagination.innerHTML = '';
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            if (i === currentPage) {
                pageButton.classList.add('active');
            }
            pageButton.addEventListener('click', () => {
                currentPage = i;
                displayProducts(products);
            });
            pagination.appendChild(pageButton);
        }
    }

    displayCategories();
    displayProducts(products);
});
