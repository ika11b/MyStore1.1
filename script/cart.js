// Store cart items
const cartItems = [];
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// Add to cart event
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.related-product');
        const id = product.getAttribute('data-id');
        const name = product.getAttribute('data-name');
        const price = parseFloat(product.getAttribute('data-price'));
        const img = product.getAttribute('data-img');
        
        addToCart(id, name, price, img);
    });
});

// Function to add items to the cart
function addToCart(id, name, price, img) {
    const cartItem = {
        id,
        name,
        price,
        img
    };

    // Add the item to the cart array
    cartItems.push(cartItem);

    // Render the cart
    renderCart();
}

// Render the cart items and calculate total
function renderCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        const cartItemHTML = `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.name}">
                <div class="item-info">
                    <p class="product-name">${item.name}</p>
                    <p style="color:red;">ერთის ფასი: ${item.price}₾</p>
                </div>
                <button onclick="removeFromCart(${item.id})">წაშლა</button>
            </div>
        `;
        cartItemsContainer.innerHTML += cartItemHTML;
        total += item.price;
    });

    cartTotal.textContent = `ჯამი: ${total.toFixed(2)}₾`;
}

// Remove item from cart
function removeFromCart(id) {
    const index = cartItems.findIndex(item => item.id == id);
    if (index > -1) {
        cartItems.splice(index, 1);
    }

    renderCart();
}
