// add cart data to this div
let cartContainer = document.getElementById("cartContainer");

let totalItemsElement = document.getElementById("totalItems");
let totalAmountElement = document.getElementById("totalAmount");
let couponCodeInput = document.getElementById("couponCode");
let applyCouponBtn = document.getElementById("applyCouponBtn");
let billAmountElement = document.getElementById("billAmount");


// let totalItemsElement = document.getElementById("totalItems");
// let totalAmountElement = document.getElementById("totalAmount");
// let billAmountElement = document.getElementById("billAmount");
// let cartContainer = document.getElementById("cartContainer");

// Load the cart array from localStorage or initialize an empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to update the bill section based on the cart
function updateBill() {
  let totalItems = cart.length;
  let totalAmount = cart.reduce((total, item) => total + item.discountedPrice, 0);

  totalItemsElement.textContent = "Total items in cart: " + totalItems;
  totalAmountElement.textContent = "Total Amount: $" + totalAmount.toFixed(2);

  // Reset bill amount when updating
  billAmountElement.textContent = "Bill Amount: $" + totalAmount.toFixed(2);
}

// Function to display the cart items in the cartContainer
function displayCartItems() {
  // Clear existing cart items
  cartContainer.innerHTML = "";

  // Map over the cart array and create HTML elements for each item
  cart.map(item => {
    let cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");

    let itemName = document.createElement("p");
    itemName.textContent = item.name;
    let img = document.createElement("img")
    img.src = item.img
    let itemPrice = document.createElement("p");
    itemPrice.textContent = "Price: $" + item.discountedPrice.toFixed(2);

    cartItemDiv.appendChild(itemName);
    cartItemDiv.appendChild(itemPrice);
    cartItemDiv.appendChild(img)
    cartContainer.appendChild(cartItemDiv);
  });
}

// Function to update both the bill section and display the cart items
function updateUI() {
  updateBill();
  displayCartItems();
}

// Update the UI when the page loads
updateUI();
// Function to update the bill section based on the cart
function updateBill() {
  let totalItems = cart.length;
  let totalAmount = cart.reduce((total, item) => total + item.discountedPrice, 0);

  totalItemsElement.textContent = "Total items in cart: " + totalItems;
  totalAmountElement.textContent = "Total Amount in cart: $" + totalAmount.toFixed(2);

  // Reset bill amount when updating
  billAmountElement.textContent = "Bill Amount: $" + totalAmount.toFixed(2);
}

// Function to apply a coupon (placeholder implementation)
function applyCoupon() {
  // Placeholder logic for applying a coupon
  let couponCode = couponCodeInput.value;

  // Assuming a dummy coupon code "SAVE10" for a 10% discount
  if (couponCode === "MASAI15") {
    let totalAmount = cart.reduce((total, item) => total + item.discountedPrice, 0);
    let discountedAmount = totalAmount * 0.15; // 10% discount
    let finalAmount = totalAmount - discountedAmount;

    billAmountElement.textContent = "Bill Amount (After Discount): $" + finalAmount.toFixed(2);
  } else {
    alert("Invalid coupon code. Please enter a valid code.");
  }
}

// Event listener for applying a coupon
applyCouponBtn.addEventListener("click", applyCoupon);
