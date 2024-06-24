// initializeCart()
function initializeCart() {
    let cart = localStorage.getItem('cart');
    if (!cart) {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

//add an item to the cart
function addItem(item) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    item.id = Date.now(); 
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
}

//remove an item from cart
function removeItem(itemId) {
    initializeCart();
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart.filter(item => item.id!== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function displayCart() {
    initializeCart();
    let cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
}

//event listener for add to item form
document.getElementById('addItemForm').addEventListener('submit', function(event){
    event.preventDefault();
    let itemName = document.getElementById('itemName').value;
    let itemPrice = parseFloat(document.getElementById('itemPrice').value);
    let item = { name: itemName, price: itemPrice };
    addItem(item);
    displayCart();
  });
  
  // event listener for the display cart button
  document.getElementById('displayCartButton').addEventListener('click', function() {
    displayCart();
  });