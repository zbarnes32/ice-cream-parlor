let menu = [
    {
        name: "vanilla",
        price: 2.50,
        quantity: 0
    }, 
    {
        name: "chocolate",
        price: 3.50,
        quantity: 0
    }, 
    {
        name: "strawberry",
        price: 4.50,
        quantity: 0
    },
    {
        name: "wild berry",
        price: 5.00,
        quantity: 0
    },
    {
        name: "sprinkles",
        price: 0.50,
        quantity: 0
    },
    {
        name: "berries",
        price: 2.50,
        quantity: 0
    }, 
    {
        name: "chocolate chips",
        price: 1.00,
        quantity: 0
    },
    {
        name: "gummy bears",
        price: 1.50,
        quantity: 0
    },
    {
        name: "waffle cone",
        price: 1.50,
        quantity: 0
    },
    {
        name: "waffle bowl",
        price: 2.50,
        quantity: 0
    },
    {
        name: "pint",
        price: 4.00,
        quantity: 0
    }, 
    {
        name: "bowl",
        price: 3.00,
        quantity: 0
    }
]

function buyVanilla() {
    menu[0].quantity += 1;
    console.log("bought a scoop of vanilla", menu[0]);
}

function buyChocolate() {
    menu[1].quantity += 1;
    console.log("bought a scoop of chocolate", menu[1]);
}

function addToOrderByName(itemName) {
    for (let i = 0; i < menu.length; i++) {
        if (itemName == menu[i].name) {
            menu[i].quantity += 1;
           // console.log("added item", menu[i])
        }
    }
    drawOrder();
}

function drawOrder(){
    const checkoutElem = document.getElementById('checkout');
    const checkoutTotalElem = document.getElementById('checkout-total');
    let checkoutContent = ''
    for (let i = 0; i < menu.length; i++){
        if (menu[i].quantity > 0) {
            checkoutContent += `<p> ${menu[i].quantity} ${menu[i].name} $${(menu[i].price * menu[i].quantity).toFixed(2)}</p>`
        }
        // console.log(checkoutContent);
        checkoutElem.innerHTML = checkoutContent;
        const checkoutTotal = getCheckoutTotal();
        checkoutTotalElem.innerText = `$${checkoutTotal.toFixed(2)}`;

    }
}

function getCheckoutTotal(){
    let total = 0;
    for (let i = 0; i < menu.length; i++){
        total += menu[i].price * menu[i].quantity;
    }
    console.log(total);
    return total;
}