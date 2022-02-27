

var desktop = [{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Topping-E30-01_500x.jpg?v=1596625475",
    name: "TOPPING-A30 PRO",
    tag: "Desktop Headphone Amp & DAC",
    priceSymbol: "₹",
    price: 12999,
    strike: 15999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/iFi-Audio-Zen-can-05_500x.jpg?v=1597035161",
    name: "AUNE AUDIO-X1S PRO",
    tag: "Desktop Digital to Analog Converter (DAC)",
    priceSymbol: "₹",
    price: 39999,
    strike: 45999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-iFi-Audio-Zen-DAC-V2-2_500x.jpg?v=1626759314",
    name: "FIIO-K5 PRO",
    tag: "Desktop Digital to Analog Converter (DAC)",
    priceSymbol: "₹",
    price: 12999,
    strike: 15999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/topping-L30-Black-01_500x.jpg?v=1606724717",
    name: "EARMAN DONALD DAC",
    tag: "Desktop Headphone Amplifier",
    priceSymbol: "₹",
    price: 17999,
    strike: 18999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Topping-D50s-06_500x.jpg?v=1596697897",
    name: "TOPPING-A50S",
    tag: "Desktop DAC & Amp",
    priceSymbol: "₹",
    price: 12599,
    strike: 14999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Topping-A90-01_500x.jpg?v=1611990200",
    name: "TOPPING D30 PRO",
    tag: "Desktop DAC & Amp",
    priceSymbol: "₹",
    price: 12999,
    strike: 13999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Aune-Audio-X7s-2021-02_500x.jpg?v=1616407921",
    name: "CHORD-MOJO 2",
    tag: "Desktop DAC & Amp",
    priceSymbol: "₹",
    price: 15999,
    strike: 15999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-FiiO-D03K-2_500x.jpg?v=1621494468",
    name: "AUNE AUDIO-X8",
    tag: "Desktop Headphone Amplifier",
    priceSymbol: "₹",
    price: 11999,
    strike: 15999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/EarMen-Donald-DAC-New-2_300x.jpg?v=1595424126",
    name: "TOPPING-DX3 PRO+",
    tag: "Desktop Digital To Analog Converter (DAC)",
    priceSymbol: "₹",
    price: 18999,
    strike: 19999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Fiio-K5-Pro-1_300x.jpg?v=1624598956",
    name: "S.M.S.L SU-9",
    tag: "Desktop DAC & Amp",
    priceSymbol: "₹",
    price: 12999,
    strike: 15999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Aune-Audio-X1s-1160-1160-1_300x.jpg?v=1597038298",
    name: "XDUOO MT-604",
    tag: "Desktop Digital To Analog Converter (DAC)",
    priceSymbol: "₹",
    price: 15999,
    strike: 16999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Topping-A30Pro-gallery-5_300x.jpg?v=1620033119",
    name: "TOPPING-D10",
    tag: "Desktop Headphone Amplifier",
    priceSymbol: "₹",
    price: 11999,
    strike: 15999,
},];

localStorage.setItem("desktopData", JSON.stringify("desktop"));

var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];

function displayData(desktop) {

    document.querySelector("#container").innerHTML = "";
    desktop.map(function (elem, index, array) {
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



displayData(desktop)

function sortItems() {
    var sorting = document.querySelector("#sorter").value;

    if (sorting == "H2L") {
        desktop.sort(function (a, b) {
            return b.price - a.price;
        })
        displayData(desktop);

    }
    else if(sorting === "L2H")
    {
        desktop.sort(function (a, b) {
            return a.price - b.price;
        })
        displayData(desktop);
    }
}

function search() {
    var searchText = document.getElementById("search").value;
    var filterData = desktop.filter(function (elem) {
        return elem.name.trim().toLowerCase().includes(searchText.toLowerCase());
    })
    displayData(filterData);
}