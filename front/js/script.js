export default class Product {
// récupérer l'url du back end avec les canapés
const url = "http://localhost:3000/api/products/"
//introduction de la section html
const container = document.getElementById("items")
}

// créer une fonction qui récupère les infos
//requêter l'api et faire apparaitre le produit
const getArticles = () => {
    fetch(url)
    .then(function (reponse){
        return reponse.json()
    })
    .then(function (data){
        for(product in data){ console.log(product)
            //intégrer les noms, descriptions, images, des pdts
           container.innerHTML += `<a href="./product.html?id=${data[product]._id}">
           <article>
             <img alt="${data[product].altTxt}" src="${data[product].imageUrl}">
             <h3 class="productName">${data[product].name}</h3>
             <p class="productDescription">${data[product].description}
                 
             </p>
           </article>
         </a>`
        }
    })
}

//lancer la fonction
getArticles()

