// Islamabad Pets World — Application Code

// --- Product Database Presets ---
const PRODUCT_DATA_VERSION = 3;
const DEFAULT_PRODUCTS = [
  // --- Category: Parrots ---
  {
    id: "parrot-macaw",
    name: "Scarlet Macaw (Young Adult)",
    category: "parrots",
    categoryLabel: "Exotic Parrots",
    price: 320000,
    priceFormatted: "Rs. 320,000",
    image: "https://source.unsplash.com/featured/800x600/?scarlet-macaw,macaw,parrot",
    badge: "Rare",
    desc: "A stunning, highly intelligent Scarlet Macaw. Young adult (14 months), hand-raised, exceptionally social, and shows high capacity for mimicry. Comes with complete health certifications and DNA profiling.",
    specs: {
      scientific: "Ara macao",
      age: "14 Months",
      temperament: "Playful & Curious",
      lifespan: "50-75 Years",
      diet: "Pellets, Fruits & Seeds"
    }
  },
  {
    id: "parrot-budgie",
    name: "Premium Show Budgerigar",
    category: "parrots",
    categoryLabel: "Exotic Parrots",
    price: 8500,
    priceFormatted: "Rs. 8,500",
    image: "https://source.unsplash.com/featured/800x600/?budgie,parakeet,parrot",
    badge: "Popular",
    desc: "Exquisite show-quality Budgerigar with vibrant blue-green plumage. Playful, active, and very friendly. Perfect for families and beginner aviculturists.",
    specs: {
      scientific: "Melopsittacus undulatus",
      age: "3 Months",
      temperament: "Social & Vocal",
      lifespan: "5-10 Years",
      diet: "Seeds, Green Leafy Veggies"
    }
  },
  {
    id: "parrot-cockatiel",
    name: "Lutino Cockatiel (Hand-Fed)",
    category: "parrots",
    categoryLabel: "Exotic Parrots",
    price: 24000,
    priceFormatted: "Rs. 24,000",
    image: "https://source.unsplash.com/featured/800x600/?cockatiel,bird,parrot",
    badge: "Sweet Nature",
    desc: "Gorgeous light-yellow Lutino Cockatiel with signature bright orange cheek patches. Hand-fed from chickhood, incredibly cuddly, and loves head scratches. Great whistling potential.",
    specs: {
      scientific: "Nymphicus hollandicus",
      age: "5 Months",
      temperament: "Gentle & Affectionate",
      lifespan: "15-20 Years",
      diet: "Cockatiel Mix, Millet"
    }
  },
  {
    id: "parrot-lovebird",
    name: "Fischer's Lovebird Pair",
    category: "parrots",
    categoryLabel: "Exotic Parrots",
    price: 15000,
    priceFormatted: "Rs. 15,000",
    image: "https://source.unsplash.com/featured/800x600/?lovebird,bird,parrot",
    badge: "Pair",
    desc: "A bonded pair of colorful Fischer's Lovebirds. Known for their intense social bonding, vibrant red faces, and green bodies. Extremely energetic and entertaining to watch.",
    specs: {
      scientific: "Agapornis fischeri",
      age: "8 Months",
      temperament: "Energetic & Pair-Bonded",
      lifespan: "10-15 Years",
      diet: "Seed Mix, Fresh Fruits"
    }
  },

  // --- Category: Accessories & Supplies ---
  {
    id: "acc-gourmet-mix",
    name: "Gourmet Premium Bird Seed Mix (2kg)",
    category: "accessories",
    categoryLabel: "Accessories & Supplies",
    price: 3400,
    priceFormatted: "Rs. 3,400",
    image: "https://source.unsplash.com/featured/800x600/?bird-seed,parrot-food,seed-mix",
    badge: "Best Seller",
    desc: "A luxury blend of premium seeds, grains, dried tropical fruits, and nuts specifically formulated for medium to large birds. Fortified with vitamins and minerals for brilliant plumage and strong immunity.",
    specs: {
      brand: "Parrot Palace Nutrition",
      weight: "2.0 kg",
      benefits: "Plumage Shine & Vitality",
      origin: "Imported Ingredients",
      expiry: "18 Months Shelf Life"
    }
  },
  {
    id: "acc-hand-formula",
    name: "Opti-Grow Hand Feeding Formula (1kg)",
    category: "accessories",
    categoryLabel: "Accessories & Supplies",
    price: 4800,
    priceFormatted: "Rs. 4,800",
    image: "https://source.unsplash.com/featured/800x600/?bird-food,hand-feeding-formula,pet-food",
    badge: "Breeder Choice",
    desc: "Highly nutritious micro-encapsulated formula for baby birds from hatchlings to weaning. Easy to digest and promotes rapid growth, healthy bone density, and robust digestive track development.",
    specs: {
      brand: "Opti-Grow Pro",
      weight: "1.0 kg",
      benefits: "High Digestibility & Growth",
      stage: "Hatchling to Weaning",
      expiry: "12 Months Shelf Life"
    }
  },
  {
    id: "acc-flight-cage",
    name: "Luxury Black Flight Cage (Large)",
    category: "accessories",
    categoryLabel: "Accessories & Supplies",
    price: 42000,
    priceFormatted: "Rs. 42,000",
    image: "https://source.unsplash.com/featured/800x600/?bird-cage,aviary,cage",
    badge: "Luxury",
    desc: "Premium, heavy-duty metallic wrought iron flight cage. Spacious design featuring non-toxic hammertone powder coating, dual feeder gates, slide-out cleaning trays, and heavy-duty rolling casters.",
    specs: {
      material: "Wrought Iron (Powder Coated)",
      dimensions: "36\"L x 24\"W x 62\"H",
      spacing: "0.5\" Bar Spacing",
      doors: "1 Main, 4 Side Panels",
      weight: "22 kg"
    }
  },
  {
    id: "acc-wood-perch",
    name: "Natural Java Wood Multi-Branch Perch",
    category: "accessories",
    categoryLabel: "Accessories & Supplies",
    price: 3200,
    priceFormatted: "Rs. 3,200",
    image: "https://source.unsplash.com/featured/800x600/?bird-perch,wood-perch,parrot-perch",
    badge: "Eco-friendly",
    desc: "Harvested from natural Java trees, this hard-wood multi-branch perch mimics the natural forest habitat. Varies in texture and width to exercise foot muscles and promote nail trimming.",
    specs: {
      material: "Java Wood (Natural Branch)",
      length: "18 - 24 inches",
      attachment: "Dual Steel Washers & Wingnut",
      benefits: "Foot Health & Enrichment",
      cleaning: "Washable / Durable"
    }
  },
  {
    id: "acc-swing-toy",
    name: "Interactive Wooden Swing & Toy Set",
    category: "accessories",
    categoryLabel: "Accessories & Supplies",
    price: 1800,
    priceFormatted: "Rs. 1,800",
    image: "https://source.unsplash.com/featured/800x600/?bird-toy,parrot-toy,swing-toy",
    badge: "New Arrival",
    desc: "An engaging combination of a wooden swing arch, colored logs, cotton rope, and safe stainless steel bells. Offers mental stimulation and prevents boredom-related feather plucking.",
    specs: {
      material: "Pine Wood & Cotton Rope",
      height: "12 inches",
      safety: "100% Non-toxic Dyes",
      target: "Parrots & Cockatiels",
      metal: "Stainless Steel Hardware"
    }
  }
];

// --- App State ---
let PRODUCTS = [];
let state = {
  cart: [],
  activeCategory: "all",
  searchQuery: "",
  sortBy: "featured",
  theme: "dark",
  currentView: "storefront" // storefront or admin
};

// --- Load & Save Products (CRUD Helpers) ---
function normalizeProductData(products) {
  return products.map((product, index) => {
    const normalized = { ...product };
    if (!normalized.id) {
      normalized.id = `product-${index}-${Date.now()}`;
    }
    if (!normalized.categoryLabel) {
      normalized.categoryLabel = normalized.category === "parrots" ? "Exotic Parrots" : "Accessories & Supplies";
    }
    if (!normalized.priceFormatted || normalized.priceFormatted.trim() === "") {
      normalized.priceFormatted = formatCurrency(normalized.price || 0);
    }
    if (!normalized.image || typeof normalized.image !== "string" || normalized.image.trim() === "") {
      const imageQuery = normalized.name ? normalized.name.replace(/[^a-zA-Z0-9]+/g, ",") : normalized.category;
      normalized.image = `https://source.unsplash.com/featured/800x600/?${encodeURIComponent(imageQuery)}`;
    }
    return normalized;
  });
}

function loadProducts() {
  const saved = localStorage.getItem("ipw_products");
  const savedVersion = localStorage.getItem("ipw_products_version");
  if (saved && Number(savedVersion) === PRODUCT_DATA_VERSION) {
    try {
      PRODUCTS = normalizeProductData(JSON.parse(saved));
      saveProducts();
    } catch (e) {
      PRODUCTS = normalizeProductData([...DEFAULT_PRODUCTS]);
      saveProducts();
      localStorage.setItem("ipw_products_version", PRODUCT_DATA_VERSION);
    }
  } else {
    PRODUCTS = normalizeProductData([...DEFAULT_PRODUCTS]);
    saveProducts();
    localStorage.setItem("ipw_products_version", PRODUCT_DATA_VERSION);
  }
}

function saveProducts() {
  localStorage.setItem("ipw_products", JSON.stringify(PRODUCTS));
}

// --- Theme Settings Initialize ---
function initTheme() {
  const savedTheme = localStorage.getItem("ipw_theme");
  if (savedTheme) {
    state.theme = savedTheme;
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    state.theme = "light";
  }
  document.documentElement.setAttribute("data-theme", state.theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const themeBtn = document.getElementById("theme-toggle");
  if (!themeBtn) return;
  if (state.theme === "light") {
    themeBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
      </svg>
    `; // Moon Icon
  } else {
    themeBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v2"/><path d="M12 20v2"/>
        <path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/>
        <path d="M2 12h2"/><path d="M20 12h2"/>
        <path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
      </svg>
    `; // Sun Icon
  }
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", state.theme);
  localStorage.setItem("ipw_theme", state.theme);
  updateThemeIcon();
  showToast(`Switched to ${state.theme === "dark" ? "Dark" : "Light"} Mode`);
}

// --- Cart Operations ---
function loadCart() {
  const savedCart = localStorage.getItem("ipw_cart");
  if (savedCart) {
    try {
      state.cart = JSON.parse(savedCart);
      updateCartUI();
    } catch (e) {
      state.cart = [];
    }
  }
}

function saveCart() {
  localStorage.setItem("ipw_cart", JSON.stringify(state.cart));
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const cartItem = state.cart.find(item => item.id === productId);
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added ${product.name} to Cart`);
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
}

function updateQuantity(productId, amount) {
  const cartItem = state.cart.find(item => item.id === productId);
  if (!cartItem) return;

  cartItem.quantity += amount;
  if (cartItem.quantity <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
    updateCartUI();
  }
}

function clearCart() {
  state.cart = [];
  saveCart();
  updateCartUI();
}

// Subtotal calculations
function getCartTotal() {
  return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function getCartCount() {
  return state.cart.reduce((count, item) => count + item.quantity, 0);
}

function formatCurrency(value) {
  return "Rs. " + value.toLocaleString("en-PK");
}

function updateCartUI() {
  const cartBadge = document.getElementById("cart-count-badge");
  const cartItemsContainer = document.getElementById("cart-drawer-items");
  const cartSubtotal = document.getElementById("cart-subtotal");
  const cartCountText = document.getElementById("cart-count-text");

  const count = getCartCount();
  if (cartBadge) {
    if (count > 0) {
      cartBadge.style.display = "flex";
      cartBadge.textContent = count;
    } else {
      cartBadge.style.display = "none";
    }
  }
  if (cartCountText) {
    cartCountText.textContent = `(${count})`;
  }

  // Clear container
  if (!cartItemsContainer) return;
  cartItemsContainer.innerHTML = "";

  if (state.cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
        </svg>
        <p>Your shopping cart is empty</p>
      </div>
    `;
    if (cartSubtotal) cartSubtotal.textContent = formatCurrency(0);
    return;
  }

  state.cart.forEach(item => {
    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";
    itemEl.innerHTML = `
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}" onerror="this.src='https://placehold.co/100x100?text=Product'">
      </div>
      <div class="cart-item-details">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-price">${formatCurrency(item.price)}</div>
        <div class="cart-item-controls">
          <div class="quantity-selector">
            <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
            <span class="quantity-val">${item.quantity}</span>
            <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
          </div>
          <button class="btn-cart-remove" onclick="removeFromCart('${item.id}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
            </svg>
          </button>
        </div>
      </div>
    `;
    cartItemsContainer.appendChild(itemEl);
  });

  if (cartSubtotal) cartSubtotal.textContent = formatCurrency(getCartTotal());
}

// --- Dynamic Catalog Rendering ---
function renderCatalog() {
  const productsGrid = document.getElementById("products-grid");
  if (!productsGrid) return;

  // Filter products
  let filtered = PRODUCTS.filter(p => {
    // Category check
    if (state.activeCategory !== "all" && p.category !== state.activeCategory) {
      return false;
    }
    // Search check
    if (state.searchQuery.trim() !== "") {
      const q = state.searchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchDesc = p.desc.toLowerCase().includes(q);
      const matchCategory = p.categoryLabel.toLowerCase().includes(q);
      return matchName || matchDesc || matchCategory;
    }
    return true;
  });

  // Sort products
  if (state.sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === "name-asc") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    // Featured (default array order)
  }

  // Clear grid
  productsGrid.innerHTML = "";

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div class="no-results">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block; margin:0 auto 16px auto; color:var(--text-muted);">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
        </svg>
        <h3>No products found</h3>
        <p>Try refining your search keyword or change the filter category.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    
    let badgeClass = p.category;
    let badgeMarkup = p.badge ? `<span class="product-badge ${badgeClass}">${p.badge}</span>` : "";

    card.innerHTML = `
      <div class="product-image-container" onclick="openProductDetail('${p.id}')">
        <img src="${p.image}" alt="${p.name}" onerror="this.src='https://placehold.co/400x350?text=${encodeURIComponent(p.name)}'">
        ${badgeMarkup}
        <button class="product-details-link" title="Quick View" onclick="event.stopPropagation(); openProductDetail('${p.id}')">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          </svg>
        </button>
      </div>
      <div class="product-info">
        <span class="product-category">${p.categoryLabel}</span>
        <h4 class="product-title">${p.name}</h4>
        <p class="product-meta-desc">${p.desc}</p>
        <div class="product-card-footer">
          <span class="product-price">${formatCurrency(p.price)}</span>
          <button class="btn-add-cart" onclick="addToCart('${p.id}')" title="Add to Cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
            </svg>
          </button>
        </div>
      </div>
    `;
    productsGrid.appendChild(card);
  });
}

// --- Product Detail Modal ---
function openProductDetail(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const detailModal = document.getElementById("product-detail-modal");
  if (!detailModal) return;
  const modalContentContainer = detailModal.querySelector(".modal-content");

  // Render specs list dynamically
  let specsHtml = "";
  if (product.specs) {
    for (const [key, value] of Object.entries(product.specs)) {
      const label = key.charAt(0).toUpperCase() + key.slice(1);
      specsHtml += `
        <div class="spec-item">
          <div class="spec-label">${label}</div>
          <div class="spec-value">${value}</div>
        </div>
      `;
    }
  }

  modalContentContainer.innerHTML = `
    <button class="detail-modal-close" onclick="closeModal('product-detail-modal')" title="Close">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
      </svg>
    </button>
    <div class="detail-modal-layout">
      <div class="detail-modal-image">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://placehold.co/500x500?text=${encodeURIComponent(product.name)}'">
      </div>
      <div class="detail-modal-info">
        <span class="detail-modal-category">${product.categoryLabel}</span>
        <h3 class="detail-modal-title">${product.name}</h3>
        <div class="detail-modal-price">${formatCurrency(product.price)}</div>
        <p class="detail-modal-desc">${product.desc}</p>
        
        <div class="specs-grid" style="display:${specsHtml ? 'grid' : 'none'};">
          ${specsHtml}
        </div>
        
        <div class="detail-modal-actions" style="margin-top:auto;">
          <button class="btn-add" onclick="addToCart('${product.id}'); closeModal('product-detail-modal')">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
            </svg>
            Add to Shopping Cart
          </button>
        </div>
      </div>
    </div>
  `;

  detailModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// --- Cart Drawer Toggle ---
function toggleCartDrawer(open) {
  const overlay = document.getElementById("cart-drawer-overlay");
  if (!overlay) return;
  if (open) {
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  } else {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// --- Checkout Modal ---
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast("Please add items to your cart first!");
    return;
  }
  
  toggleCartDrawer(false);

  const checkoutModal = document.getElementById("checkout-modal");
  const checkoutTotalsContainer = document.getElementById("checkout-totals-summary");
  if (!checkoutModal || !checkoutTotalsContainer) return;
  
  const subtotal = getCartTotal();
  const shipping = subtotal > 15000 ? 0 : 350; // Free shipping above 15,000 PKR
  const total = subtotal + shipping;

  checkoutTotalsContainer.innerHTML = `
    <div class="checkout-totals-row">
      <span>Subtotal</span>
      <span>${formatCurrency(subtotal)}</span>
    </div>
    <div class="checkout-totals-row">
      <span>Safe Delivery / Shipping</span>
      <span>${shipping === 0 ? "Free Shipping" : formatCurrency(shipping)}</span>
    </div>
    <div class="checkout-totals-row">
      <span>Total Amount</span>
      <span>${formatCurrency(total)}</span>
    </div>
  `;

  checkoutModal.classList.add("open");
  document.body.style.overflow = "hidden";
}

// --- Handle Order Submission ---
function submitOrder(event) {
  event.preventDefault();

  const name = document.getElementById("customer-name").value;
  const phone = document.getElementById("customer-phone").value;
  const city = document.getElementById("customer-city").value;
  const address = document.getElementById("customer-address").value;
  const notes = document.getElementById("customer-notes").value;

  if (!name || !phone || !city || !address) {
    showToast("Please fill all required shipping fields");
    return;
  }

  const subtotal = getCartTotal();
  const shipping = subtotal > 15000 ? 0 : 350;
  const grandTotal = subtotal + shipping;

  // Generate Unique Order ID
  const orderId = "PP-" + Math.floor(100000 + Math.random() * 900000);

  // Close Checkout Modal
  closeModal("checkout-modal");

  // Show Invoice / Success Modal
  const successModal = document.getElementById("success-modal");
  const invoiceDetails = document.getElementById("invoice-details");
  if (!successModal || !invoiceDetails) return;

  let itemsInvoiceHtml = "";
  state.cart.forEach(item => {
    itemsInvoiceHtml += `
      <div class="invoice-item-row">
        <span>${item.name} (x${item.quantity})</span>
        <span>${formatCurrency(item.price * item.quantity)}</span>
      </div>
    `;
  });

  invoiceDetails.innerHTML = `
    <div class="invoice-header">
      <span>Order ID: <strong>${orderId}</strong></span>
      <span>Date: ${new Date().toLocaleDateString()}</span>
    </div>
    <div class="invoice-items">
      ${itemsInvoiceHtml}
    </div>
    <div class="invoice-item-row" style="margin-top: 10px; border-top: 1px solid var(--border-color); padding-top: 8px;">
      <span>Shipping Fee</span>
      <span>${shipping === 0 ? "Free" : formatCurrency(shipping)}</span>
    </div>
    <div class="invoice-totals">
      <span>Grand Total</span>
      <span>${formatCurrency(grandTotal)}</span>
    </div>
  `;

  successModal.classList.add("open");
  document.body.style.overflow = "hidden";

  // Build WhatsApp Redirect URL (WhatsApp number: 03435097981 -> 923435097981)
  const whatsappButton = document.getElementById("btn-whatsapp-confirm");
  
  let message = `*✨ ISLAMABAD PETS WORLD — NEW ORDER ✨*\n\n`;
  message += `*Order ID:* ${orderId}\n`;
  message += `*Customer:* ${name}\n`;
  message += `*Phone:* ${phone}\n`;
  message += `*Location:* ${city}, Pakistan\n`;
  message += `*Address:* ${address}\n`;
  if (notes) {
    message += `*Special Instructions:* ${notes}\n`;
  }
  message += `\n*🛒 ITEMS ORDERED:*\n`;
  
  state.cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} - *x${item.quantity}* (${formatCurrency(item.price * item.quantity)})\n`;
  });
  
  message += `\n*Shipping:* ${shipping === 0 ? "Free" : formatCurrency(shipping)}`;
  message += `\n*Total Amount:* *${formatCurrency(grandTotal)}*\n\n`;
  message += `Please confirm my order and share shipping status. Thank you!`;

  const encodedText = encodeURIComponent(message);
  const whatsappNumber = "923435097981"; 
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

  whatsappButton.onclick = () => {
    window.open(whatsappUrl, "_blank");
    clearCart();
    closeModal("success-modal");
    showToast("Opening WhatsApp... Order Placed!");
  };

  const successCloseBtn = document.getElementById("btn-success-close");
  if (successCloseBtn) {
    successCloseBtn.onclick = () => {
      clearCart();
      closeModal("success-modal");
      showToast("Order completed! Cart cleared.");
    };
  }
}

// --- Toast Notifications System ---
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Remove toast after 3.5s
  setTimeout(() => {
    toast.style.animation = "slideInLeft 0.3s reverse forwards";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3200);
}

// --- VIEW NAVIGATION STATE ---
function switchView(viewName) {
  state.currentView = viewName;
  const storefrontSections = [
    document.querySelector(".hero"),
    document.querySelector(".categories-sec"),
    document.querySelector(".catalog-sec"),
    document.querySelector("#care")
  ];
  const adminSection = document.getElementById("admin-section");
  const navLinks = document.querySelectorAll(".nav-links a");

  // Deactivate all nav links
  navLinks.forEach(link => link.classList.remove("active"));

  if (viewName === "admin") {
    // Hide storefront sections
    storefrontSections.forEach(sec => { if (sec) sec.style.display = "none"; });
    // Show admin section
    if (adminSection) adminSection.style.display = "block";
    // Mark admin link active
    const adminLink = document.getElementById("nav-admin-btn");
    if (adminLink) adminLink.classList.add("active");
    
    // Refresh admin tables
    renderAdminProducts();
  } else {
    // Show storefront sections
    storefrontSections.forEach(sec => {
      if (sec) {
        // Reset display type
        if (sec.classList.contains("hero") || sec.classList.contains("catalog-sec") || sec.classList.contains("categories-sec")) {
          sec.style.display = "";
        } else {
          sec.style.display = "block";
        }
      }
    });
    // Hide admin section
    if (adminSection) adminSection.style.display = "none";
    
    // Set active link in navbar
    if (viewName === "home") {
      const homeLink = document.getElementById("nav-home-btn");
      if (homeLink) homeLink.classList.add("active");
    } else if (viewName === "parrots") {
      const parrotLink = document.getElementById("nav-parrots-btn");
      if (parrotLink) parrotLink.classList.add("active");
    } else if (viewName === "accessories") {
      const accLink = document.getElementById("nav-acc-btn");
      if (accLink) accLink.classList.add("active");
    }
  }
}

// Helper to filter from external cards
function filterCategory(catName) {
  state.activeCategory = catName;
  
  // Update storefront category pills active styling
  const pills = document.querySelectorAll(".filter-pill");
  pills.forEach(pill => {
    if (pill.getAttribute("data-category") === catName) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });

  switchView(catName === "all" ? "home" : catName);
  renderCatalog();
}

// --- ADMIN DASHBOARD CRUD AND CONTROLS ---

// Switch tabs inside Admin Panel (Manage vs Add)
function switchAdminTab(tabName) {
  const btnManage = document.getElementById("btn-tab-manage");
  const btnAdd = document.getElementById("btn-tab-add");
  const tabManageContent = document.getElementById("admin-tab-manage-content");
  const tabAddContent = document.getElementById("admin-tab-add-content");

  if (!btnManage || !btnAdd || !tabManageContent || !tabAddContent) return;

  if (tabName === "manage") {
    btnManage.classList.add("active");
    btnManage.style.color = "var(--accent)";
    btnManage.style.backgroundColor = "var(--accent-light)";

    btnAdd.classList.remove("active");
    btnAdd.style.color = "var(--text-secondary)";
    btnAdd.style.backgroundColor = "transparent";

    tabManageContent.style.display = "block";
    tabAddContent.style.display = "none";
    
    // Refresh product list
    renderAdminProducts();
  } else {
    btnAdd.classList.add("active");
    btnAdd.style.color = "var(--accent)";
    btnAdd.style.backgroundColor = "var(--accent-light)";

    btnManage.classList.remove("active");
    btnManage.style.color = "var(--text-secondary)";
    btnManage.style.backgroundColor = "transparent";

    tabManageContent.style.display = "none";
    tabAddContent.style.display = "block";
  }
}

// Toggle inputs for parrot specs vs accessory specs
function toggleFormSpecs(category) {
  const parrotBlock = document.getElementById("specs-parrot-block");
  const accBlock = document.getElementById("specs-acc-block");
  if (!parrotBlock || !accBlock) return;

  if (category === "parrots") {
    parrotBlock.style.display = "block";
    accBlock.style.display = "none";
  } else {
    parrotBlock.style.display = "none";
    accBlock.style.display = "block";
  }
}

// --- Image Upload: FileReader + Canvas Compression ---
function setImgUploadPreview(src) {
  const preview = document.getElementById("prod-image-preview");
  const placeholder = document.getElementById("img-upload-placeholder");
  const changeBtn = document.getElementById("img-change-btn");
  const hiddenInput = document.getElementById("prod-image");
  const zone = document.getElementById("img-upload-zone");

  if (!src) return;

  hiddenInput.value = src;
  if (preview) {
    preview.src = src;
    preview.style.display = "block";
  }
  if (placeholder) placeholder.style.display = "none";
  if (changeBtn) changeBtn.style.display = "inline-block";
  if (zone) {
    zone.style.borderColor = "var(--accent)";
    zone.style.backgroundColor = "var(--accent-light)";
  }
}

function clearImgUploadPreview() {
  const preview = document.getElementById("prod-image-preview");
  const placeholder = document.getElementById("img-upload-placeholder");
  const changeBtn = document.getElementById("img-change-btn");
  const hiddenInput = document.getElementById("prod-image");
  const fileInput = document.getElementById("prod-image-file");
  const zone = document.getElementById("img-upload-zone");

  if (hiddenInput) hiddenInput.value = "";
  if (fileInput) fileInput.value = "";
  if (preview) { preview.src = ""; preview.style.display = "none"; }
  if (placeholder) placeholder.style.display = "block";
  if (changeBtn) changeBtn.style.display = "none";
  if (zone) {
    zone.style.borderColor = "";
    zone.style.backgroundColor = "";
  }
}

function compressAndLoadImage(file) {
  const MAX_DIM = 800; // Max width or height in pixels
  const QUALITY = 0.75; // JPEG quality (0 to 1)

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      // Draw onto canvas, scaled down if necessary
      let w = img.width;
      let h = img.height;
      if (w > MAX_DIM || h > MAX_DIM) {
        if (w > h) {
          h = Math.round((h * MAX_DIM) / w);
          w = MAX_DIM;
        } else {
          w = Math.round((w * MAX_DIM) / h);
          h = MAX_DIM;
        }
      }

      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, w, h);

      // Get compressed data URL
      const compressed = canvas.toDataURL("image/jpeg", QUALITY);
      setImgUploadPreview(compressed);
      showToast("Image loaded & compressed successfully!");
    };
    img.onerror = () => showToast("Could not read that image file. Try another.");
    img.src = e.target.result;
  };
  reader.onerror = () => showToast("File read error. Please try again.");
  reader.readAsDataURL(file);
}

function handleFileDrop(e) {
  e.preventDefault();
  e.stopPropagation();
  const zone = document.getElementById("img-upload-zone");
  if (zone) zone.style.borderColor = "";
  const files = e.dataTransfer ? e.dataTransfer.files : null;
  if (files && files[0]) {
    if (!files[0].type.startsWith("image/")) {
      showToast("Please drop an image file (JPG, PNG, WEBP).");
      return;
    }
    compressAndLoadImage(files[0]);
  }
}

// Set a preset asset path and preview it
function setImgPreset(path) {
  setImgUploadPreview(path);
  showToast("Stock image selected!");
}


// Reset the listing form fields (clear form and preview)
function resetAdminForm() {
  const form = document.getElementById("admin-product-form");
  if (form) form.reset();

  const editId = document.getElementById("edit-product-id");
  if (editId) editId.value = "";

  clearImgUploadPreview();

  const cancelBtn = document.getElementById("btn-cancel-edit");
  if (cancelBtn) cancelBtn.style.display = "none";

  const formTitle = document.getElementById("admin-form-title");
  if (formTitle) formTitle.textContent = "List a New Product / Parrot";

  const saveBtn = document.getElementById("btn-save-prod");
  if (saveBtn) saveBtn.textContent = "Save Product";

  toggleFormSpecs("parrots");
}


// Save or Update Product inside Admin Panel
function handleAdminFormSubmit(e) {
  e.preventDefault();

  const editId = document.getElementById("edit-product-id").value;
  const name = document.getElementById("prod-name").value.trim();
  const category = document.getElementById("prod-category").value;
  const price = parseFloat(document.getElementById("prod-price").value);
  const badge = document.getElementById("prod-badge").value;
  const image = document.getElementById("prod-image").value;
  const desc = document.getElementById("prod-desc").value.trim();

  if (!name || isNaN(price) || !image || !desc) {
    showToast("Please fill all required fields");
    return;
  }

  // Build specs object based on category
  let specs = {};
  if (category === "parrots") {
    specs = {
      scientific: document.getElementById("spec-scientific").value || "N/A",
      age: document.getElementById("spec-age").value || "N/A",
      temperament: document.getElementById("spec-temperament").value || "N/A",
      lifespan: document.getElementById("spec-lifespan").value || "N/A",
      diet: document.getElementById("spec-diet").value || "N/A"
    };
  } else {
    specs = {
      brand: document.getElementById("spec-brand").value || "N/A",
      weight: document.getElementById("spec-weight").value || "N/A",
      benefits: document.getElementById("spec-benefits").value || "N/A",
      origin: document.getElementById("spec-origin").value || "N/A",
      expiry: document.getElementById("spec-expiry").value || "N/A"
    };
  }

  const categoryLabel = category === "parrots" ? "Exotic Parrots" : "Accessories & Supplies";

  if (editId) {
    const idx = PRODUCTS.findIndex(p => p.id === editId);
    if (idx !== -1) {
      PRODUCTS[idx] = {
        id: editId,
        name,
        category,
        categoryLabel,
        price,
        priceFormatted: formatCurrency(price),
        image,
        badge,
        desc,
        specs
      };
      saveProducts();
      showToast(`Updated "${name}" successfully!`);
    }
  } else {
    const newId = `${category}-custom-${Date.now()}`;
    const newProduct = {
      id: newId,
      name,
      category,
      categoryLabel,
      price,
      priceFormatted: formatCurrency(price),
      image,
      badge,
      desc,
      specs
    };
    PRODUCTS.push(newProduct);
    saveProducts();
    showToast(`Added "${name}" to store listings!`);
  }

  resetAdminForm();
  renderCatalog();
  switchAdminTab("manage");
}

// Edit product handler (populate form for editing)
function editAdminProduct(id) {
  const p = PRODUCTS.find(prod => prod.id === id);
  if (!p) return;

  document.getElementById("edit-product-id").value = p.id;
  document.getElementById("prod-name").value = p.name;
  document.getElementById("prod-category").value = p.category;
  document.getElementById("prod-price").value = p.price;
  document.getElementById("prod-badge").value = p.badge || "";
  document.getElementById("prod-image").value = p.image;
  document.getElementById("prod-desc").value = p.desc;

  // Preview image (handles both dataURL and path)
  setImgUploadPreview(p.image);

  // Toggle specifications category view
  toggleFormSpecs(p.category);

  // Populate specs
  if (p.category === "parrots") {
    document.getElementById("spec-scientific").value = p.specs.scientific || "";
    document.getElementById("spec-age").value = p.specs.age || "";
    document.getElementById("spec-temperament").value = p.specs.temperament || "";
    document.getElementById("spec-lifespan").value = p.specs.lifespan || "";
    document.getElementById("spec-diet").value = p.specs.diet || "";
  } else {
    document.getElementById("spec-brand").value = p.specs.brand || "";
    document.getElementById("spec-weight").value = p.specs.weight || "";
    document.getElementById("spec-benefits").value = p.specs.benefits || "";
    document.getElementById("spec-origin").value = p.specs.origin || "";
    document.getElementById("spec-expiry").value = p.specs.expiry || "";
  }

  // Change heading title & show cancel
  const formTitle = document.getElementById("admin-form-title");
  if (formTitle) formTitle.textContent = `Edit Product: ${p.name}`;
  const saveBtn = document.getElementById("btn-save-prod");
  if (saveBtn) saveBtn.textContent = "Save Changes";
  const cancelBtn = document.getElementById("btn-cancel-edit");
  if (cancelBtn) cancelBtn.style.display = "inline-block";

  // Switch to Form Tab
  switchAdminTab("add");
}

// Delete product CRUD handler
function deleteAdminProduct(id) {
  const p = PRODUCTS.find(prod => prod.id === id);
  if (!p) return;

  if (confirm(`Are you sure you want to delete the product "${p.name}"?`)) {
    PRODUCTS = PRODUCTS.filter(prod => prod.id !== id);
    saveProducts();
    renderCatalog();
    renderAdminProducts();
    showToast(`Product "${p.name}" deleted.`);
  }
}

// Draw lists of items inside admin manager
function renderAdminProducts() {
  const container = document.getElementById("admin-products-list");
  if (!container) return;

  container.innerHTML = "";

  // Update statistics values
  const countTotal = PRODUCTS.length;
  const countParrots = PRODUCTS.filter(p => p.category === "parrots").length;
  const countAccessories = PRODUCTS.filter(p => p.category === "accessories").length;

  const statTotal = document.getElementById("admin-stat-total");
  const statParrots = document.getElementById("admin-stat-parrots");
  const statAccessories = document.getElementById("admin-stat-accessories");

  if (statTotal) statTotal.textContent = countTotal;
  if (statParrots) statParrots.textContent = countParrots;
  if (statAccessories) statAccessories.textContent = countAccessories;

  if (PRODUCTS.length === 0) {
    container.innerHTML = `
      <tr>
        <td colspan="6" style="padding: 30px; text-align: center; color: var(--text-secondary);">
          No products listed yet. Go to "Add New Product" tab to list your first item.
        </td>
      </tr>
    `;
    return;
  }

  PRODUCTS.forEach(p => {
    const tr = document.createElement("tr");
    tr.style.borderBottom = "1px solid var(--border-color)";
    
    tr.innerHTML = `
      <td style="padding: 16px 24px;">
        <img src="${p.image}" alt="${p.name}" onerror="this.src='https://placehold.co/50x50?text=Pet'" style="width: 44px; height: 44px; border-radius: var(--radius-sm); object-fit: cover; border: 1px solid var(--border-color);">
      </td>
      <td style="padding: 16px 24px; font-weight: 600;">${p.name}</td>
      <td style="padding: 16px 24px; font-size: 14px; color: var(--text-secondary); text-transform: capitalize;">${p.category}</td>
      <td style="padding: 16px 24px; font-weight: 700; color: var(--accent);">${formatCurrency(p.price)}</td>
      <td style="padding: 16px 24px;">
        <span style="font-size: 12px; font-weight:700; padding: 2px 8px; border-radius: 4px; background-color: var(--bg-tertiary); display: ${p.badge ? 'inline-block' : 'none'};">${p.badge || ""}</span>
      </td>
      <td style="padding: 16px 24px;">
        <div style="display: flex; gap: 8px;">
          <button class="btn-preset-chip" onclick="editAdminProduct('${p.id}')" style="background-color: var(--accent-light); color: var(--accent); padding: 6px 12px; border-radius: var(--radius-sm); font-size: 13px; font-weight: 600;">Edit</button>
          <button class="btn-preset-chip" onclick="deleteAdminProduct('${p.id}')" style="background-color: rgba(239, 68, 68, 0.1); color: #ef4444; padding: 6px 12px; border-radius: var(--radius-sm); font-size: 13px; font-weight: 600;">Delete</button>
        </div>
      </td>
    `;
    container.appendChild(tr);
  });
}

// --- Bind Event Listeners ---
function bindEvents() {
  // Theme toggle
  const themeToggleBtn = document.getElementById("theme-toggle");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme);
  }

  // Category filter pills on Storefront
  const pills = document.querySelectorAll(".filter-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", (e) => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      state.activeCategory = pill.getAttribute("data-category");
      renderCatalog();
    });
  });

  // Search input on Storefront
  const searchInput = document.getElementById("catalog-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderCatalog();
    });
  }

  // Sorting drop-down on Storefront
  const sortSelect = document.getElementById("catalog-sort");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderCatalog();
    });
  }

  // Checkout form submit
  const checkForm = document.getElementById("checkout-form");
  if (checkForm) {
    checkForm.addEventListener("submit", submitOrder);
  }

  // --- Nav links routing links ---
  const homeBtn = document.getElementById("nav-home-btn");
  const logoBtn = document.getElementById("nav-logo-btn");
  const parrotsBtn = document.getElementById("nav-parrots-btn");
  const accBtn = document.getElementById("nav-acc-btn");
  const adminBtn = document.getElementById("nav-admin-btn");
  const backBtn = document.getElementById("admin-back-btn");

  if (homeBtn) homeBtn.onclick = () => switchView("home");
  if (logoBtn) logoBtn.onclick = (e) => { e.preventDefault(); switchView("home"); };
  if (parrotsBtn) parrotsBtn.onclick = () => filterCategory("parrots");
  if (accBtn) accBtn.onclick = () => filterCategory("accessories");
  
  if (adminBtn) {
    adminBtn.onclick = (e) => {
      e.preventDefault();
      // Secure login with simple passcode prompt
      const code = prompt("Enter Admin Passcode to view dashboard:", "");
      if (code === "adil2345") {
        switchView("admin");
        showToast("Logged in to Admin Dashboard.");
      } else {
        alert("Access Denied. Invalid Passcode.");
      }
    };
  }
  
  if (backBtn) backBtn.onclick = () => switchView("home");
  // Admin Add button in header (new)
  const adminAddBtn = document.getElementById("admin-add-btn");
  if (adminAddBtn) adminAddBtn.onclick = () => switchAdminTab("add");

  // --- Category card home links ---
  const homeCardParrots = document.getElementById("cat-card-parrots");
  const homeCardAcc = document.getElementById("cat-card-acc");

  if (homeCardParrots) {
    homeCardParrots.onclick = () => {
      filterCategory("parrots");
      window.location.hash = "catalog";
    };
  }
  if (homeCardAcc) {
    homeCardAcc.onclick = () => {
      filterCategory("accessories");
      window.location.hash = "catalog";
    };
  }

  // --- Admin tabs handlers ---
  const btnManage = document.getElementById("btn-tab-manage");
  const btnAdd = document.getElementById("btn-tab-add");
  if (btnManage) btnManage.onclick = () => switchAdminTab("manage");
  if (btnAdd) btnAdd.onclick = () => switchAdminTab("add");

  // Form specs toggling on category change
  const selectCat = document.getElementById("prod-category");
  if (selectCat) {
    selectCat.addEventListener("change", (e) => {
      toggleFormSpecs(e.target.value);
    });
  }

  // Admin form submit handler
  const adminForm = document.getElementById("admin-product-form");
  if (adminForm) {
    adminForm.addEventListener("submit", handleAdminFormSubmit);
  }

  // File input change (select image from file explorer)
  const fileInput = document.getElementById("prod-image-file");
  if (fileInput) {
    fileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files[0]) {
        compressAndLoadImage(e.target.files[0]);
      }
    });
  }
}

// --- Initialize App ---
document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
  initTheme();
  loadCart();
  renderCatalog();
  bindEvents();
});
