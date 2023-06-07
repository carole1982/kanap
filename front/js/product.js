export default class Product{
// creer variable//
const params = new URL(document.location).searchParams
const id = params.get("id")
//intégrer url de l'API//
const url = `http://localhost:3000/api/products/${id}`
//appeler API//
const getArticle = () => {
    fetch(url)
    .then(function(reponse){
        return reponse.json()
    })
    .then(function(data){
        console.log(data)
        const addTitle = (document.getElementById("title").innerHTML= data.name)//Ajouter titre//
        const addPrice = (document.getElementById("price").innerText= data.price)//Ajouter prix//
        const addImg = document.createElement("img")// Création balise image et Ajouter//
        document.querySelector(".item__img").appendChild(addImg)// creer enfant et mettre variable//
        addImg.setAttribute("src", `${data.imageUrl}` )//intégrer url de l'image//

        const addDescription = (document.getElementById("description").innerHTML = data.description)//Ajpouter description//
        const addOption = document.getElementById("colors")//Ajouter couleur//
        for (color in data.colors){
                addOption.innerHTML += `<option value="${data.colors[color]}">${data.colors[color]}</option>`
            }//boucle pour choisir couleur//

    })
}}


getArticle()
//enregistrer le choix dans panier//
const addToCart = document.getElementById("addToCart")
//enregistrer fonction//
addToCart.addEventListener("click", () =>{
    const addProduct ={
        quantity : document.getElementById("quantity").value,
        color : document.getElementById("colors").value,
        id:id
    }
    const quantity= document.getElementById("quantity").value
    if(quantity == 0 ){
        alert("Veuillez séléctionner une couleur et une quantité (1 - 100)")
    }
    if(quantity > 100){
        alert("Vous avez dépassé la quantité maximale autorisée")
    } else {
        alert ("produit ajouté au panier avec succès!")
    }


//tout ajouter dans le local storage pour stocker les valeurs et les réutiliser//
addProductLocalStorage = []
//si pas égal à nul, on peut écrire dedans//
if (localStorage.getItem("addToCart")!==null){
    addProductLocalStorage = JSON.parse(localStorage.getItem("addToCart"))
//on pousse dedans le tableau//
    addProductLocalStorage.push("addToCart", JSON.stringify(addProductLocalStorage))
} else { //sinon ne pas enregistrer?//
    addProductLocalStorage.push(addProduct)
    localStorage.setItem("addToCart", JSON.stringify(addProductLocalStorage))
    
}

})