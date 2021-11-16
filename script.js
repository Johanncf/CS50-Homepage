const bagDiv = document.getElementById("bag")

function bag(id){
   var card = document.getElementById(id)
   
   bagDiv.innerHTML = card.h5.innerHTML

}