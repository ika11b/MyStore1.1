async function loadProducts() {
    const container = document.getElementById('product-container');
    try {
        // წერტილი და დახრილი ხაზი მნიშვნელოვანია GitHub-ისთვის
        const response = await fetch('./products.json'); 
        
        if (!response.ok) {
            throw new Error('JSON ფაილი ვერ მოიძებნა');
        }

        const products = await response.json();

        if (container) {
            container.innerHTML = ''; 
            products.forEach(product => {
                const card = `
                    <article class="product-card">
                        <img src="./${product.image}" alt="${product.name}">
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

// ბურგერ მენიუს ლოგიკა - დავამატოთ შემოწმება, რომ სხვა გვერდებზე შეცდომა არ ამოაგდოს
const burgerIcon = document.getElementById('burger-icon');
const navList = document.getElementById('nav-list');

if (burgerIcon && navList) {
    burgerIcon.addEventListener('click', () => {
        navList.classList.toggle('show');
    });
}

// Sticky Header
window.onscroll = function() {
    const header = document.getElementById("main-header");
    if (header) {
        if (window.pageYOffset > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
};

loadProducts();
