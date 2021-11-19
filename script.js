var shop = []

let storageList = JSON.parse(localStorage.getItem("bag"))

if(storageList != null){
   shop = storageList
}

function updateStorage(shop){
   localStorage.setItem("bag", JSON.stringify(shop))
}

function bag(id){
   let product = {
      img: document.getElementById(id).querySelector("img").src,
      name: document.getElementById(id).querySelector(".card-title").innerHTML,
      cost: document.getElementById(id).querySelector("#cost").innerHTML
   }

   console.log(product.name)
   console.log(product.img)
   console.log(product.cost)

   shop.push(product)
   updateStorage(shop)
}