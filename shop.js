const tbody = document.querySelector("tbody")
const tTotal = document.querySelector("#total")
var shop = []

let storageList = JSON.parse(localStorage.getItem("bag"))

if (storageList != null) {
    shop = storageList
}

var total = 0
shop.forEach(product => {
    total += parseFloat(product.cost)
    let productInfos = `<div class="product">
                                    <img src="${product.img}">
                                    <p>${product.name}</p>
                                </div>`
    let cost = product.cost
    let newShop = document.createElement("tr")
    newShop.innerHTML = `<td>${productInfos}</td>
                                  <td><nobr>$ ${cost}</nobr></td>`
    tbody.appendChild(newShop)
})

tTotal.innerHTML = "<nobr>$ " + total.toFixed(2) + "<nobr>"

function clearBag() {
    if (confirm("Are you sure you want to clear the bag?")) {
        shop = []
        localStorage.setItem("bag", JSON.stringify(shop))
    }
    location.reload()
}