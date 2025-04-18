const products = [
    {
        id: 1,
        name: "هاتف ذكي",
        price: 1999,
        category: "electronics",
        image: "assets/images/phone.jpg"
    },
    // المزيد من المنتجات...
];

function displayProducts() {
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    products.forEach(product => {
        container.innerHTML += `
            <div class="product-card" data-category="${product.category}">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h3>${product.name}</h3>
                <p>${product.price} درهم</p>
                <button onclick="addToCart(${product.id})">أضف للسلة</button>
            </div>
        `;
    });
}
