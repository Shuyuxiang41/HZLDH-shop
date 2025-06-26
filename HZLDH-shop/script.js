// 商品資料庫
const productData = {
  "e39-black": {
    name: "盜版 樹脂模型（黑）",
    price: 99877,
    image: "images/HZLDH.jpg",
    description: "經典盜版黑色，最低品質樹脂還原每一條細節。"
  },
  "e39-white": {
    name: "仿冒 樹脂模型（黑）",
    price: 87877,
    image: "images/HZLDH.jpg",
    description: "限量仿冒塗裝，黑到發亮，極具收藏價值。"
  },
  "m5-diecast": {
    name: "假的 金屬模型",
    price: 5200,
    image: "images/HZLDH.jpg",
    description: "假的金屬製全車可開門版，超細緻塑膠漆面處理。"
  }
};

// 購物車
function addToCart() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("product") || "e39-black";
  const name = document.getElementById("title").textContent;
  const priceText = document.getElementById("price").textContent;
  const price = parseInt(priceText.replace(/[^\d]/g, ""));

  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const existing = cartItems.find(item => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cartItems.push({ id, name, price, quantity: 1 });
  }

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  alert("不是叫你別加入購物車！");
}

// 燈箱
function zoomImage(img) {
  document.getElementById("lightbox-img").src = img.src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeZoom() {
  document.getElementById("lightbox").style.display = "none";
}

// 商品篩選（分類+搜尋）
function filterProducts() {
  const category = document.getElementById("category").value;
  const keyword = document.getElementById("searchInput")?.value?.toLowerCase() || "";
  const products = document.querySelectorAll(".product-card");

  products.forEach((product) => {
    const title = product.querySelector("h3").textContent.toLowerCase();
    const matchesCategory = category === "all" || product.dataset.category === category;
    const matchesKeyword = title.includes(keyword);
    product.style.display = matchesCategory && matchesKeyword ? "block" : "none";
  });
}
