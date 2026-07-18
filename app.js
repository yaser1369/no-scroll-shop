
const STORAGE_KEY = "noScrollShopDataV1";
const CART_KEY = "noScrollShopCartV1";

const seedData = {
  storeName: "فروشگاه نمونه",
  offerTitle: "آفر ویژه",
  categories: [
    { id: "women", title: "زنانه", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80" },
    { id: "men", title: "مردانه", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1200&q=80" },
    { id: "kids", title: "بچگانه", image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=1200&q=80" },
    { id: "offers", title: "آفر ویژه", image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=1200&q=80" }
  ],
  products: [
    { id:"p1", categoryId:"women", name:"مانتو کوتاه", price:1890000, oldPrice:2190000, image:"https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=80", colors:["مشکی","کرم"], sizes:["38","40","42"], description:"پارچه سبک و مناسب استفاده روزانه" },
    { id:"p2", categoryId:"women", name:"پیراهن زنانه", price:1490000, oldPrice:0, image:"https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1000&q=80", colors:["سبز","مشکی"], sizes:["M","L","XL"], description:"مدل ساده و راحت" },
    { id:"p3", categoryId:"women", name:"شومیز", price:980000, oldPrice:1150000, image:"https://images.unsplash.com/photo-1564257577054-9d3ba26500d6?auto=format&fit=crop&w=1000&q=80", colors:["سفید","آبی"], sizes:["36","38","40"], description:"مناسب مهمانی و استفاده روزانه" },
    { id:"p4", categoryId:"women", name:"کت زنانه", price:2450000, oldPrice:0, image:"https://images.unsplash.com/photo-1548624313-0396c75e4b1a?auto=format&fit=crop&w=1000&q=80", colors:["طوسی","مشکی"], sizes:["38","40","42"], description:"دوخت رسمی و تمیز" },

    { id:"p5", categoryId:"men", name:"پیراهن مردانه", price:1250000, oldPrice:0, image:"https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1000&q=80", colors:["سفید","سرمه‌ای"], sizes:["L","XL","XXL"], description:"پارچه نخی" },
    { id:"p6", categoryId:"men", name:"کت اسپرت", price:3150000, oldPrice:3500000, image:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80", colors:["مشکی","ذغالی"], sizes:["48","50","52"], description:"مناسب استفاده رسمی" },
    { id:"p7", categoryId:"men", name:"تیشرت", price:790000, oldPrice:0, image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=80", colors:["مشکی","سفید"], sizes:["M","L","XL"], description:"پنبه‌ای و راحت" },
    { id:"p8", categoryId:"men", name:"شلوار کتان", price:1390000, oldPrice:0, image:"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=1000&q=80", colors:["کرم","مشکی"], sizes:["32","34","36"], description:"مدل راسته" },

    { id:"p9", categoryId:"kids", name:"ست کودک", price:890000, oldPrice:990000, image:"https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1000&q=80", colors:["صورتی","آبی"], sizes:["2","3","4"], description:"نرم و مناسب کودک" },
    { id:"p10", categoryId:"kids", name:"پیراهن دخترانه", price:1090000, oldPrice:0, image:"https://images.unsplash.com/photo-1580502734537-c6a7ee0b514d?auto=format&fit=crop&w=1000&q=80", colors:["صورتی","سفید"], sizes:["6","8","10"], description:"مدل مجلسی" },
    { id:"p11", categoryId:"kids", name:"هودی بچگانه", price:970000, oldPrice:0, image:"https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=1000&q=80", colors:["زرد","طوسی"], sizes:["4","6","8"], description:"گرم و راحت" },
    { id:"p12", categoryId:"kids", name:"شلوار بچگانه", price:690000, oldPrice:0, image:"https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=1000&q=80", colors:["آبی","مشکی"], sizes:["4","6","8"], description:"دوام بالا" },

    { id:"p13", categoryId:"offers", name:"مانتو تخفیف‌دار", price:1290000, oldPrice:1890000, image:"https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=80", colors:["مشکی"], sizes:["38","40"], description:"تعداد محدود" },
    { id:"p14", categoryId:"offers", name:"تیشرت تخفیف‌دار", price:590000, oldPrice:790000, image:"https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=format&fit=crop&w=1000&q=80", colors:["مشکی","سفید"], sizes:["M","L"], description:"فروش ویژه" },
    { id:"p15", categoryId:"offers", name:"ست کودک ویژه", price:690000, oldPrice:980000, image:"https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1000&q=80", colors:["قرمز","آبی"], sizes:["3","4"], description:"آفر محدود" },
    { id:"p16", categoryId:"offers", name:"پیراهن ویژه", price:990000, oldPrice:1490000, image:"https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=1000&q=80", colors:["سبز"], sizes:["M","L"], description:"قیمت ویژه" }
  ]
};

function getData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedData));
    return structuredClone(seedData);
  }
  try { return JSON.parse(raw); }
  catch {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedData));
    return structuredClone(seedData);
  }
}

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

const state = {
  view: "home",
  categoryId: null,
  productId: null,
  page: 0,
  selectedColor: "",
  selectedSize: "",
  qty: 1,
  cartPage: 0
};

const app = document.getElementById("app");

function money(value) {
  return Number(value || 0).toLocaleString("fa-IR") + " تومان";
}

function topbar({showHome=false, showBack=false}={}) {
  const data = getData();
  const cartCount = getCart().reduce((sum, item) => sum + item.qty, 0);
  return `
    <header class="topbar">
      ${showHome ? `<button class="icon-btn" data-nav="home" aria-label="صفحه اصلی">⌂</button>` : `<div></div>`}
      <div class="brand">${escapeHtml(data.storeName)}</div>
      ${showBack ? `<button class="back-btn" data-nav="back" aria-label="برگشت">←</button>` : `<div></div>`}
      <button class="icon-btn" data-nav="cart" aria-label="سبد خرید">🛒<span class="cart-count">${cartCount}</span></button>
      <button class="icon-btn" aria-label="حساب کاربری" onclick="alert('حساب کاربری نمونه')">👤</button>
    </header>`;
}

function renderHome() {
  const data = getData();
  const categories = data.categories.slice(0,4);
  while (categories.length < 4) {
    categories.push({id:`empty-${categories.length}`, title:"دسته خالی", image:""});
  }
  app.innerHTML = `
    <section class="screen">
      ${topbar()}
      <div class="grid-2x2">
        ${categories.map(c => `
          <button class="tile" data-category="${escapeAttr(c.id)}">
            ${c.image ? `<img src="${escapeAttr(c.image)}" alt="${escapeAttr(c.title)}" />` : ""}
            <span class="tile-label"><strong>${escapeHtml(c.title)}</strong></span>
          </button>`).join("")}
      </div>
    </section>`;
}

function renderCategory() {
  const data = getData();
  const products = data.products.filter(p => p.categoryId === state.categoryId);
  const totalPages = Math.max(1, Math.ceil(products.length / 4));
  state.page = Math.min(state.page, totalPages - 1);
  const visible = products.slice(state.page * 4, state.page * 4 + 4);

  app.innerHTML = `
    <section class="screen">
      ${topbar({showHome:true})}
      ${visible.length ? `
      <div class="grid-2x2">
        ${visible.map(p => `
          <button class="tile product-card" data-product="${escapeAttr(p.id)}">
            <img src="${escapeAttr(p.image)}" alt="${escapeAttr(p.name)}" />
            <span class="tile-label">
              <strong>${escapeHtml(p.name)}</strong>
              <span class="product-price">
                <b>${money(p.price)}</b>
                ${p.oldPrice ? `<span class="old-price">${money(p.oldPrice)}</span>` : ""}
              </span>
            </span>
          </button>`).join("")}
      </div>
      ${totalPages > 1 ? `
      <div class="pager">
        <div class="pager-box">
          <button data-page="prev" ${state.page === 0 ? "disabled" : ""}>‹</button>
          <span>${state.page + 1} از ${totalPages}</span>
          <button data-page="next" ${state.page >= totalPages - 1 ? "disabled" : ""}>›</button>
        </div>
      </div>` : ""}` : `<div class="empty">محصولی در این دسته ثبت نشده است.</div>`}
    </section>`;
}

function renderCart() {
  const data = getData();
  const cart = getCart();
  const items = cart.map((item, index) => ({
    ...item,
    index,
    product: data.products.find(p => p.id === item.productId)
  })).filter(item => item.product);

  const totalPages = Math.max(1, Math.ceil(items.length / 4));
  state.cartPage = Math.min(state.cartPage, totalPages - 1);
  const visible = items.slice(state.cartPage * 4, state.cartPage * 4 + 4);
  const total = items.reduce((sum, item) => sum + Number(item.product.price || 0) * Number(item.qty || 1), 0);

  app.innerHTML = `
    <section class="screen">
      ${topbar({showHome:true, showBack:true})}
      ${visible.length ? `
        <div class="cart-layout">
          <div class="grid-2x2 cart-grid">
            ${visible.map(item => `
              <article class="cart-card">
                <img src="${escapeAttr(item.product.image)}" alt="${escapeAttr(item.product.name)}" />
                <div class="cart-card-body">
                  <strong>${escapeHtml(item.product.name)}</strong>
                  <small>${escapeHtml(item.color || "")} ${item.size ? `• ${escapeHtml(item.size)}` : ""}</small>
                  <span>${money(item.product.price)} × ${Number(item.qty).toLocaleString("fa-IR")}</span>
                  <button data-remove-cart="${item.index}">حذف</button>
                </div>
              </article>`).join("")}
          </div>
          <div class="cart-summary">
            <strong>جمع: ${money(total)}</strong>
            <button data-checkout>ادامه و ثبت سفارش</button>
          </div>
        </div>
        ${totalPages > 1 ? `
          <div class="pager">
            <div class="pager-box">
              <button data-cart-page="prev" ${state.cartPage === 0 ? "disabled" : ""}>‹</button>
              <span>${state.cartPage + 1} از ${totalPages}</span>
              <button data-cart-page="next" ${state.cartPage >= totalPages - 1 ? "disabled" : ""}>›</button>
            </div>
          </div>` : ""}
      ` : `<div class="empty">سبد خرید خالی است.</div>`}
    </section>`;
}

function renderProduct() {
  const data = getData();
  const p = data.products.find(x => x.id === state.productId);
  if (!p) { state.view = "home"; render(); return; }

  if (!state.selectedColor) state.selectedColor = p.colors?.[0] || "";
  if (!state.selectedSize) state.selectedSize = p.sizes?.[0] || "";

  app.innerHTML = `
    <section class="screen">
      ${topbar({showHome:true, showBack:true})}
      <div class="product-detail">
        <div class="detail-image">
          <img src="${escapeAttr(p.image)}" alt="${escapeAttr(p.name)}" />
        </div>
        <div class="detail-panel">
          <h1>${escapeHtml(p.name)}</h1>
          <p>${escapeHtml(p.description || "")}</p>
          <div class="detail-price">${money(p.price)}</div>

          <div class="option-group">
            <div class="option-title">رنگ</div>
            <div class="chips">
              ${(p.colors || []).map(c => `<button class="chip ${state.selectedColor === c ? "active" : ""}" data-color="${escapeAttr(c)}">${escapeHtml(c)}</button>`).join("")}
            </div>
          </div>

          <div class="option-group">
            <div class="option-title">سایز</div>
            <div class="chips">
              ${(p.sizes || []).map(s => `<button class="chip ${state.selectedSize === s ? "active" : ""}" data-size="${escapeAttr(s)}">${escapeHtml(s)}</button>`).join("")}
            </div>
          </div>

          <div class="qty">
            <span>تعداد</span>
            <button data-qty="-1">−</button>
            <strong>${state.qty.toLocaleString("fa-IR")}</strong>
            <button data-qty="1">+</button>
          </div>

          <div></div>
          <button class="add-btn" data-add-cart>افزودن به سبد خرید</button>
        </div>
      </div>
    </section>`;
}

function render() {
  if (state.view === "home") renderHome();
  else if (state.view === "category") renderCategory();
  else if (state.view === "product") renderProduct();
  else if (state.view === "cart") renderCart();
}

app.addEventListener("click", (e) => {
  const pager = e.target.closest("[data-page]");
  if (pager && !pager.disabled) {
    state.page += pager.dataset.page === "next" ? 1 : -1;
    render();
    return;
  }

  const cartPager = e.target.closest("[data-cart-page]");
  if (cartPager && !cartPager.disabled) {
    state.cartPage += cartPager.dataset.cartPage === "next" ? 1 : -1;
    render();
    return;
  }

  const category = e.target.closest("[data-category]");
  if (category) {
    state.categoryId = category.dataset.category;
    state.page = 0;
    state.view = "category";
    render();
    return;
  }

  const product = e.target.closest("[data-product]");
  if (product) {
    state.productId = product.dataset.product;
    state.selectedColor = "";
    state.selectedSize = "";
    state.qty = 1;
    state.view = "product";
    render();
    return;
  }

  const nav = e.target.closest("[data-nav]");
  if (nav) {
    if (nav.dataset.nav === "home") state.view = "home";
    else if (nav.dataset.nav === "cart") { state.cartPage = 0; state.view = "cart"; }
    else if (nav.dataset.nav === "back") state.view = state.view === "cart" ? "home" : "category";
    render();
    return;
  }

  const color = e.target.closest("[data-color]");
  if (color) {
    state.selectedColor = color.dataset.color;
    render();
    return;
  }

  const size = e.target.closest("[data-size]");
  if (size) {
    state.selectedSize = size.dataset.size;
    render();
    return;
  }

  const qty = e.target.closest("[data-qty]");
  if (qty) {
    state.qty = Math.max(1, state.qty + Number(qty.dataset.qty));
    render();
    return;
  }

  const removeCart = e.target.closest("[data-remove-cart]");
  if (removeCart) {
    const cart = getCart();
    cart.splice(Number(removeCart.dataset.removeCart), 1);
    saveCart(cart);
    render();
    return;
  }

  if (e.target.closest("[data-checkout]")) {
    alert("مرحله ثبت سفارش در نسخه بعدی تکمیل می‌شود.");
    return;
  }

  if (e.target.closest("[data-add-cart]")) {
    const cart = getCart();
    const existing = cart.find(item =>
      item.productId === state.productId &&
      item.color === state.selectedColor &&
      item.size === state.selectedSize
    );
    if (existing) existing.qty += state.qty;
    else cart.push({
      productId: state.productId,
      color: state.selectedColor,
      size: state.selectedSize,
      qty: state.qty
    });
    saveCart(cart);
    state.cartPage = 0;
    state.view = "cart";
    render();
  }
});

window.addEventListener("storage", (e) => {
  if (e.key === STORAGE_KEY) render();
});

function escapeHtml(value="") {
  return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
}
function escapeAttr(value="") { return escapeHtml(value); }

if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(()=>{});
render();
