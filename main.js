const productsContainer = document.querySelector(".products-container");
const buttons = document.querySelectorAll(".category");
const searchButton = document.querySelector(".search-button");

for(let i of products.data) {
    // Creating card element
    let card = document.createElement("div");
    // adding card and category classes to card
    card.classList.add("card", i.category, "hide");
    // creating image container 
    let imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    // image element 
    let image = document.createElement("img");
    image.setAttribute("src", i.image);

    imageContainer.appendChild(image);
    card.appendChild(imageContainer);

    // details container 
    let details = document.createElement("div");
    details.classList.add("details-container");
    // adding name and price to details 
    let name = document.createElement("h4");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase()
    details.appendChild(name);
    
    let price = document.createElement("h5");
    price.classList.add("product-price");
    price.innerText = i.price;
    details.appendChild(price);

    productsContainer.appendChild(card);
    card.appendChild(details);
}

// display all products 
// window.onload = () => {
//     productFilter('all');
// }

function productFilter(type) {
    buttons.forEach(button => {
        if(type.toUpperCase() === button.innerText.toUpperCase()) {
            button.classList.add("active");
        }
        else {
            button.classList.remove("active");
        }
        }   
    )

    // selecting all product cards
    let cards = document.querySelectorAll(".card");

    // looping over each card 
    cards.forEach(card => {
        if(type == 'all') {
            card.classList.remove('hide');
        }
        else {
            console.log("else");
            if(card.classList.contains(type)) {
            card.classList.remove("hide");
            }
            else{
            // hide other products
            card.classList.add("hide");
            }
        }
    })
}

// search bar 

searchButton.addEventListener("click", () => {
    let names = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    const searchInput = document.querySelector(".search-input").value;
    console.log(searchInput)
    // loop through names
    names.forEach((name,index) => {
        if(name.innerText.includes(searchInput.toUpperCase())) {
            // display card
            cards[index].classList.remove("hide");
        }
        else {
            // hide other products
            cards[index].classList.add("hide");
        }
    })
})
