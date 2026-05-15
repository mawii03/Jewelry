const products = [
  { id: 1, name: 'Product 1 - Elegant Necklace', price: 699, oldPrice: 899, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80', sale: true },
  { id: 2, name: 'Product 2 - Gold Bracelet', price: 599, oldPrice: 799, image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=800&q=80', sale: true },
  { id: 3, name: 'Silver Ring', price: 399, oldPrice: 0, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80', sale: false },
  { id: 4, name: 'Pearl Earrings', price: 499, oldPrice: 699, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80', sale: true },
  { id: 5, name: 'Heart Pendant', price: 459, oldPrice: 0, image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80', sale: false },
  { id: 6, name: 'Luxury Jewelry Set', price: 1299, oldPrice: 1599, image: 'https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?auto=format&fit=crop&w=800&q=80', sale: true }
];

let cart = [];

function showProducts() {
  const list = document.getElementById('productList');
  list.innerHTML = products.map(p => `
    <div class="card">
      ${p.sale ? '<div class="badge">SALE</div>' : ''}
      <img src="${p.image}" alt="${p.name}">
      <div class="card-content">
        <h3>${p.name}</h3>
        <p class="price">NT$${p.price} ${p.oldPrice ? `<span class="old-price">NT$${p.oldPrice}</span>` : ''}</p>
        <button class="add-btn" onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    </div>
  `).join('');
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const item = cart.find(i => i.id === id);
  if (item) item.qty++;
  else cart.push({ ...product, qty: 1 });
  renderCart();
  document.getElementById('cartPanel').classList.add('open');
}

function removeItem(id) {
  cart = cart.filter(item => item.id !== id);
  renderCart();
}

function toggleCart() {
  document.getElementById('cartPanel').classList.toggle('open');
}

function renderCart() {
  const cartItems = document.getElementById('cartItems');
  const studentChecked = document.getElementById('studentDiscount').checked;
  let subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const hasProduct1 = cart.some(item => item.id === 1);
  const hasProduct2 = cart.some(item => item.id === 2);
  let promoDiscount = hasProduct1 && hasProduct2 ? Math.round(subtotal * 0.15) : 0;
  let afterPromo = subtotal - promoDiscount;
  let studentDiscount = studentChecked ? Math.round(afterPromo * 0.10) : 0;
  let total = afterPromo - studentDiscount;

  cartItems.innerHTML = cart.length ? cart.map(item => `
    <div class="cart-item">
      <div>
        <b>${item.name}</b><br>
        NT$${item.price} x ${item.qty}
      </div>
      <button class="remove" onclick="removeItem(${item.id})">Remove</button>
    </div>
  `).join('') : '<p>Your cart is empty.</p>';

  document.getElementById('cartCount').textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('subtotal').textContent = subtotal;
  document.getElementById('promoDiscount').textContent = promoDiscount;
  document.getElementById('studentDiscountAmount').textContent = studentDiscount;
  document.getElementById('total').textContent = total;
}

function checkout() {
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();

  if (!cart.length) return alert('Your cart is empty.');
  if (!name || !phone || !address) return alert('Please fill in your full information.');

  alert(`Thank you, ${name}! Your order has been placed. We will contact you soon.`);
  cart = [];
  renderCart();
  document.getElementById('name').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('address').value = '';
}

showProducts();
renderCart();
