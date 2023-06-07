import Product from './Classes/Product.js';

function saveCart(addToCart){
    localStorage.setItem("addToCart", JSON.stringify (addToCart));
}

function getAddToCart(){
    let addToCart = localStorage.getItem("addToCart");
    if(addToCart == null){
        return [];
    }else{
        return JSON.parse(addToCart)
    }
}

//ajout au panier
function addToCard(product){
    let addToCart = getAddToCart (); //on récupére
    let foundProduct = addToCard.find(p => p.id == product.id);  //chercher élément ds tableau par rapport à une condition
    if(foundProduct != undefined){
        foundProduct.quantity++; //si produit existe, trouver quantité et couleur
        foundProduct.colors++;
    }else{
        product.quantity = 1; // sinon valeur par défault   
        addToCart.push(product); // on ajoute
    }
    
    saveAddToCart(addToCart); //on enregistre ds nv panier
}

//Retirer un produit du panier

function removeFromaddToCart(product){
    let addToCart = getAddToCart (); 
    addToCart = addToCart.filter(p => p.id != product.id) //Supprimer pdt
    saveAddToCart(addToCart);
}

// Changer quantité
function changeQuantity(product,quantity){
    let addToCart = getAddToCart (); 
    let foundProduct = addToCard.find(p => p.id == product.id); 
    if (foundProduct != undefined){
        foundProduct.quantity += quantity;
        if(foundProduct.quantity <= 0){
            removeFromaddToCart(foundProduct);
        }else{
            saveAddToCart(addToCart);
        }
    }
}

// Calcule quantité px tt
function getNumberProduct(){
    let addToCart = getAddToCart (); 
    let number = 0;
    for(let product of addToCart){
        number += product.quantity;
    }
    return number;
}
function getTotalPrice(){
    let addToCart = getAddToCart (); 
    let total = 0;
    for(let product of addToCart){
        number += product.quantity  *  Product.price;
    }
    return number;
}

const postForm = () => {

    // tableau qui va recevoir les id des pdt ds panier
    const productId = [];

    //intégrer les id des produits ds le tableau
    for (let addProduct of addToCard){
        productId.push(product.id);
    }
    
    //déclarer objet dans contact avec coordonnées clt, product et id des pdt
    const orderClient ={
        contact : {
            firstName: firstName.value,
            lastName: lastName.value,
            address: address.value,
            city: city.value,
            email: email.value,
        },
        addProduct : productId,
    }

    //fetch qui envoie une requête "POST" de l'objet "orderClient" formaté JSON
    fetch("http://localhost:3000/api/products/order",
        method: 'POST',
        body: JSON.stringify(orderClient),
        headers: {
            'Accept' : 'application/json',
            "content-Type": "application/json"
        }) 
}

//on récupère le fichier json.
