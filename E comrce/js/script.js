let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = parseInt(localStorage.getItem("total")) || 0;

function addToCart(name, price){
cart.push({name, price});
total += price;
localStorage.setItem("cart", JSON.stringify(cart));
localStorage.setItem("total", total);
alert(name + " added to cart!");
}

function displayCart(){
let cartList = document.getElementById("cart");
let totalText = document.getElementById("total");
cartList.innerHTML = "";
cart.forEach(item=>{
let li = document.createElement("li");
li.innerText = item.name + " - ₹" + item.price;
cartList.appendChild(li);
});
totalText.innerText = "Total: ₹" + total;
}

// benner//
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

// Auto-slide every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);


function addToCart(name, price, image, stock){

let qty = parseInt(prompt("Enter quantity:"));

if(qty > stock){
  alert("Only " + stock + " items available!");
  return;
}

cart.push({
  name: name,
  price: price,
  image: image,   // ✅ image add
  quantity: qty,  // ✅ quantity add
  stock: stock    // ✅ stock add
});

total += price * qty;

localStorage.setItem("cart", JSON.stringify(cart));
localStorage.setItem("total", total);

alert(name + " added to cart!");
}