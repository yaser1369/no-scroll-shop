
const STORAGE_KEY = "noScrollShopDataV1";

const seedData = {
  storeName: "فروشگاه نمونه",
  offerTitle: "آفر ویژه",
  header: {
    title: "فروشگاه نمونه",
    logo: "",
    background: "#ffffff",
    textColor: "#111827"
  },
  categories: [
    { id: "women", title: "زنانه", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80" },
    { id: "men", title: "مردانه", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1200&q=80" },
    { id: "kids", title: "بچگانه", image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=1200&q=80" },
    { id: "offers", title: "آفر ویژه", image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=1200&q=80" }
  ],
  products: []
};

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : structuredClone(seedData);
  } catch {
    return structuredClone(seedData);
  }
}
function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
let data = loadData();

const storeName = document.getElementById("storeName");
const offerTitle = document.getElementById("offerTitle");
const categoriesList = document.getElementById("categoriesList");
const productsList = document.getElementById("productsList");
const categoryTemplate = document.getElementById("categoryTemplate");
const productTemplate = document.getElementById("productTemplate");
const headerTitle = document.getElementById("headerTitle");
const headerLogo = document.getElementById("headerLogo");
const headerBackground = document.getElementById("headerBackground");
const headerTextColor = document.getElementById("headerTextColor");
const headerPreview = document.getElementById("headerPreview");
const homeImagesEditor = document.getElementById("homeImagesEditor");


function render() {
  storeName.value = data.storeName || "";
  offerTitle.value = data.offerTitle || "";

  data.header = data.header || {
    title: data.storeName || "فروشگاه نمونه",
    logo: "",
    background: "#ffffff",
    textColor: "#111827"
  };

  headerTitle.value = data.header.title || data.storeName || "";
  headerLogo.value = data.header.logo || "";
  headerBackground.value = data.header.background || "#ffffff";
  headerTextColor.value = data.header.textColor || "#111827";

  renderHeaderPreview();
  renderHomeImagesEditor();
  renderCategories();
  renderProducts();
}


function renderHeaderPreview() {
  const title = headerTitle.value.trim() || "عنوان هدر";
  const logo = headerLogo.value.trim();
  const background = headerBackground.value || "#ffffff";
  const textColor = headerTextColor.value || "#111827";

  headerPreview.style.background = background;
  headerPreview.style.color = textColor;
  headerPreview.innerHTML = `
    ${logo ? `<img src="${escapeHtml(logo)}" alt="لوگو" />` : `<div class="logo-placeholder">لوگو</div>`}
    <strong>${escapeHtml(title)}</strong>
    <span>🛒</span>
    <span>👤</span>
  `;
}

function renderHomeImagesEditor() {
  homeImagesEditor.innerHTML = "";

  data.categories.slice(0, 4).forEach((category, index) => {
    const card = document.createElement("article");
    card.className = "home-image-card";
    card.innerHTML = `
      <div class="home-image-preview">
        ${category.image ? `<img src="${escapeHtml(category.image)}" alt="${escapeHtml(category.title)}" />` : `<span>بدون تصویر</span>`}
      </div>

      <label>عنوان بخش
        <input type="text" data-home-title="${index}" value="${escapeHtml(category.title || "")}" />
      </label>

      <label>آدرس تصویر
        <input type="url" data-home-image="${index}" value="${escapeHtml(category.image || "")}" placeholder="https://..." />
      </label>

      <label>انتخاب عکس از دستگاه
        <input type="file" accept="image/*" data-home-file="${index}" />
      </label>
    `;

    const urlInput = card.querySelector(`[data-home-image="${index}"]`);
    const fileInput = card.querySelector(`[data-home-file="${index}"]`);
    const preview = card.querySelector(".home-image-preview");

    urlInput.addEventListener("input", () => {
      const value = urlInput.value.trim();
      preview.innerHTML = value
        ? `<img src="${escapeHtml(value)}" alt="پیش‌نمایش" />`
        : `<span>بدون تصویر</span>`;
    });

    fileInput.addEventListener("change", () => {
      const file = fileInput.files?.[0];
      if (!file) return;

      if (file.size > 1_500_000) {
        alert("حجم عکس باید کمتر از ۱.۵ مگابایت باشد.");
        fileInput.value = "";
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        urlInput.value = String(reader.result || "");
        preview.innerHTML = `<img src="${escapeHtml(urlInput.value)}" alt="پیش‌نمایش" />`;
      };
      reader.readAsDataURL(file);
    });

    homeImagesEditor.appendChild(card);
  });
}

[headerTitle, headerLogo, headerBackground, headerTextColor].forEach(input => {
  input.addEventListener("input", renderHeaderPreview);
});

function renderCategories() {
  categoriesList.innerHTML = "";
  data.categories.forEach((category, index) => {
    const node = categoryTemplate.content.firstElementChild.cloneNode(true);
    node.querySelector('[data-field="title"]').value = category.title || "";
    node.querySelector('[data-field="id"]').value = category.id || "";
    node.querySelector('[data-field="image"]').value = category.image || "";

    node.querySelector('[data-action="save"]').onclick = () => {
      const oldId = data.categories[index].id;
      const newCategory = {
        title: node.querySelector('[data-field="title"]').value.trim(),
        id: node.querySelector('[data-field="id"]').value.trim() || `category-${Date.now()}`,
        image: node.querySelector('[data-field="image"]').value.trim()
      };
      data.categories[index] = newCategory;
      data.products.forEach(p => {
        if (p.categoryId === oldId) p.categoryId = newCategory.id;
      });
      saveData(data);
      render();
    };

    node.querySelector('[data-action="delete"]').onclick = () => {
      const categoryId = data.categories[index].id;
      data.categories.splice(index, 1);
      data.products = data.products.filter(p => p.categoryId !== categoryId);
      saveData(data);
      render();
    };

    categoriesList.appendChild(node);
  });
}

function renderProducts() {
  productsList.innerHTML = "";
  data.products.forEach((product, index) => {
    const node = productTemplate.content.firstElementChild.cloneNode(true);
    const fields = Object.fromEntries([...node.querySelectorAll("[data-field]")].map(el => [el.dataset.field, el]));

    fields.name.value = product.name || "";
    fields.price.value = product.price || 0;
    fields.oldPrice.value = product.oldPrice || 0;
    fields.image.value = product.image || "";
    fields.colors.value = (product.colors || []).join(",");
    fields.sizes.value = (product.sizes || []).join(",");
    fields.description.value = product.description || "";

    fields.categoryId.innerHTML = data.categories.map(c =>
      `<option value="${escapeHtml(c.id)}">${escapeHtml(c.title)}</option>`
    ).join("");
    fields.categoryId.value = product.categoryId || data.categories[0]?.id || "";

    node.querySelector('[data-action="save"]').onclick = () => {
      data.products[index] = {
        ...product,
        id: product.id || `product-${Date.now()}`,
        name: fields.name.value.trim(),
        categoryId: fields.categoryId.value,
        price: Number(fields.price.value || 0),
        oldPrice: Number(fields.oldPrice.value || 0),
        image: fields.image.value.trim(),
        colors: splitList(fields.colors.value),
        sizes: splitList(fields.sizes.value),
        description: fields.description.value.trim()
      };
      saveData(data);
      render();
      alert("محصول ذخیره شد");
    };

    node.querySelector('[data-action="delete"]').onclick = () => {
      data.products.splice(index, 1);
      saveData(data);
      render();
    };

    productsList.appendChild(node);
  });
}


document.getElementById("saveHeaderBtn").onclick = () => {
  data.header = {
    title: headerTitle.value.trim() || data.storeName || "فروشگاه نمونه",
    logo: headerLogo.value.trim(),
    background: headerBackground.value || "#ffffff",
    textColor: headerTextColor.value || "#111827"
  };

  data.storeName = data.header.title;
  saveData(data);
  alert("تنظیمات هدر ذخیره شد");
  render();
};

document.getElementById("saveHomeImagesBtn").onclick = () => {
  data.categories.slice(0, 4).forEach((category, index) => {
    const titleInput = document.querySelector(`[data-home-title="${index}"]`);
    const imageInput = document.querySelector(`[data-home-image="${index}"]`);

    if (titleInput) category.title = titleInput.value.trim() || category.title;
    if (imageInput) category.image = imageInput.value.trim();
  });

  saveData(data);
  alert("عکس‌های صفحه اصلی ذخیره شدند");
  render();
};

document.getElementById("saveGeneralBtn").onclick = () => {
  data.storeName = storeName.value.trim();
  data.offerTitle = offerTitle.value.trim();
  saveData(data);
  alert("ذخیره شد");
};

document.getElementById("addCategoryBtn").onclick = () => {
  data.categories.push({
    id: `category-${Date.now()}`,
    title: "دسته جدید",
    image: ""
  });
  saveData(data);
  render();
};

document.getElementById("addProductBtn").onclick = () => {
  data.products.unshift({
    id: `product-${Date.now()}`,
    categoryId: data.categories[0]?.id || "",
    name: "محصول جدید",
    price: 0,
    oldPrice: 0,
    image: "",
    colors: [],
    sizes: [],
    description: ""
  });
  saveData(data);
  render();
  requestAnimationFrame(() => {
    const firstCard = productsList.querySelector(".editor-card");
    if (firstCard) {
      firstCard.scrollIntoView({ behavior: "smooth", block: "center" });
      const nameInput = firstCard.querySelector('[data-field="name"]');
      if (nameInput) { nameInput.focus(); nameInput.select(); }
    }
  });
};

document.getElementById("resetBtn").onclick = () => {
  if (!confirm("همه اطلاعات حذف و بازنشانی شود؟")) return;
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
};

function splitList(value) {
  return String(value || "")
    .split(/[,،;؛\\n]+/)
    .map(x => x.trim())
    .filter(Boolean);
}

function escapeHtml(value="") {
  return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
}

render();
