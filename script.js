const baseLink = "https://www.cdiscount.com/search/";

const products = [
  {
    name: "Smartphone Samsung Galaxy",
    category: "tech",
    price: 199,
    image: "https://images.samsung.com/is/image/samsung/p6pim/fr/galaxy-s23/gallery/fr-galaxy-s23-s911-sm-s911bzadeub-534823753?$650_519_PNG$",
    keyword: "samsung galaxy"
  },
  {
    name: "Casque Bluetooth JBL",
    category: "tech",
    price: 89,
    image: "https://www.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw2b6b9f3e/JBL_TUNE_510BT_Product_Image_Hero_Black.png",
    keyword: "casque JBL bluetooth"
  },
  {
    name: "Sneakers Nike Air",
    category: "mode",
    price: 109,
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9a6b3b3c-3c7e-4c3b-9f6f-5f3e7e7b7c5e/air-max-90-shoes.png",
    keyword: "nike air"
  },
  {
    name: "Lampe LED RGB",
    category: "maison",
    price: 29,
    image: "https://cdn.shopify.com/s/files/1/0266/6276/4597/products/led-lamp.png?v=1648123456",
    keyword: "lampe LED RGB"
  },
  {
    name: "Sac à dos anti-vol",
    category: "mode",
    price: 49,
    image: "https://m.media-amazon.com/images/I/71X0YJvZKDL._AC_SL1500_.jpg",
    keyword: "sac à dos antivol"
  },
  {
    name: "Montre connectée Huawei",
    category: "tech",
    price: 129,
    image: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/wearables/watch-gt-3/img/kv.png",
    keyword: "montre huawei"
  },
  {
    name: "Machine à café Nespresso",
    category: "maison",
    price: 89,
    image: "https://www.nespresso.com/ecom/medias/sys_master/public/13400000000000.png",
    keyword: "machine nespresso"
  },
  {
    name: "Hoodie oversize",
    category: "mode",
    price: 39,
    image: "https://cdn.shopify.com/s/files/1/0607/1234/5678/products/hoodie-oversize.png?v=1648123456",
    keyword: "hoodie oversize"
  },
  {
    name: "Tapis de souris XXL",
    category: "tech",
    price: 19,
    image: "https://cdn.shopify.com/s/files/1/0266/6276/4597/products/mousepad-xxl.png?v=1648123456",
    keyword: "tapis souris XXL"
  },
  {
    name: "Mug thermique",
    category: "lifestyle",
    price: 15,
    image: "https://cdn.shopify.com/s/files/1/0266/6276/4597/products/mug-thermique.png?v=1648123456",
    keyword: "mug isotherme"
  },
  {
    name: "Canapé d’angle convertible",
    category: "maison",
    price: 399,
    image: "https://www.cdiscount.com/pdt2/3/2/3/1/700x700/auc3700740302323/rw/canape-d-angle-convertible.jpg",
    keyword: "canapé convertible"
  },
  {
    name: "Table basse relevable",
    category: "maison",
    price: 89,
    image: "https://www.cdiscount.com/pdt2/6/9/8/1/700x700/auc3700740306981/rw/table-basse-relevable.jpg",
    keyword: "table basse relevable"
  },
  {
    name: "Lit adulte avec rangement",
    category: "maison",
    price: 149,
    image: "https://www.cdiscount.com/pdt2/9/3/9/1/700x700/auc3700740309391/rw/lit-adulte-rangement.jpg",
    keyword: "lit adulte rangement"
  },
  {
    name: "Enceinte Bluetooth portable",
    category: "tech",
    price: 59,
    image: "https://www.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw2b6b9f3e/JBL_FLIP_5_HERO_BLACK.png",
    keyword: "enceinte bluetooth"
  },
  {
    name: "Montre Fossil homme",
    category: "mode",
    price: 99,
    image: "https://www.fossil.com/on/demandware.static/-/Sites-fossil-master-catalog/default/dw2b6b9f3e/Fossil_Montre_Homme.png",
    keyword: "montre Fossil homme"
  },
  {
    name: "Tapis berbère",
    category: "maison",
    price: 79,
    image: "https://cdn.shopify.com/s/files/1/0266/6276/4597/products/tapis-berbere.png?v=1648123456",
    keyword: "tapis berbère"
  },
  {
    name: "Chaise gaming",
    category: "tech",
    price: 139,
    image: "https://cdn.shopify.com/s/files/1/0266/6276/4597/products/chaise-gaming.png?v=1648123456",
    keyword: "chaise gaming"
  },
  {
    name: "Lunettes de soleil Ray-Ban",
    category: "mode",
    price: 89,
    image: "https://cdn.shopify.com/s/files/1/0266/6276/4597/products/rayban-sunglasses.png?v=1648123456",
    keyword: "lunettes Ray-Ban"
  },
  {
    name: "Trousse de maquillage",
    category: "lifestyle",
    price: 25,
    image: "https://cdn.shopify.com/s/files/1/0266/6276/4597/products/trousse-maquillage.png?v=1648123456",
    keyword: "trousse maquillage"
  },
  {
    name: "Bureau assis-debout",
    category: "maison",
    price: 199,
    image: "https://cdn.shopify.com/s/files/1/0266/6276/4597/products/bureau-assis-debout.png?v=1648123456",
    keyword: "bureau assis debout"
  }
];

// 🧠 Affichage des produits
function displayProducts(list) {
  const container = document.getElementById("productList");
  if (!container) return;
  container.innerHTML = "";
  list.forEach(product => {
    const link = baseLink + encodeURIComponent(product.keyword);
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}€</p>
      <a href="${link}" target="_blank" class="btn">Voir sur Cdiscount</a>
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

// 🔁 Initialisation
window.onload = () => {
  if (document.getElementById("productList")) {
    displayProducts(products);
  }
};
