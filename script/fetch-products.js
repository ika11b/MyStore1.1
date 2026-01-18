// 1. პროდუქტების წამოღება JSON-იდან
async function loadProducts() {
    const container = document.getElementById('product-container');
    try {
        const response = await fetch('./products.json'); 
        const products = await response.json();

        container.innerHTML = ''; // "იტვირთება" ტექსტის წაშლა

        products.forEach(product => {
            const card = `
                <article class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price}</p>
                    <p class="rating">${product.rating}</p>
                    <button class="button" style="cursor: default;">დეტალურად</button>
                </article>
            `;
            container.innerHTML += card;
        });
    } catch (error) {
        console.error('Error:', error);
        container.innerHTML = '<p>მონაცემების ჩატვირთვა ვერ მოხერხდა.</p>';
    }
}

// 2. ბურგერ მენიუს ფუნქციონალი
const burger = document.getElementById('burger-icon');
const navList = document.getElementById('nav-list');

if(burger) {
    burger.addEventListener('click', () => {
        navList.classList.toggle('show');
    });
}

// 3. Sticky Header სქროლვისას
window.onscroll = function() {
    const header = document.getElementById("main-header");
    if (window.pageYOffset > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};

loadProducts();
