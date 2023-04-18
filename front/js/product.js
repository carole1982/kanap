const params = new URL(document.location).searchParams
const id = params.get("id")

const url = `http://localhost:3000/api/products/${id}`

const getArticle = () => {
    fetch(url)
    .then(function(reponse){
        return reponse.json()
    })
    .then(function(data){
        console.log(data)
        const addTitle = (document.getElementById("title").innerHTML= data.name)
        const addPrice = (document.getElementById("price").innerText= data.price)
        const addImg = document.createElement("img")
        document.querySelector(".item__img").appendChild(addImg)
        addImg.setAttribute("src", `${data.imageUrl}` )

        const addDescription = (document.getElementById("description").innerHTML = data.description)
        const addOption = document.getElementById("colors")
        for (color in data.colors){
                addOption.innerHTML += `<option value="${data.colors[color]}">${data.colors[color]}</option>`
            }

    })
}

getArticle()