const shoppingCart = document.querySelector('ul')
shoppingCart.children[1].innerHTML = 'Granny Smith Apples'
shoppingCart.children[3].remove()
const newItem = document.createElement('li')
newItem.innerHTML = 'Kombucha'
shoppingCart.appendChild(newItem)

while (shoppingCart.children.length > 0) {
    shoppingCart.children[0].remove()
}

function fillCart() {
    let newItems = ['protein bars', 'almonds', 'peanut butter'];
    newItems.forEach(function (item){
        shoppingCart.appendChild(document.createElement('li'));
        shoppingCart.children[newItems.indexOf(item)].innerHTML = item;
    })
}

fillCart()

shoppingCart.children[1].setAttribute('class', 'important')
console.log(shoppingCart)