// ==================== GLOBAL VARIABLES ====================
let currentProduct = null;
let maxPrice = 10000;
let isFiltersCollapsed = false;

// Beverage Data with Philippine Peso (PHP) prices
const beverages = [
    {
        id: 1,
        name: "Onyx Black Cola",
        category: "soft-drinks",
        price: 650,
        description: "Premium craft cola with notes of vanilla and spice, served in black glass bottles.",
        image: "https://gemini.google.com/share/285f1b439372",
        details: ["750ml black glass bottle", "Cane sugar", "Vanilla extract", "Natural spices", "Limited edition"],
        dietary: []
    },
    {
        id: 2,
        name: "Gold Reserve Orange Juice",
        category: "juices",
        price: 1250,
        description: "Hand-squeezed blood orange juice from premium Italian orchards.",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        details: ["500ml gold-foiled bottle", "100% blood orange", "Cold pressed", "No additives", "Single origin"],
        dietary: ["organic", "vegan"]
    },
    {
        id: 3,
        name: "Midnight Energy Elixir",
        category: "energy-drinks",
        price: 925,
        description: "Artisanal energy blend with adaptogens and natural caffeine sources.",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        details: ["250ml matte black can", "Natural caffeine", "Adaptogen blend", "Zero sugar", "B-vitamins"],
        dietary: ["sugar-free", "low-calorie"]
    },
    {
        id: 4,
        name: "Obsidian Stout",
        category: "alcohol",
        price: 4500,
        description: "Limited edition imperial stout aged in bourbon barrels for 12 months.",
        image: "https://images.unsplash.com/photo-1618885472176-0e6e0a7e6c4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        details: ["750ml wax-sealed bottle", "ABV: 14.5%", "Barrel-aged", "Notes of chocolate & coffee", "Collector's edition"],
        dietary: []
    },
    {
        id: 5,
        name: "Black Truffle Coffee",
        category: "hot-beverages",
        price: 7500,
        description: "Rare coffee beans infused with black truffle essence from Italy.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        details: ["200g gold tin", "Black truffle infused", "Single origin", "Hand roasted", "Certificate of authenticity"],
        dietary: ["organic", "vegan"]
    },
    {
        id: 6,
        name: "Champagne Lemonade",
        category: "soft-drinks",
        price: 1750,
        description: "Sparkling lemonade with edible gold flakes and vintage champagne yeast.",
        image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        details: ["750ml crystal bottle", "Edible gold flakes", "Champagne yeast", "French lemons", "Handcrafted"],
        dietary: ["vegan"]
    },
    {
        id: 7,
        name: "Diamond Coconut Water",
        category: "juices",
        price: 1500,
        description: "Young Thai coconuts harvested at peak freshness, served in diamond-cut bottles.",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        details: ["500ml diamond-cut bottle", "First-press coconut water", "No additives", "Electrolyte rich", "Sustainably sourced"],
        dietary: ["organic", "sugar-free", "vegan"]
    },
    {
        id: 8,
        name: "24K Lager",
        category: "alcohol",
        price: 3750,
        description: "Crisp lager brewed with gold-filtered water and edible gold leaf.",
        image: "https://images.unsplash.com/photo-1518176258769-f227c798150e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        details: ["500ml gold-leaf bottle", "ABV: 5.5%", "Gold-filtered water", "Edible gold leaf", "Limited to 1000 bottles"],
        dietary: []
    },
    {
        id: 9,
        name: "Golden Monkey Tea",
        category: "hot-beverages",
        price: 10000,
        description: "Rare Chinese tea leaves hand-picked by trained monkeys, gilded with 24K gold.",
        image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        details: ["100g gold-leaf tin", "Hand-picked leaves", "24K gold gilded", "Antioxidant rich", "Certificate included"],
        dietary: ["organic", "vegan"]
    },
    {
        id: 10,
        name: "Performance Elixir",
        category: "energy-drinks",
        price: 1125,
        description: "Professional-grade hydration with diamond dust and rare mineral salts.",
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        details: ["500ml performance bottle", "Diamond dust infused", "Rare mineral salts", "Adaptogen complex", "Zero artificial"],
        dietary: ["sugar-free", "low-calorie"]
    },
    {
        id: 11,
        name: "Caviar Sparkling Water",
        category: "soft-drinks",
        price: 2250,
        description: "Artisanal sparkling water infused with Siberian sturgeon caviar essence.",
        image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        details: ["750ml caviar crystal", "Caviar essence", "Natural carbonation", "Zero calories", "Siberian sourced"],
        dietary: ["sugar-free", "low-calorie", "vegan"]
    },
    {
        id: 12,
        name: "Apple Cider Reserve",
        category: "alcohol",
        price: 6000,
        description: "Aged apple cider from heritage orchards, barrel-fermented for 3 years.",
        image: "https://images.unsplash.com/photo-1618885472176-0e6e0a7e6c4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        details: ["750ml numbered bottle", "ABV: 8.5%", "3-year barrel aged", "Heritage apples", "Gluten-free"],
        dietary: ["gluten-free"]
    }
];

// Suggested products for cart
const suggestedProducts = [
    { id: 13, name: "Crystal Iced Tea", price: 1650, image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 14, name: "Artisan Craft Soda", price: 1425, image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 15, name: "Gold Cold Brew", price: 2500, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 16, name: "Imperial Herbal Tea", price: 4500, image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
];

// ==================== UTILITY FUNCTIONS ====================
function showMessage(text, type = 'info') {
    const messageEl = document.getElementById('message');
    messageEl.textContent = text;
    messageEl.className = 'message';
    if (type === 'success') messageEl.classList.add('success');
    if (type === 'error') messageEl.classList.add('error');
    messageEl.classList.add('active');
    setTimeout(() => messageEl.classList.remove('active'), 3000);
}

function formatPrice(price) {
    return `₱${price.toLocaleString()}`;
}

function getCart() {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCounts = document.querySelectorAll('.cart-count');
    cartCounts.forEach(count => count.textContent = totalItems);
}

// ==================== PAGE NAVIGATION ====================
function showPage(pageId) {
    document.querySelectorAll('#login-page, #register-page, #store-page, #cart-page').forEach(page => {
        page.classList.remove('active-page');
    });
    document.getElementById(pageId).classList.add('active-page');
    
    if (pageId === 'store-page') {
        renderProducts(beverages);
        updateCartCount();
        updateHomeIndicator('all');
    } else if (pageId === 'cart-page') {
        loadCart();
        renderSuggestions();
        updateCartCount();
    }
}

// ==================== LOGIN FUNCTIONS ====================
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const rememberMe = document.getElementById('remember-me').checked;
    
    // Demo account
    if (email === 'demo@beveragebazaar.com.ph' && password === 'Demo123!') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', 'Premium Member');
        if (rememberMe) localStorage.setItem('rememberMe', 'true');
        showMessage('Welcome back! Redirecting to store...', 'success');
        setTimeout(() => showPage('store-page'), 1500);
        return;
    }
    
    // Check registered user
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        if (userData.email === email && userData.password === password) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userName', `${userData.firstName} ${userData.lastName}`);
            if (rememberMe) localStorage.setItem('rememberMe', 'true');
            showMessage('Welcome back! Redirecting to store...', 'success');
            setTimeout(() => showPage('store-page'), 1500);
            return;
        }
    }
    showMessage('Invalid email or password. Try demo@beveragebazaar.com.ph / Demo123!', 'error');
}

// ==================== REGISTRATION FUNCTIONS ====================
function checkPasswordStrength(password) {
    const requirements = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[^A-Za-z0-9]/.test(password)
    };
    for (const req in requirements) {
        const element = document.getElementById(`req-${req}`);
        if (requirements[req]) {
            element.classList.add('met');
            element.innerHTML = '✓ ' + element.textContent.substring(2);
        } else {
            element.classList.remove('met');
            element.innerHTML = '○ ' + element.textContent.substring(2);
        }
    }
}

function checkPasswordMatch() {
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const matchEl = document.getElementById('password-match');
    
    if (!confirmPassword) {
        matchEl.textContent = '';
        return;
    }
    if (password === confirmPassword) {
        matchEl.textContent = '✓ Passwords match';
        matchEl.className = 'validation-message success';
    } else {
        matchEl.textContent = '✗ Passwords do not match';
        matchEl.className = 'validation-message error';
    }
}

function handleRegistration(e) {
    e.preventDefault();
    
    // Age validation
    const dob = new Date(document.getElementById('date-of-birth').value);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) age--;
    if (age < 21) {
        showMessage('You must be at least 21 years old to register', 'error');
        return;
    }
    
    // Password validation
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        showMessage('Passwords do not match!', 'error');
        return;
    }
    
    const requirements = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[^A-Za-z0-9]/.test(password)
    };
    if (!Object.values(requirements).every(val => val === true)) {
        showMessage('Please meet all password requirements', 'error');
        return;
    }
    
    // Save user data
    const userData = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        zip: document.getElementById('zip').value,
        dob: dob,
        password: password,
        newsletter: document.getElementById('newsletter').checked
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    
    showMessage('Account created successfully! Redirecting to login...', 'success');
    setTimeout(() => showPage('login-page'), 2000);
}

// ==================== STORE FUNCTIONS ====================
function renderProducts(products) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    
    if (products.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #a0a0a0;">No products match your criteria.</p>';
        return;
    }
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        const categoryDisplay = product.category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        card.innerHTML = `
            <div class="product-image"><img src="${product.image}" alt="${product.name}" loading="lazy"></div>
            <div class="product-info">
                <div class="product-category">${categoryDisplay}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${formatPrice(product.price)}</div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('add-to-cart')) openProductModal(product);
        });
        card.querySelector('.add-to-cart').addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(product.id, 1);
            showMessage(`${product.name} added to cart`, 'success');
        });
        grid.appendChild(card);
    });
}

function applyFilters() {
    const selectedCategories = Array.from(document.querySelectorAll('#store-page .filter-options input[type="checkbox"]:checked'))
        .map(cb => cb.value);
    
    let filtered = beverages.filter(product => {
        if (product.price > maxPrice) return false;
        if (!selectedCategories.includes(product.category)) return false;
        
        const dietaryCheckboxes = document.querySelectorAll('#store-page .filter-group:nth-child(3) input[type="checkbox"]:checked');
        if (dietaryCheckboxes.length > 0) {
            const hasMatch = Array.from(dietaryCheckboxes).some(cb => product.dietary.includes(cb.value));
            if (!hasMatch) return false;
        }
        return true;
    });
    
    renderProducts(filtered);
    updateHomeIndicator('filtered');
}

function updateHomeIndicator(type, categoryName = '') {
    const indicator = document.getElementById('home-indicator');
    if (type === 'all') indicator.textContent = 'Showing all premium products';
    else if (type === 'category') indicator.textContent = `Showing ${categoryName}`;
    else indicator.textContent = 'Showing filtered selection';
}

function filterByCategory(category) {
    const checkboxes = document.querySelectorAll('#store-page .filter-options input[type="checkbox"]');
    checkboxes.forEach(cb => {
        if (['soft-drinks', 'juices', 'energy-drinks', 'alcohol', 'hot-beverages'].includes(cb.value)) {
            cb.checked = (cb.value === category);
        }
    });
    applyFilters();
    const display = category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    updateHomeIndicator('category', display);
}

function showAllProducts() {
    const checkboxes = document.querySelectorAll('#store-page .filter-options input[type="checkbox"]');
    checkboxes.forEach(cb => {
        if (['soft-drinks', 'juices', 'energy-drinks', 'alcohol', 'hot-beverages'].includes(cb.value)) {
            cb.checked = true;
        } else {
            cb.checked = false;
        }
    });
    document.getElementById('price-slider').value = 10000;
    maxPrice = 10000;
    document.getElementById('max-price').textContent = '₱10,000';
    renderProducts(beverages);
    updateHomeIndicator('all');
}

function toggleFilters() {
    isFiltersCollapsed = !isFiltersCollapsed;
    const sidebar = document.getElementById('filters-sidebar');
    if (isFiltersCollapsed) sidebar.classList.add('collapsed');
    else sidebar.classList.remove('collapsed');
}

function openProductModal(product) {
    currentProduct = product;
    const categoryDisplay = product.category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    document.getElementById('modal-img').src = product.image;
    document.getElementById('modal-category').textContent = categoryDisplay;
    document.getElementById('modal-name').textContent = product.name;
    document.getElementById('modal-price').textContent = formatPrice(product.price);
    document.getElementById('modal-description').textContent = product.description;
    
    const detailsList = document.getElementById('modal-details-list');
    detailsList.innerHTML = '';
    product.details.forEach(detail => {
        const li = document.createElement('li');
        li.textContent = detail;
        detailsList.appendChild(li);
    });
    document.getElementById('quantity-input').value = 1;
    document.getElementById('product-modal-overlay').classList.add('active');
    document.getElementById('product-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('product-modal-overlay').classList.remove('active');
    document.getElementById('product-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function addToCartFromModal() {
    if (!currentProduct) return;
    const quantity = parseInt(document.getElementById('quantity-input').value);
    addToCart(currentProduct.id, quantity);
    showMessage(`${quantity} ${currentProduct.name}(s) added to cart`, 'success');
    closeModal();
}

function addToCart(productId, quantity) {
    const product = beverages.find(p => p.id === productId);
    if (!product) return;
    let cart = getCart();
    const existing = cart.find(item => item.id === productId);
    if (existing) existing.quantity += quantity;
    else cart.push({ id: productId, name: product.name, price: product.price, image: product.image, quantity: quantity });
    saveCart(cart);
    updateCartCount();
}

// ==================== CART FUNCTIONS ====================
function loadCart() {
    const cart = getCart();
    const container = document.getElementById('cart-items-container');
    const emptyMsg = document.getElementById('empty-cart-message');
    
    if (cart.length === 0) {
        emptyMsg.style.display = 'block';
        container.style.display = 'none';
        updateSummary(0);
        return;
    }
    emptyMsg.style.display = 'none';
    container.style.display = 'block';
    renderCartItems(cart);
    updateSummary(calculateSubtotal(cart));
}

function renderCartItems(cart) {
    const container = document.getElementById('cart-items-container');
    container.innerHTML = '';
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        const row = document.createElement('div');
        row.className = 'cart-item-row';
        row.innerHTML = `
            <div class="cart-item-product">
                <div class="cart-item-image"><img src="${item.image}" alt="${item.name}"></div>
                <div class="cart-item-details">
                    <h3 class="cart-item-name">${item.name}</h3>
                    <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i> Remove</button>
                </div>
            </div>
            <div class="cart-item-price">${formatPrice(item.price)}</div>
            <div class="cart-item-quantity">
                <div class="quantity-controls">
                    <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                    <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="99" data-id="${item.id}">
                    <button class="quantity-btn increase" data-id="${item.id}">+</button>
                </div>
            </div>
            <div class="cart-item-total">${formatPrice(itemTotal)}</div>
            <div class="cart-item-actions">
                <button class="save-later" data-id="${item.id}"><i class="far fa-heart"></i> Save</button>
            </div>
        `;
        
        row.querySelector('.decrease').addEventListener('click', () => updateQuantity(item.id, parseInt(row.querySelector('.quantity-input').value) - 1));
        row.querySelector('.increase').addEventListener('click', () => updateQuantity(item.id, parseInt(row.querySelector('.quantity-input').value) + 1));
        row.querySelector('.quantity-input').addEventListener('change', (e) => updateQuantity(item.id, parseInt(e.target.value)));
        row.querySelector('.remove-item').addEventListener('click', () => removeFromCart(item.id));
        row.querySelector('.save-later').addEventListener('click', () => showMessage('Item saved for later', 'success'));
        
        container.appendChild(row);
    });
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) { removeFromCart(productId); return; }
    if (newQuantity > 99) { showMessage('Maximum quantity is 99 per item', 'error'); return; }
    
    let cart = getCart();
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart[index].quantity = newQuantity;
        saveCart(cart);
        loadCart();
        updateCartCount();
        showMessage('Quantity updated', 'success');
    }
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    loadCart();
    updateCartCount();
    showMessage('Item removed from cart', 'success');
}

function calculateSubtotal(cart) {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateSummary(subtotal) {
    const shipping = 499;
    const tax = subtotal * 0.12;
    const total = subtotal + shipping + tax;
    
    document.getElementById('subtotal').textContent = formatPrice(subtotal);
    document.getElementById('shipping').textContent = formatPrice(shipping);
    document.getElementById('tax').textContent = formatPrice(tax);
    document.getElementById('total').textContent = formatPrice(total);
}

function applyCoupon() {
    const couponCode = document.getElementById('coupon-code').value.trim().toUpperCase();
    if (!couponCode) { showMessage('Please enter a coupon code', 'error'); return; }
    
    const validCoupons = {
        'PREMIUM10': 0.1, 'GOLD15': 0.15, 'LUXURYSHIP': 'free-shipping',
        'WELCOME20': 0.2, 'PAYMAYA10': 0.1, 'GCASH15': 0.15
    };
    
    if (validCoupons[couponCode]) {
        const discount = validCoupons[couponCode];
        if (discount === 'free-shipping') {
            document.getElementById('shipping').textContent = 'FREE';
            showMessage('Free shipping applied!', 'success');
        } else {
            const cart = getCart();
            const subtotal = calculateSubtotal(cart);
            const newSubtotal = subtotal - (subtotal * discount);
            updateSummary(newSubtotal);
            showMessage(`Coupon applied! You saved ${formatPrice(subtotal * discount)}`, 'success');
        }
        document.getElementById('coupon-code').value = '';
    } else {
        showMessage('Invalid coupon code', 'error');
    }
}

function checkout() {
    const cart = getCart();
    if (cart.length === 0) { showMessage('Your cart is empty', 'error'); return; }
    const subtotal = calculateSubtotal(cart);
    const total = subtotal + 499 + (subtotal * 0.12);
    showMessage(`Proceeding to checkout. Total: ${formatPrice(total)}`, 'success');
    setTimeout(() => {
        saveCart([]);
        loadCart();
        updateCartCount();
        showMessage('Thank you for your premium order!', 'success');
    }, 2000);
}

function renderSuggestions() {
    const grid = document.getElementById('suggestions-grid');
    grid.innerHTML = '';
    
    suggestedProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'suggestion-card';
        card.innerHTML = `
            <div class="suggestion-image"><img src="${product.image}" alt="${product.name}"></div>
            <div class="suggestion-info">
                <h3 class="suggestion-name">${product.name}</h3>
                <div class="suggestion-price">${formatPrice(product.price)}</div>
                <button class="add-to-cart-suggestion" data-id="${product.id}"><i class="fas fa-cart-plus"></i> Add to Cart</button>
            </div>
        `;
        card.querySelector('.add-to-cart-suggestion').addEventListener('click', () => {
            addToCartSuggestion(product.id, 1);
            showMessage(`${product.name} added to cart`, 'success');
        });
        grid.appendChild(card);
    });
}

function addToCartSuggestion(productId, quantity) {
    const product = suggestedProducts.find(p => p.id === productId);
    if (!product) return;
    let cart = getCart();
    const existing = cart.find(item => item.id === productId);
    if (existing) existing.quantity += quantity;
    else cart.push({ id: productId, name: product.name, price: product.price, image: product.image, quantity: quantity });
    saveCart(cart);
    loadCart();
    updateCartCount();
}

// ==================== LOGOUT ====================
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    localStorage.removeItem('rememberMe');
    showMessage('Logged out successfully', 'success');
    showPage('login-page');
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    // Check login status
    if (localStorage.getItem('isLoggedIn') === 'true') {
        showPage('store-page');
        document.getElementById('user-greeting').textContent = `Welcome, ${localStorage.getItem('userName') || 'Premium Member'}`;
        document.getElementById('cart-user-greeting').textContent = `Welcome, ${localStorage.getItem('userName') || 'Premium Member'}`;
    } else {
        showPage('login-page');
    }
    
    // Password toggle functionality
    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const input = document.getElementById(targetId);
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            this.querySelector('i').classList.toggle('fa-eye');
            this.querySelector('i').classList.toggle('fa-eye-slash');
        });
    });
    
    // Login form
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    
    // Registration form
    document.getElementById('reg-password').addEventListener('input', function() { checkPasswordStrength(this.value); checkPasswordMatch(); });
    document.getElementById('confirm-password').addEventListener('input', checkPasswordMatch);
    document.getElementById('registration-form').addEventListener('submit', handleRegistration);
    
    // Forgot password modal
    const forgotModal = document.getElementById('forgot-password-modal');
    document.getElementById('forgot-password').addEventListener('click', (e) => {
        e.preventDefault();
        forgotModal.classList.add('active');
    });
    forgotModal.querySelector('.modal-close').addEventListener('click', () => forgotModal.classList.remove('active'));
    forgotModal.addEventListener('click', (e) => { if (e.target === forgotModal) forgotModal.classList.remove('active'); });
    document.getElementById('send-reset-link').addEventListener('click', () => {
        const email = document.getElementById('reset-email').value;
        if (!email) showMessage('Please enter your email address', 'error');
        else { showMessage('Password reset link sent to ' + email, 'success'); forgotModal.classList.remove('active'); }
    });
    
    // Navigation
    document.getElementById('show-register').addEventListener('click', (e) => { e.preventDefault(); showPage('register-page'); });
    document.getElementById('show-login').addEventListener('click', (e) => { e.preventDefault(); showPage('login-page'); });
    document.getElementById('show-cart').addEventListener('click', (e) => { e.preventDefault(); showPage('cart-page'); });
    document.getElementById('back-to-store').addEventListener('click', (e) => { e.preventDefault(); showPage('store-page'); });
    document.getElementById('continue-shopping').addEventListener('click', (e) => { e.preventDefault(); showPage('store-page'); });
    document.getElementById('empty-cart-shop').addEventListener('click', (e) => { e.preventDefault(); showPage('store-page'); });
    document.getElementById('nav-home').addEventListener('click', (e) => { e.preventDefault(); showPage('store-page'); });
    document.getElementById('footer-home').addEventListener('click', (e) => { e.preventDefault(); showPage('store-page'); });
    document.getElementById('footer-cart').addEventListener('click', (e) => { e.preventDefault(); showPage('cart-page'); });
    document.getElementById('cart-icon-link').addEventListener('click', (e) => { e.preventDefault(); showPage('cart-page'); });
    
    // Logout
    document.getElementById('logout-btn').addEventListener('click', logout);
    document.getElementById('cart-logout-btn').addEventListener('click', logout);
    
    // Store filters
    document.getElementById('price-slider').addEventListener('input', function() {
        maxPrice = parseInt(this.value);
        document.getElementById('max-price').textContent = `₱${maxPrice.toLocaleString()}`;
    });
    document.getElementById('apply-filters').addEventListener('click', applyFilters);
    document.getElementById('filter-toggle').addEventListener('click', toggleFilters);
    
    // Category navigation
    document.querySelectorAll('[data-category]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            filterByCategory(category);
            document.querySelectorAll('#store-page nav a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Modal
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('product-modal-overlay').addEventListener('click', (e) => { if (e.target === document.getElementById('product-modal-overlay')) closeModal(); });
    document.getElementById('decrease-qty').addEventListener('click', () => {
        const input = document.getElementById('quantity-input');
        if (parseInt(input.value) > 1) input.value = parseInt(input.value) - 1;
    });
    document.getElementById('increase-qty').addEventListener('click', () => {
        const input = document.getElementById('quantity-input');
        if (parseInt(input.value) < 99) input.value = parseInt(input.value) + 1;
    });
    document.getElementById('modal-add-to-cart').addEventListener('click', addToCartFromModal);
    
    // Cart
    document.getElementById('apply-coupon').addEventListener('click', applyCoupon);
    document.getElementById('checkout-btn').addEventListener('click', checkout);
    
    // Home link
    document.querySelector('#store-page nav a[data-nav="home"]').addEventListener('click', (e) => {
        e.preventDefault();
        showAllProducts();
        document.querySelectorAll('#store-page nav a').forEach(a => a.classList.remove('active'));
        e.target.classList.add('active');
    });
});