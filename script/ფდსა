async function loadProducts() {
    try {
        const response = await fetch('products.json'); // Fetch API-ს გამოყენება
        const products = await response.json();
        const container = document.getElementById('product-container');

        products.forEach(product => {
            const card = `
                <article class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price}</p>
                    <p class="rating">${product.rating}</p>
                    <button class="button">დეტალურად</button>
                </article>
            `;
            container.innerHTML += card;
        });
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

loadProducts();

// Sticky Header ფუნქცია (სქროლვისას)
window.onscroll = function() {
    const header = document.querySelector("header");
    if (window.pageYOffset > 50) {
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.width = "100%";
        header.style.zIndex = "1000";
    } else {
        header.style.position = "relative";
    }
};
