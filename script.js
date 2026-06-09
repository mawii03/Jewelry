// HOW TO USE YOUR OWN PRODUCT IMAGES:
// 1. Open the folder: assets/products/
// 2. Replace product1.svg, product2.svg, product3.svg, etc. with your own images.
// 3. If your image is JPG/PNG, change the image name below, for example:
//    image: 'assets/products/my-necklace.jpg'
// This changes ONLY the product image.

const products = [
{id:1,name:'Classic Round Diamond Necklace',
  price:299,
  oldPrice:899,
  image:'assets/products/1.png',
  sale:true,
  description:'A classic round diamond necklace featuring a minimalist and elegant design that shines in every moment. Its timeless beauty and refined appearance make it suitable for daily wear and special occasions. A perfect combination of simplicity and luxury.',
  category:'Necklace',
  material:'Gold-tone Chain with Diamond/Crystal Center Stone',
  style:'Minimalist • Elegant • Luxury • Timeless',
  occasion:'Daily Wear • Anniversary • Gift • Special Events • Fashion Styling'},

  {id: 2, name: 'Luxury Diamond Tassel Necklace', 
  price: 299, 
  oldPrice: 799, 
  image: 'assets/products/2.png', 
  sale: true, 
  description:'The Luxury Diamond Tassel Necklace combines sparkling brilliance with graceful elegance. Featuring a layered tassel design and dazzling diamond accents, it adds timeless beauty and sophistication to every important moment. Designed to make you shine with confidence and charm.',
  category:'Necklace',
  material:'Silver-Tone Metal with High-Quality Diamond/Crystal Embellishments',
  style:'Luxury • Elegant • Classic • Glamorous',
  occasion:'Wedding • Anniversary • Banquet • Evening Party • Special Events • Gift Giving • Formal Occasions'},

{id: 3, name: 'V-Shaped Diamond Necklace', 
  price: 299, 
  oldPrice: 399, 
  image: 'assets/products/3.png', 
  sale: true, 
  description:'The V-Shaped Diamond Necklace features a sleek and elegant V-shaped design adorned with sparkling diamonds. Combining minimalist lines with timeless beauty, this necklace enhances the neckline and adds a touch of sophistication to every look. Designed to showcase your unique charm and brilliance in every moment.',
  category:'Necklace',
  material:'Rose Gold-Plated Metal with High-Quality Diamond/Crystal Accents',
  style:'Elegant • Minimalist • Modern • Luxury',
  occasion:'Daily Wear • Anniversary • Date Night • Gift Giving • Formal Events • Special Occasions'},

{id: 4, name: 'Luxury Diamond Pendant Necklace', 
  price: 299, 
  oldPrice: 399, 
  image: 'assets/products/4.png', 
  sale: true, 
  description:'The Luxury Diamond Pendant Necklace showcases brilliant diamonds in a sophisticated and timeless design. Featuring a dazzling round pendant suspended from a sparkling diamond chain, this elegant piece radiates beauty, luxury, and grace. Perfect for enhancing your style and making every moment shine.',
  category:'Necklace',
  material:'Silver-Tone Metal with High-Quality Diamond/Crystal Stones',
  style:'Luxury • Elegant • Classic • Timeless',
  occasion:'Wedding • Anniversary • Engagement • Formal Events • Evening Party • Gift Giving • Special Occasions'},

{id: 5, name: 'Double-Layer Diamond Necklace', 
  price: 299, 
  oldPrice: 499, 
  image: 'assets/products/5.png', 
  sale: true, 
  description:'The Double-Layer Diamond Necklace combines modern elegance with timeless sparkle. Featuring a sophisticated layered design adorned with brilliant diamonds, this necklace creates depth and dimension while enhancing your everyday style. Its refined craftsmanship and versatile look make it the perfect accessory for any occasion.',
  category:'Necklace',
  material:'Gold-Plated Metal with High-Quality Diamond/Crystal Stones',
  style:'Elegant • Modern • Layered • Minimalist • Fashionable',
  occasion:'Daily Wear • Anniversary • Gift Giving • Date Night • Casual Outings • Special Occasions'},

{id: 6, name: 'Classic Teardrop Diamond Necklace', 
  price: 299, 
  oldPrice: 499, 
  image: 'assets/products/6.png', 
  sale: true, 
  description:'The Classic Teardrop Diamond Necklace showcases timeless elegance with a graceful teardrop-shaped diamond pendant. Designed to symbolize purity, beauty, and everlasting love, this exquisite piece radiates brilliance from every angle. Its refined craftsmanship and sophisticated style make it a perfect accessory for both special occasions and everyday elegance.',
  category:'Necklace',
  material:'Silver-Tone Metal with High-Quality Diamond/Crystal Stones',
  style:'Elegant • Classic • Romantic • Luxury • Timeless',
  occasion:'Wedding • Anniversary • Engagement • Gift Giving • Formal Events • Romantic Dates • Special Occasions'},

{id: 7, name: 'Classic Diamond Chain Necklace', 
  price: 299, 
  oldPrice: 499, 
  image: 'assets/products/7.png', 
  sale: true, 
  description:'The Classic Diamond Chain Necklace is a timeless jewelry piece designed to bring elegance and sparkle to everyday life. Featuring a graceful arrangement of brilliant diamonds along a delicate chain, this necklace offers a refined and sophisticated look. Its versatile design makes it perfect for daily wear while adding a touch of luxury to any outfit.',
  category:'Necklace',
  material:'Silver-Tone Metal with High-Quality Diamond/Crystal Stones',
  style:'Classic • Elegant • Minimalist • Timeless • Everyday Luxury',
  occasion:'Daily Wear • Office Wear • Anniversary • Gift Giving • Casual Outings • Formal Events • Special Occasions'},

{id: 8, name: 'Classic Floral Diamond Necklace', 
  price: 299, 
  oldPrice: 499, 
  image: 'assets/products/8.png', 
  sale: true, 
  description:'The Classic Floral Diamond Necklace features a beautiful flower-inspired design crafted with sparkling diamonds. Symbolizing beauty, happiness, and elegance, this exquisite necklace combines timeless charm with modern sophistication. Its radiant floral centerpiece makes it a perfect accessory to enhance your confidence and shine in every special moment.',
  category:'Necklace',
  material:'Rose Gold-Plated Metal with High-Quality Diamond/Crystal Stones',
  style:'Floral • Elegant • Romantic • Luxury • Feminine',
  occasion:'Daily Wear • Anniversary • Birthday Gift • Date Night • Formal Events • Special Occasions'},

{id: 9, name: 'Classic Marquise Diamond Necklace', 
  price: 399, 
  //oldPrice: 499, 
  image: 'assets/products/9.png', 
  sale: false, 
  description:'The Classic Marquise Diamond Necklace features a stunning marquise-cut diamond that symbolizes elegance, confidence, and timeless beauty. Its graceful elongated shape enhances the neckline while reflecting brilliant light from every angle. Crafted with exquisite attention to detail, this sophisticated necklace is designed to make every moment shine with elegance and charm.',
  category:'Necklace',
  material:'Silver-Tone Metal with High-Quality Marquise-Cut Diamond/Crystal Stone',
  style:'Elegant • Classic • Luxury • Sophisticated • Timeless',
  occasion:'Wedding • Engagement • Anniversary • Gift Giving • Formal Events • Evening Parties • Special Occasions'},

{id: 10, name: 'Classic Square Diamond Necklace', 
  price: 499, 
  //oldPrice: 499, 
  image: 'assets/products/10.png', 
  sale: false, 
  description:'The Classic Square Diamond Necklace combines timeless elegance with modern sophistication. Featuring a brilliant square-shaped diamond centerpiece surrounded by sparkling accent stones, this necklace radiates confidence, beauty, and charm. Its refined design and exceptional craftsmanship make it a perfect accessory for both everyday wear and special occasions.',
  category:'Necklace',
  material:'Silver-Tone Metal with High-Quality Square-Cut Diamond/Crystal Stones',
  style:'Classic • Elegant • Luxury • Modern • Timeless',
  occasion:'Daily Wear • Anniversary • Engagement • Gift Giving • Formal Events • Business Events • Special Occasions'},

{id: 11, name: 'Classic Circle Diamond Necklace', 
  price: 485, 
  //oldPrice: 499, 
  image: 'assets/products/11.png', 
  sale: false, 
  description:'The Classic Circle Diamond Necklace combines timeless elegance with modern simplicity. Featuring a brilliant diamond suspended within a graceful circular frame, this necklace symbolizes eternity, unity, and everlasting beauty. Its refined design and sparkling centerpiece make it a versatile accessory that enhances both everyday outfits and special occasion looks.',
  category:'Necklace',
  material:'Gold-Plated Metal with High-Quality Diamond/Crystal Stone',
  style:'Classic • Elegant • Minimalist • Timeless • Modern',
  occasion:'Daily Wear • Anniversary • Birthday Gift • Wedding • Gift Giving • Formal Events • Special Occasions'},

{id: 12, name: 'Double-Layer Diamond Pendant Necklace', 
  price: 499, 
  //oldPrice: 499, 
  image: 'assets/products/12.png', 
  sale: false, 
  description:'The Double-Layer Diamond Pendant Necklace showcases a sophisticated layered design that adds depth, brilliance, and elegance to any look. Featuring sparkling diamonds delicately arranged across two graceful chains, this necklace enhances your natural beauty while creating a luxurious and fashionable statement. Perfect for expressing confidence, charm, and timeless elegance.',
  category:'Necklace',
  material:'Rose Gold-Plated Metal with High-Quality Diamond/Crystal Stones',
  style:'Layered • Elegant • Luxury • Modern • Timeless',
  occasion:'Daily Wear • Anniversary • Date Night • Gift Giving • Formal Events • Wedding • Special Occasions'},

{id: 13, name: 'V-Shaped Diamond Statement Necklace', 
  price: 699, 
  //oldPrice: 499, 
  image: 'assets/products/13.png', 
  sale: false, 
  description:'The V-Shaped Diamond Statement Necklace features a graceful arrangement of brilliant diamonds forming an elegant V-shaped silhouette. Designed to highlight the neckline and enhance natural beauty, this necklace combines timeless sophistication with modern glamour. Its sparkling diamonds and refined craftsmanship create a luxurious accessory that radiates confidence and elegance in every moment.',
  category:'Necklace',
  material:'Silver-Tone Metal with High-Quality Diamond/Crystal Stones',
  style:'Elegant • V-Shaped • Luxury • Modern • Timeless',
  occasion:'Daily Wear • Anniversary • Date Night • Gift Giving • Formal Events • Wedding • Special Occasions'},

{id: 14, name: 'Eternal Sparkle Solitaire Diamond Necklace', 
  price: 899, 
  //oldPrice: 499, 
  image: 'assets/products/14.png', 
  sale: false, 
  description:'The Eternal Sparkle Solitaire Diamond Necklace embodies simplicity, elegance, and timeless beauty. Featuring a brilliant solitaire diamond pendant suspended from a delicate chain, this classic piece radiates sophistication from every angle.',
  category:'Necklace',
  material:'Silver-Tone Metal with High-Quality Solitaire Diamond/Crystal Stone',
  style:'Classic • Minimalist • Elegant • Timeless • Sophisticated',
  occasion:'Daily Wear • Anniversary • Birthday Gift • Wedding • Engagement • Gift Giving • Special Occasions • Formal Events'},

{id: 15, name: 'Luxury Double-Layer Diamond Necklace', 
  price: 789, 
  //oldPrice: 499, 
  image: 'assets/products/15.png', 
  sale: false, 
  description:'The Luxury Double-Layer Diamond Necklace showcases a sophisticated two-layer design that creates depth, brilliance, and elegance. Adorned with sparkling diamonds along both layers, this exquisite necklace highlights every movement with radiant shine. Its timeless craftsmanship and luxurious appearance make it the perfect statement piece for elevating your style and confidence.',
  category:'Necklace',
  material:'Silver-Tone Metal with High-Quality Diamond/Crystal Stones',
  style:'Luxury • Layered • Elegant • Classic • Timeless',
  occasion:'Wedding • Anniversary • Evening Party • Formal Events • Gift Giving • Special Occasions • Luxury Styling'},

{id: 16, name: 'Luxury Pearl & Diamond Statement Necklace', 
  price: 835, 
  //oldPrice: 499, 
  image: 'assets/products/16.png', 
  sale: false, 
  description:'The Luxury Pearl & Diamond Statement Necklace is a masterpiece of elegance and sophistication. Featuring dazzling diamonds beautifully combined with lustrous pearls, this exquisite necklace showcases exceptional craftsmanship and timeless luxury. Its intricate layered design creates a striking statement, making it the perfect accessory for those who appreciate refined beauty and unforgettable glamour.',
  category:'Necklace',
  material:'Silver-Tone Metal with High-Quality Diamond/Crystal Stones and Premium Pearls',
  style:'Luxury • Statement • Elegant • Royal • Timeless',
  occasion:'Wedding • Gala Events • Evening Parties • Formal Occasions • Anniversary Celebrations • Luxury Gift Giving • Special Events'},

{id: 17, name: 'Elegant Teardrop Diamond Necklace', 
  price: 578, 
  //oldPrice: 499, 
  image: 'assets/products/17.png', 
  sale: false, 
  description:'The Elegant Teardrop Diamond Necklace combines sparkling diamonds with graceful curves to create a timeless symbol of beauty and sophistication. Featuring delicate floral-inspired accents and a dazzling teardrop pendant, this necklace radiates elegance from every angle. Designed to enhance your confidence and charm, it is the perfect piece for both special occasions and everyday luxury.',
  category:'Necklace',
  material:'Rose Gold-Plated Metal with High-Quality Diamond/Crystal Stones',
  style:'Elegant • Romantic • Floral-Inspired • Luxury • Timeless',
  occasion:'Wedding • Anniversary • Date Night • Gift Giving • Formal Events • Special Occasions • Evening Parties'},

{id: 18, name: 'Five-Layer Diamond Cascade Necklace', 
  price: 458, 
  //oldPrice: 499, 
  image: 'assets/products/18.png', 
  sale: false, 
  description:'The Five-Layer Diamond Cascade Necklace features a stunning layered arrangement of brilliant diamonds that gradually increase in size, creating a captivating cascading effect. Designed to symbolize confidence, elegance, and sophistication, this luxurious necklace enhances the neckline with radiant sparkle and timeless beauty. Its refined craftsmanship and graceful layered design make it a perfect statement piece for any jewelry collection.',
  category:'Necklace',
  material:'Gold-Plated Metal with High-Quality Diamond/Crystal Stones',
  style:'Layered • Luxury • Elegant • Modern • Timeless',
  occasion:'Wedding • Anniversary • Formal Events • Evening Parties • Gift Giving • Special Occasions • Luxury Styling'},

{id: 19, name: 'Infinity Heart Diamond Necklace', 
  price: 987, 
  //oldPrice: 499, 
  image: 'assets/products/19.png', 
  sale: false, 
  description:'The Infinity Heart Diamond Necklace beautifully combines the timeless infinity symbol with an elegant heart design, representing endless love, devotion, and everlasting connection. Accented with sparkling diamonds and crafted with refined detail, this necklace radiates romance and sophistication. Its meaningful design makes it a perfect keepsake for celebrating love.',
  category:'Necklace',
  material:'Rose Gold-Plated and Silver-Tone Metal with High-Quality Diamond/Crystal Accents',
  style:'Romantic • Elegant • Symbolic • Modern • Timeless',
  occasion:'Wedding • Anniversary • Date Night • Gift Giving • Formal Events • Special Occasions • Evening Parties'},

{id: 20, name: 'Heart of Brilliance Rose Gold Heart Pendant Necklace', 
  price: 657, 
  //oldPrice: 499, 
  image: 'assets/products/20.png', 
  sale: false, 
  description:'The Heart of Brilliance Rose Gold Heart Pendant Necklace is a timeless expression of love, elegance, and sophistication. Featuring a dazzling heart-cut stone set within a graceful rose gold heart pendant, this necklace captures light beautifully from every angle.',
  category:'Necklace',
  material:'18K Rose Gold-Plated Metal with High-Quality Heart-Cut Diamond/Crystal Stone',
  style:'Romantic • Elegant • Modern • Luxury • Timeless',
  occasion:'Wedding • Anniversary • Date Night • Gift Giving • Formal Events • Special Occasions • Evening Parties'},

];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function showProducts() {

  const list =
  document.getElementById(
  'productList'
  );

  if(!list) return;

  const isProductPage =
  window.location.pathname.includes(
  'product.html'
  );

  const isPromoPage =
  window.location.pathname.includes(
  'promo.html'
  );

  /* product page = all products
     home + promo = first 8 only */

  const displayProducts =

  isProductPage
  ? products
  : products.slice(0,8);


  list.innerHTML =
  displayProducts.map(p=>{

  const card = `

<div class="card"
onclick="window.location.href='details.html?id=${p.id}'">

${p.sale
? '<div class="badge">SALE</div>'
: ''}

<img
src="${p.image}"
alt="${p.name}">

<div class="card-content">

<h3>${p.name}</h3>

<p class="price">
NT$${p.price}
</p>

<button
class="add-btn"
onclick="event.preventDefault(); event.stopPropagation(); addToCart(${p.id})">

🛒 Add to Cart

</button>

</div>

</div>

`;

return isProductPage
? card
: `<a
class="product-link"
href="product.html">

${card}

</a>`;

}).join('');

}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const item = cart.find(i => i.id === id);

  if (item) {
    item.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();

  const cartPanel = document.getElementById("cartPanel");

  if (cartPanel) {
    cartPanel.classList.add("open");
  }
}

function removeItem(id) {
  cart = cart.filter(item => item.id !== id);
  renderCart();
}
function cartQty(id, amount){

  const item = cart.find(i => i.id === id);

  if(!item) return;

  if(item.qty === 1 && amount === -1){
    cart = cart.filter(i => i.id !== id);
  }else{
    item.qty += amount;
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  renderCart();

}

function changeQty(id, amount){

  let cartProducts =
  JSON.parse(localStorage.getItem("checkoutCart")) || [];

  const item = cartProducts.find(p => p.id === id);

  if(!item) return;

  if(item.qty === 1 && amount === -1){

    cartProducts = cartProducts.filter(p => p.id !== id);

    localStorage.setItem(
      "checkoutCart",
      JSON.stringify(cartProducts)
    );

    location.reload();

    return;
  }

  item.qty += amount;

  localStorage.setItem(
    "checkoutCart",
    JSON.stringify(cartProducts)
  );

  location.reload();
}
function deleteCheckoutItem(id){

  let cartProducts =
  JSON.parse(localStorage.getItem("checkoutCart")) || [];

  cartProducts =
  cartProducts.filter(item => item.id !== id);

  localStorage.setItem(
    "checkoutCart",
    JSON.stringify(cartProducts)
  );

  location.reload();

}


function toggleCart() {
  document.getElementById('cartPanel').classList.toggle('open');
}

function renderCart() {
  const cartItems = document.getElementById('cartItems');

  if (!cartItems) return;
  localStorage.setItem("cart", JSON.stringify(cart));
  const studentElement = document.getElementById('studentDiscount');
  const studentChecked = studentElement ? studentElement.checked : false;

  let subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  
 let promoDiscount = 0;

cart.forEach(item=>{

if(item.id >= 1 && item.id <= 8){

const freeQty =
Math.floor(item.qty / 2);

promoDiscount +=
freeQty * item.price;

}

});



  let afterPromo = subtotal - promoDiscount;
  let studentDiscount = studentChecked ? Math.round(afterPromo * 0.10) : 0;
  let total = afterPromo - studentDiscount;

  cartItems.innerHTML = cart.length ? cart.map(item => `
    <div class="cart-item">
      <div>
        <b>${item.name}</b><br>
        <div class="qty-box">

<button onclick="cartQty(${item.id},-1)">
-
</button>

<span>${item.qty}</span>

<button onclick="cartQty(${item.id},1)">
+
</button>

</div>

<p>NT$${item.price * item.qty}</p>
      </div>
      <button class="remove" onclick="removeItem(${item.id})">Remove</button>
    </div>
  `).join('') : '<p>Your cart is empty.</p>';

  const cartCount = document.getElementById('cartCount');
  const subtotalBox = document.getElementById('subtotal');
  const promoDiscountBox = document.getElementById('promoDiscount');
  const studentDiscountBox = document.getElementById('studentDiscountAmount');
  const totalBox = document.getElementById('total');

  if (cartCount)
  cartCount.textContent = cart.length;
  if (subtotalBox) subtotalBox.textContent = subtotal;
  if (promoDiscountBox) promoDiscountBox.textContent = promoDiscount;
  if (studentDiscountBox) studentDiscountBox.textContent = studentDiscount;
  if (totalBox) totalBox.textContent = total;
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

if(document.getElementById("productList")){
showProducts();
}

if(document.getElementById("cartItems")){
renderCart();
}


function toggleChat() {
  document.getElementById('chatBox').classList.toggle('open');
}

function sendChat() {

const input = document.getElementById('chatInput');
const messages = document.getElementById('chatMessages');
const text = input.value.trim();

if(!text) return;

messages.innerHTML += `
<div style="display:flex;justify-content:flex-end">
<div class="user-message">${text}</div>
</div>
`;

input.value = '';

let reply = '';

if(text.toLowerCase() == "reset"){

messages.innerHTML += `
<div style="display:flex">
<div class="bot-message">
Type "reset" anytime to show quick options again 💎
</div>
</div>

<div class="quick-options">
<button onclick="quickChat('Track My Order')">📦 Track My Order</button>
<button onclick="quickChat('Track Order')">🚚 Track Order</button>
<button onclick="quickChat('Current Promos')">🎁 Current Promos</button>
<button onclick="quickChat('Student Discount')">🎓 Student Discount</button>
<button onclick="quickChat('Contact Support')">💬 Contact Support</button>
</div>
`;

messages.scrollTop = messages.scrollHeight;
return;

}

if(text.toLowerCase().includes('track') || text.toUpperCase().includes('ZH')){

const savedOrder = localStorage.getItem("lastOrderNumber");

if(savedOrder && text.toUpperCase().includes(savedOrder)){

reply =
"📦 Order Number: " + savedOrder +
"<br><br>Status: 📦 Preparing Package" +
"<br><br>Estimated Delivery: 2–5 days";

}else if(savedOrder){

reply =
"📦 Your latest order number is: " + savedOrder +
"<br><br>Status: 📦 Preparing Package" +
"<br><br>Estimated Delivery: 2–5 days";

}else{

reply = "Please enter your order number, for example: ZH123456";

}

}else if(text.toLowerCase().includes('promo')){

reply =
'🎁 Promo Products (1–8): Buy 1 Get 1 FREE!';

}else if(text.toLowerCase().includes('student')){

reply = '🎓 Students get 10% OFF at checkout';

}else if(text.toLowerCase().includes('contact')){

reply = '📞 Contact us: 0923456438';

}else{

reply = 'Type "reset" anytime to show quick options again 💎';

}

setTimeout(()=>{

messages.innerHTML += `
<div style="display:flex">
<div class="bot-message">${reply}</div>
</div>
`;

messages.scrollTop = messages.scrollHeight;

},500);

}


/* AUTO POSTER SLIDER */

const posterSlider = document.querySelector(".poster-slider");
const posters = document.querySelectorAll(".poster-slider img");
const dotsContainer = document.getElementById("posterDots");

if (posterSlider && posters.length) {

let currentIndex = 0;

/* Create one bar for each image */

posters.forEach((img,index)=>{

const dot=document.createElement("span");

dot.classList.add("poster-dot");

if(index===0){
dot.classList.add("active");
}

/* click bar to switch image */

dot.addEventListener("click",()=>{

currentIndex=index;

updateSlider();

});

dotsContainer.appendChild(dot);

});

function updateSlider(){

const width=
posters[0].offsetWidth+20;

posterSlider.scrollTo({
left:currentIndex*width,
behavior:"smooth"
});

/* highlight current bar */

document
.querySelectorAll(".poster-dot")
.forEach((dot,index)=>{

dot.classList.toggle(
"active",
index===currentIndex
);

});

}

/* auto slide */

setInterval(()=>{

currentIndex++;

if(currentIndex>=posters.length){

currentIndex=0;

}

updateSlider();

},3000);

}
function openPosterProduct(id){

const product = products.find(p => p.id === id);

if(!product) return;

document.getElementById("popupName").textContent = product.name;
document.getElementById("popupPrice").textContent = "NT$" + product.price;
document.getElementById("popupImage").src = product.image;

document.getElementById("popupAddCart").onclick = function(){

addToCart(product.id);

closePosterProduct();

};
document.getElementById(
"popupViewProduct"
).href =
"details.html?id=" + product.id;
document.getElementById("productPopup").classList.add("show");

}


/* find matching product */



function closePosterProduct(){

document
.getElementById(
"productPopup"
)
.classList.remove(
"show"
);

}
function openProduct(id){

const product =
products.find(
p=>p.id===id
);

document.getElementById(
"viewImage"
).src=
product.image;

document.getElementById(
"viewName"
).textContent=
product.name;

document.getElementById(
"viewPrice"
).textContent=
"NT$"+product.price;

document.getElementById(
"viewDescription"
).textContent=
product.description;

document.getElementById(
"popupAddCart"
).onclick=()=>{

addToCart(
product.id
);

};

document
.getElementById(
"productPopup"
)
.classList.add(
"show"
);

}

function closeProduct(){

document
.getElementById(
"productPopup"
)
.classList.remove(
"show"
);


const params = new URLSearchParams(window.location.search);

const productId = params.get("id");

const product = products.find(
p => p.id == productId
);

if(product){

document.getElementById("detailImage").src = product.image;

document.getElementById("detailName").textContent = product.name;

document.getElementById("detailPrice").textContent = "NT$"+product.price;

document.getElementById("detailSlogan").textContent = product.slogan || "";

document.getElementById("detailDescription").textContent = product.description || "";

document.getElementById("detailDiamond").textContent = product.diamond || "";

document.getElementById("detailDesign").textContent = product.design || "";

document.getElementById("detailGift").textContent = product.gift || "";

document.getElementById("detailCraftsmanship").textContent = product.craftsmanship || "";

document.getElementById("detailFashion").textContent = product.fashion || "";

document.getElementById("detailCategory").textContent = product.category || "";

document.getElementById("detailMaterial").textContent = product.material || "";

document.getElementById("detailStyle").textContent = product.style || "";

document.getElementById("detailOccasion").textContent = product.occasion || "";

document.getElementById("detailCart").onclick = ()=>{

addToCart(product.id);

};

}

}
function quickChat(text){

document.getElementById(
"chatInput"
).value=text;

sendChat();

}

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const product = products.find(p => p.id == productId);

if(window.location.pathname.includes("order.html") && product){

  document.getElementById("orderImage").src = product.image;
  document.getElementById("orderName").textContent = product.name;
  document.getElementById("orderDescription").textContent = product.description;
  document.getElementById("orderPrice").textContent = product.price;

  calculateOrderTotal();

}

function calculateOrderTotal(){

const cartProducts =
JSON.parse(localStorage.getItem("checkoutCart")) || [];

let subtotal = 0;

cartProducts.forEach(item=>{
subtotal += item.price * item.qty;
});

let promoDiscount = 0;

cartProducts.forEach(item=>{

if(item.id >= 1 && item.id <= 8){

const freeQty = Math.floor(item.qty / 2);

promoDiscount += freeQty * item.price;

}

});

const afterPromo = subtotal - promoDiscount;

let studentDiscount = 0;

const studentDiscountBox =
document.getElementById("studentOrderDiscount");

if(studentDiscountBox && studentDiscountBox.checked){
studentDiscount = Math.round(afterPromo * 0.10);
}

const totalDiscount = promoDiscount + studentDiscount;

const total = subtotal - totalDiscount;

document.getElementById("summaryPrice").textContent = subtotal;
document.getElementById("summaryDiscount").textContent = totalDiscount;
document.getElementById("summaryTotal").textContent = total;

}

function placeDirectOrder(){

const name = document.getElementById("customerName").value.trim();
const phone = document.getElementById("customerPhone").value.trim();
const address = document.getElementById("customerAddress").value.trim();
const payment = document.getElementById("paymentMethod").value;

if(!name || !phone || !address){
alert("Please fill in your customer information.");
return;
}

if(!payment){
alert("Please choose a payment method.");
return;
}

const orderNumber =
"ZH" + Math.floor(100000 + Math.random() * 900000);

localStorage.setItem("lastOrderNumber", orderNumber);

const total =
document.getElementById("summaryTotal").textContent;

alert(
"💎 Chen's Jewelry\n\n" +
"✅ Order Confirmed Successfully!\n\n" +
"Order Number: " + orderNumber +
"\nCustomer: " + name +
"\nPhone: " + phone +
"\nAddress: " + address +
"\nPayment Method: " + payment +
"\nTotal Amount: NT$" + total +
"\n\nThank you for your purchase!"
);

const orderedItems =
JSON.parse(localStorage.getItem("checkoutCart")) || [];

let mainCart =
JSON.parse(localStorage.getItem("cart")) || [];

mainCart = mainCart.filter(cartItem =>
  !orderedItems.some(orderItem => orderItem.id === cartItem.id)
);

localStorage.setItem(
  "cart",
  JSON.stringify(mainCart)
);

localStorage.removeItem("checkoutCart");

cart = mainCart;
window.location.href = "index.html";


}
function goToOrderPage(){

if(!cart.length){

alert("Your cart is empty.");

return;

}

localStorage.setItem(
"checkoutCart",
JSON.stringify(cart)
);

window.location.href =
"order.html";

}
const orderPageParams = new URLSearchParams(window.location.search);
const viewMode = orderPageParams.get("view");
const viewProductId = orderPageParams.get("id");

if(window.location.pathname.includes("order.html") && viewMode === "1"){

  const viewProduct = products.find(p => p.id == viewProductId);
  const container = document.getElementById("orderProducts");

  const pageTitle = document.getElementById("pageTitle");
  if(pageTitle){
    pageTitle.textContent = "Product Details";
  }

  const checkoutRight = document.getElementById("checkoutRight");
  if(checkoutRight){
    checkoutRight.style.display = "none";
  }

  if(viewProduct && container){
    container.innerHTML = `
      <div class="checkout-item">

        <img src="${viewProduct.image}" class="checkout-img">

        <div class="checkout-info">
          <h3>${viewProduct.name}</h3>

          <p>${viewProduct.description}</p>

          <div class="checkout-row">
            <div>
              <span>Price</span>
              <b>NT$${viewProduct.price}</b>
            </div>

            <div>
              <span>Category</span>
              <b>${viewProduct.category}</b>
            </div>

            <div>
              <span>Style</span>
              <b>${viewProduct.style}</b>
            </div>
          </div>

          <div class="order-item-content show">
            <p><b>Description:</b> ${viewProduct.description}</p>
            <p><b>Material:</b> ${viewProduct.material}</p>
            <p><b>Style:</b> ${viewProduct.style}</p>
            <p><b>Category:</b> ${viewProduct.category}</p>
            <p><b>Occasion:</b> ${viewProduct.occasion}</p>
          </div>

          <button class="checkout" onclick="addToCart(${viewProduct.id})">
            🛒 Add to Cart
          </button>
        </div>

      </div>
    `;
  }
}

if(window.location.pathname.includes("order.html") && viewMode !== "1"){

const cartProducts =
JSON.parse(localStorage.getItem("checkoutCart")) || [];

const container =
document.getElementById("orderProducts");

if(container){

container.innerHTML = cartProducts.map(item=>{

return `

<div class="checkout-item">

<img src="${item.image}" class="checkout-img">

<div class="checkout-info">

<div class="product-title-row">

<h3>${item.name}</h3>

<button
class="delete-item-btn"
onclick="deleteCheckoutItem(${item.id})">
🗑️
</button>

</div>

<div class="product-title-row">

<h3>${item.name}</h3>

</div>

<p>${item.slogan || ""}</p>

<div class="checkout-row">

<div>
<span>Price</span>
<b>NT$${item.price}</b>
</div>

<div>

<span>Qty</span>

<div class="qty-box">

<button
onclick="changeQty(${item.id},-1)">
-
</button>

<span>${item.qty}</span>

<button
onclick="changeQty(${item.id},1)">
+
</button>

</div>

</div>

<div>
<span>Total</span>
<b>NT$${item.price * item.qty}</b>
</div>

</div>

<button class="details-btn" onclick="toggleProductInfo(this)">
View Details
</button>

<div class="order-item-content">

<p><b>Description:</b> ${item.description || ""}</p>
<p><b>Material:</b> ${item.material || ""}</p>
<p><b>Style:</b> ${item.style || ""}</p>
<p><b>Category:</b> ${item.category || ""}</p>
<p><b>Occasion:</b> ${item.occasion || ""}</p>

</div>

</div>

</div>
`;

}).join("");

calculateOrderTotal();

}

}
function selectPayment(method){

document.getElementById(
"paymentMethod"
).value = method;

document
.querySelectorAll(".payment-card")
.forEach(card=>{
card.classList.remove("active");
});

event.currentTarget
.classList.add("active");

}
function toggleProductInfo(button){

const content =
button.nextElementSibling;

content.classList.toggle("show");

button.textContent =
content.classList.contains("show")
? "Hide Details"
: "View Details";

}
/* ========================= */
/* FEEDBACK FORM WITH REVIEWS */
/* ========================= */

/* FEEDBACK FORM WITH 3 COLUMN REVIEWS */

const feedbackForm = document.getElementById("feedbackForm");
const reviewsListLeft = document.getElementById("reviewsListLeft");
const reviewsListRight = document.getElementById("reviewsListRight");

function showReviews(){
  if(!reviewsListLeft || !reviewsListRight) return;

  const reviews = JSON.parse(localStorage.getItem("customerReviews")) || [];

  reviewsListLeft.innerHTML = "";
  reviewsListRight.innerHTML = "";

  if(reviews.length === 0){
    reviewsListLeft.innerHTML = `
      <div class="review-card">
        <p>No reviews yet.</p>
      </div>
    `;
    return;
  }

  reviews.forEach(function(review, index){
    const card = `
  <div class="review-card">
    <h3>${review.rating}</h3>
    <p><b>${review.name}</b></p>
    <p>${review.comment}</p>
    <p><small>Product: ${review.product}</small></p>

    <!--<button class="delete-review-btn"
      onclick="deleteReview(${index})">
      🗑 Delete
    </button>-->

  </div>
`;

    if(index % 2 === 0){
      reviewsListLeft.innerHTML += card;
    }else{
      reviewsListRight.innerHTML += card;
    }
  });
}

if(feedbackForm){
  feedbackForm.addEventListener("submit", function(e){
    e.preventDefault();

    const newReview = {
      name: document.getElementById("customerName").value,
      product: document.getElementById("productPurchased").value,
      rating: document.getElementById("rating").value,
      comment: document.getElementById("comment").value
    };

    const reviews = JSON.parse(localStorage.getItem("customerReviews")) || [];

    reviews.unshift(newReview);

    localStorage.setItem("customerReviews", JSON.stringify(reviews));

    alert("💎 Thank you! Your review has been added.");

    feedbackForm.reset();

    showReviews();
  });
}

showReviews();

function deleteReview(index){

  let reviews =
  JSON.parse(
    localStorage.getItem("customerReviews")
  ) || [];

  if(confirm("Delete this review?")){

    reviews.splice(index,1);

    localStorage.setItem(
      "customerReviews",
      JSON.stringify(reviews)
    );

    showReviews();
  }
}
function clearAllReviews(){

    if(confirm("Delete ALL reviews?")){

        localStorage.removeItem("customerReviews");

        showReviews();

    }

}
/* HOMEPAGE CUSTOMER REVIEWS */

function loadHomeReviews(){
  const homeReviews = document.getElementById("homeReviews");

  if(!homeReviews) return;

  const reviews = JSON.parse(localStorage.getItem("customerReviews")) || [];

  if(reviews.length === 0){
    homeReviews.innerHTML = `
      <div class="review">
        No customer reviews yet.
      </div>
    `;
    return;
  }

  homeReviews.innerHTML = reviews.slice(0,4).map(review => `
    <div class="review">
      <p>${review.rating}</p>
      <p>${review.comment}</p>
      <br>
      <b>- ${review.name}</b>
    </div>
  `).join("");
}

loadHomeReviews();
/* VIEW PRODUCT MODE */

const pageParams = new URLSearchParams(window.location.search);

if(
  window.location.pathname.includes("order.html")
  && pageParams.get("view") === "1"
){

  const title =
  document.getElementById("pageTitle");

  if(title){
    title.textContent = "Product Details";
  }

  const rightSide =
  document.getElementById("checkoutRight");

  if(rightSide){
    rightSide.style.display = "none";
  }

}

/* DETAILS PAGE */

if(window.location.pathname.includes("details.html")){

  const detailParams = new URLSearchParams(window.location.search);
  const detailId = detailParams.get("id");

  const detailProduct = products.find(p => p.id == detailId);

  if(detailProduct){

    document.getElementById("detailImage").src = detailProduct.image;
    document.getElementById("detailName").textContent = detailProduct.name;
    document.getElementById("detailPrice").textContent = "NT$" + detailProduct.price;
    document.getElementById("detailDescription").textContent = detailProduct.description;
    document.getElementById("detailCategory").textContent = detailProduct.category;
    document.getElementById("detailMaterial").textContent = detailProduct.material;
    document.getElementById("detailStyle").textContent = detailProduct.style;
    document.getElementById("detailOccasion").textContent = detailProduct.occasion;

    document.getElementById("detailCart").onclick = function(){
      addToCart(detailProduct.id);
      alert("🛒 Added to cart!");
    };

  }

}
