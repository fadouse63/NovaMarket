// 🛍️ Liste des produits
const products = [
  { name: "NovaWatch", category: "tech", price: 129, image: "https://source.unsplash.com/200x200/?smartwatch", link: "https://www.amazon.fr/s?k=smartwatch" },
  { name: "NovaSneaks", category: "mode", price: 89, image: "https://source.unsplash.com/200x200/?sneakers", link: "https://www.amazon.fr/s?k=sneakers" },
  { name: "NovaSound", category: "tech", price: 149, image: "https://source.unsplash.com/200x200/?headphones", link: "https://www.fnac.com/SearchResult/ResultList.aspx?Search=casque+audio" },
  { name: "NovaLamp", category: "maison", price: 39, image: "https://source.unsplash.com/200x200/?lamp", link: "https://www.amazon.fr/s?k=lampe+led" },
  { name: "NovaPack", category: "mode", price: 59, image: "https://source.unsplash.com/200x200/?backpack", link: "https://www.amazon.fr/s?k=sac+à+dos" },
  { name: "NovaHood", category: "mode", price: 49, image: "https://source.unsplash.com/200x200/?hoodie", link: "https://www.amazon.fr/s?k=hoodie" },
  { name: "NovaDesk", category: "maison", price: 199, image: "https://source.unsplash.com/200x200/?desk", link: "https://www.amazon.fr/s?k=bureau" },
  { name: "NovaMug", category: "lifestyle", price: 15, image: "https://source.unsplash.com/200x200/?mug", link: "https://www.amazon.fr/s?k=mug" },
  { name: "NovaPhone", category: "tech", price: 199, image: "https://source.unsplash.com/200x200/?smartphone", link: "https://www.amazon.fr/s?k=smartphone" },
  { name: "NovaBag", category: "mode", price: 69, image: "https://source.unsplash.com/200x200/?bag", link: "https://www.amazon.fr/s?k=sac+à+main" },
  // Tu peux ajouter +90 produits ici en copiant ce format
];

// 🧠 Affichage des produits
function displayProducts(list) {
  const container = document.getElementById("productList");
  if (!container) return;
  container.innerHTML = "";
  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}€</p>
      <button onclick="addToCart('${product.name}')">Ajouter au panier</button>
    `;
    container.appendChild(card);
  });
}

// 🧠 Filtres
function filterProducts() {
  const category = document.getElementById("category").value;
  const price = document.getElementById("price").value;
  document.getElementById("priceValue").textContent = price + "€";

  const filtered = products.filter(p =>
    (category === "all" || p.category === category) &&
    p.price <= price
  );

  displayProducts(filtered);
}

// 🛒 Panier
function addToCart(productName) {
  const product = products.find(p => p.name === productName);
  if (!product) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} ajouté au panier`);
}

// 🧾 Affichage du panier
function displayCart() {
  const container = document.getElementById("cartItems");
  const totalDisplay = document.getElementById("cartTotal");
  if (!container || !totalDisplay) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  container.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.price}€</p>
      <button onclick="removeFromCart(${index})">Retirer</button>
      <a href="${item.link}" target="_blank">Acheter chez le revendeur</a>
    `;
    container.appendChild(card);
  });

  totalDisplay.textContent = total + "€";
}

// ❌ Retirer du panier
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// ✅ Commander
function checkout() {
  alert("Merci pour votre commande ! Vous serez redirigé vers les revendeurs.");
  localStorage.removeItem("cart");
  window.location.href = "products.html";
}

// 🔁 Initialisation
window.onload = () => {
  if (document.getElementById("productList")) {
    displayProducts(products);
  }
  if (document.getElementById("cartItems")) {
    displayCart();
  }
};
