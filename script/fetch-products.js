async function loadProducts() {
    const container = document.getElementById('product-container');
    try {
        // fetch ეძებს products.json-ს მთავარ ფოლდერში
        const response = await fetch('./products.json'); 
        const products = await response.json();

        if (container) {
            container.innerHTML = ''; // Loading ტექსტის წაშლა
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
        }
    } catch (error) {
        console.error('შეცდომა:', error);
        if(container) container.innerHTML = 'პროდუქტების ჩატვირთვა ვერ მოხერხდა.';
    }
}

// ბურგერ მენიუს ლოგიკა
document.getElementById('burger-icon')?.addEventListener('click', () => {
    document.getElementById('nav-list').classList.toggle('show');
});

// Sticky Header
window.onscroll = function() {
    const header = document.getElementById("main-header");
    if (window.pageYOffset > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};

loadProducts();
