let products = {
  data: [
    {
      productName: "Regular White T-Shirt",
      category: "Topwear",
      price: "30",
      image: "white-tshirt.jpg",
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "short-skirt.jpg",
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "sporty-smartwatch.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "knitted-top.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "black-leather-jacket.jpg",
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "pink-trousers.jpg",
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "brown-jacket.jpg",
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "comfy-gray-pants.jpg",
    },
  ],
};


//use querySelctor or query to filter the  list of prdcts with the condtn 
//doc.getElemnts
//filter


for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  card.classList.add("card-price",i.price,"hide");

  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.classList.add("price");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  console.log('value in filter ',value);
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      //console.log('value in filter ',value);
      button.classList.add("active");
    } else {
      //console.log('value in filter ',value);
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};


function onPriceFilterClick() {
  document.getElementById("myDropdown").classList.toggle("show");
  
}



function filterProductViaPrice(priceVal){

    //var sample = document.getElementById('myDropdown');
    var sample = document.querySelectorAll(".card-price");
    let cards = document.querySelectorAll(".card");
    console.log('sample',sample);
    sample.forEach((element, index) => {
      //check if text includes the search value
      let text = element.innerText;
      const myArray = text.split("$");
     // console.log('arr',parseInt(myArray[1]));
      console.log('element.innerText',element.innerText);
      console.log('element.innerHTML',element.innerHTML);
      
        let pricevar = parseInt(myArray[1]);
      //console.log('element.innerHTML.container',element.innerHTML.getElementsByClassName('container'));
      if (priceVal=='30') {
          if(pricevar<=30){
            cards[index].classList.remove("hide");
          }   //display matching card
          else {
            //hide others
            cards[index].classList.add("hide");
          }
      }
      else if(priceVal=='60'){
        if(pricevar<=60){
          cards[index].classList.remove("hide");
        }   //display matching card
        else {
          //hide others
          cards[index].classList.add("hide");
        }
      }
      else if(priceVal=='70'){
        if(pricevar>=60){
          cards[index].classList.remove("hide");
        }   //display matching card
        else {
          //hide others
          cards[index].classList.add("hide");
        }
      }
      else{
        element.classList.remove("hide");
      }
    });
}

function filterProductByPrice(priceVal){

  console.log('value in price filter ',priceVal);
  //Button class code
  let buttons = document.querySelectorAll(".myDropdown");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (priceVal.toUpperCase() == button.innerText.toUpperCase()) {
      //console.log('value in filter ',value);
      button.classList.add("active");
    } else {
      //console.log('value in filter ',value);
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card-price");
  //loop through all cards
  console.log('elements',elements);
  elements.forEach((element) => {
    console.log('element',element);
    //console.log(element.card.price);
    //display all cards on 'all' button click
    if (priceVal == "all price") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (priceVal=="30") {
        //display element based on category
        // console.log('less than 30',element.classList.entries.card.forEach((i)=>{
        //   console.log('i',i);
        // }));
        //console.log('less than card 30',element.classList.entries.container.getElementsByClassName('card-price'));
       // let p = element.classList.container.getElementsByClassName('price');
        //console.log('p',p);
        element.classList.keys().forEach( (cl) => {
          console.log('c1',c1);
          if(c1.price <= 30){
            element.classList.remove("hide");
          }
        })
        
      } 
      else if(priceVal=='less than 60'){

        elements.forEach((element, index) => {
          //check if text includes the search value
            
            console.log('ele',elements[index]);

            cards[index].classList.remove("hide");
         
        });
      }
      else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}