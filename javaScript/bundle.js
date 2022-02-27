var bundle = [{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-iFi-Audio-Balanced-Cable-01_500x.jpg?v=1623498956",
    name: "HIFIMAN-SUNDARA",
    tag: "Portable Bundle",
    priceSymbol: "₹",
    price: 37999,
    strike: 39999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Hifiman-sundara-topping-l30-e30-1160-1160-1_500x.jpg?v=1615013790",
    name: "HIFIMAN-SUNDARA E30",
    tag: "Portable Bundle",
    priceSymbol: "₹",
    price: 29999,
    strike: 35999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/M50x-hp-dac-2_500x.jpg?v=1614934130",
    name: "AUDIO-TECHNICA-ATHM50",
    tag: "Portable Bundle",
    priceSymbol: "₹",
    price: 53999,
    strike: 55999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/2_7ac5b350-0b79-4754-ac28-89c4c4a1f09e_500x.jpg?v=1623492208",
    name: "AUDIO-TECHNICA ZEN",
    tag: "Portable Bundle",
    priceSymbol: "₹",
    price: 39999,
    strike: 45999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sundara-TR-AMP-1160-1160-5_500x.jpg?v=1615182781",
    name: "HIFIMAN-SUNDARA TR-AMP",
    tag: "Portable Bundle",
    priceSymbol: "₹",
    price: 9999,
    strike: 11999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Beyerdynamic-TOPPING-02_500x.jpg?v=1614939958",
    name: "BEYERDYNAMIC-DT 770",
    tag: "Portable Bundle",
    priceSymbol: "₹",
    price: 3999,
    strike: 4999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-beyerdynamic-Topping-05_500x.jpg?v=1615201000",
    name: "BEYERDYNAMIC-DT 990",
    tag: "Portable Bundle",
    priceSymbol: "₹",
    price: 89999,
    strike: 99999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/2_923ca1f2-565b-47c9-8ae1-e6ee4fa6aa10_500x.jpg?v=1614937759",
    name: "BEYERDYNAMIC-DT 770 PRO",
    tag: "Portable Bundle",
    priceSymbol: "₹",
    price: 39999,
    strike: 45999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Beyerdynamic-Aune-Bundle-05_500x.jpg?v=1614938588",
    name: "BEYERDYNAMIC-DT 990 PRO",
    tag: "Portable Bundle",
    priceSymbol: "₹",
    price: 39999,
    strike: 43999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-990-X1s-02_500x.jpg?v=1615361260",
    name: "HIFIMAN-H400SE",
    tag: "Portable Bundle",
    priceSymbol: "₹",
    price: 39999,
    strike: 45999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/HPZ-03_500x.jpg?v=1623494412",
    name: "HIFIMAN HE400",
    tag: "Portable Bundle",
    priceSymbol: "₹",
    price: 39999,
    strike: 41999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/HPZ-02_617c87e8-6c80-4778-b784-a1e9cd24652d_500x.jpg?v=1615378022",
    name: "MEZE-99 CLASSIC",
    tag: "Portable Bundle",
    priceSymbol: "₹",
    price: 36999,
    strike: 38999,
},];


localStorage.setItem("bundleData", JSON.stringify("bundle"));

var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

function displayData(bundle) {
    document.querySelector("#container").innerHTML = "";
    bundle.map(function (elem, index, array) {
        var div = document.createElement("div");

        var img = document.createElement("img");
        img.setAttribute("src", elem.image);
        img.setAttribute("class","image")

        var name = document.createElement("p");
        name.innerText = elem.name;

        var tag = document.createElement("p");
        tag.innerText = elem.tag;

        var priceDiv = document.createElement("div");

        var price = document.createElement("p");
        price.innerText = "₹ "+ elem.price;


 

        var strike = document.createElement("s");
        strike.innerText = elem.strike;

        // add to cart button

        var cart = document.createElement("button");
        cart.innerText = "Add To Cart";
        cart.addEventListener("click", function () {
            addToCart(elem);
        })

        priceDiv.append(price, strike);
        priceDiv.setAttribute("class", "priceDiv");

        div.append(img, name, tag, priceDiv, cart);
        document.querySelector("#container").append(div);
    })

    function addToCart(elem) {
        console.log(elem);
        elem.quant = 1;
        cartArr.push(elem);
        console.log(cartArr)
        localStorage.setItem("cartItems", JSON.stringify(cartArr));
    }
}
displayData(bundle);


function sortItems() {
    var sorting = document.querySelector("#sorter").value;

    if (sorting == "H2L") {
        bundle.sort(function (a, b) {
            return b.price - a.price;
        })
        displayData(bundle);

    }
    else if(sorting === "L2H")
    {
        bundle.sort(function (a, b) {
            return a.price - b.price;
        })
        displayData(bundle);
    }
}

function search() {
    var searchText = document.getElementById("search").value;
    var filterData = bundle.filter(function (elem) {
        return elem.name.trim().toLowerCase().includes(searchText.toLowerCase());
    })
    displayData(filterData);
}