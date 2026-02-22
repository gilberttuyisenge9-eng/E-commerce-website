const products = [
    { id: 1, name: "Nike Air", price: 120, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
    { id: 2, name: "Adidas Runner", price: 100, image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5" },
    { id: 3, name: "Puma Sport", price: 90, image: "https://images.unsplash.com/photo-1528701800489-20be3c64a4f9" },
    { id: 4, name: "Converse Classic", price: 80, image: "https://images.unsplash.com/photo-1519741497674-611481863552" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productGrid = document.getElementById("product-grid");
const cartCount = document.getElementById("cart-count");

function displayProducts() {
    productGrid.innerHTML = "";
    products.forEach(product => {
        productGrid.innerHTML += `
            <div class="card">
                <img src="${product.image}" alt="">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(item.name + " added to cart!");
}

function updateCartCount() {
    cartCount.textContent = cart.length;
}

document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

displayProducts();
updateCartCount();