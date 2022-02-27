var players = [{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Q1-Red-2_500x.jpg?v=1583928476",
    name: "SHALING-Q1",
    tag: "Portable Digital Audio Player (DAP)",
    priceSymbol: "₹",
    price: 27999,
    strike: 29999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-zone-SONY-PLAYER_500x.jpg?v=1589882316",
    name: "SONY NW-A55",
    tag: "Portable Digital Audio Player (DAP)",
    priceSymbol: "₹",
    price: 34999,
    strike: 35999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Shanling-M3X-02_500x.jpg?v=1619430137",
    name: "SHALING-M3X",
    tag: "Portable Digital Audio Player (DAP)",
    priceSymbol: "₹",
    price: 53999,
    strike: 54999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/sony-nw-a105-headphone-zone-14032628711487_500x.jpg?v=1580284619",
    name: "SONY NW-A105",
    tag: "Portable Digital Audio Player (DAP)",
    priceSymbol: "₹",
    price: 47999,
    strike: 49999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Hiby-R3Pro-Sabre-Black-02_500x.jpg?v=1629788537",
    name: "HIBY R3 PRO",
    tag: "Portable Digital Audio Player (DAP)",
    priceSymbol: "₹",
    price: 22999,
    strike: 23999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Aune-Audio-X5s-1_500x.jpg?v=1626330978",
    name: "AUNE AUDIO X-5S",
    tag: "Portable Digital Audio Player (DAP)",
    priceSymbol: "₹",
    price: 7999,
    strike: 9999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-FiiO-M11-Plus-ESS-2_500x.jpg?v=1642579433",
    name: "FIIO M11 PLUS",
    tag: "Portable Digital Audio Player (DAP)",
    priceSymbol: "₹",
    price: 27999,
    strike: 29999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Cayin-N3Pro-New-02_500x.jpg?v=1600849668",
    name: "CAYIN N3 PRO",
    tag: "Portable Digital Audio Player (DAP)",
    priceSymbol: "₹",
    price: 21999,
    strike: 22999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/cayin-idap-6-headphone-zone-417396817927_500x.jpg?v=1580212169",
    name: "CAYIN IDAP-6",
    tag: "Portable Digital Audio Player (DAP)",
    priceSymbol: "₹",
    price: 17999,
    strike: 19999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Lotoo-Paw-Pico-01_500x.jpg?v=1634543312",
    name: "LOTOO-PAW PICO",
    tag: "Portable Digital Audio Player (DAP)",
    priceSymbol: "₹",
    price: 37999,
    strike: 39999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Astell_Kern-SR25MKii-04_500x.jpg?v=1634799952",
    name: "ASTELL&KERN-A & NORMA",
    tag: "Portable Digital Audio Player (DAP)",
    priceSymbol: "₹",
    price: 27999,
    strike: 28999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-S.M.S.L-SD-9-2_500x.jpg?v=1626164218",
    name: "S.M.S.L SD-9",
    tag: "Portable Digital Audio Player (DAP)",
    priceSymbol: "₹",
    price: 26999,
    strike: 29999,
},];

localStorage.setItem("playersData", JSON.stringify("players"));

var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];


function displayData(players) {

    document.querySelector("#container").innerHTML = "";
    players.map(function (elem, index, array) {
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

displayData(players)

function sortItems() {
    var sorting = document.querySelector("#sorter").value;

    if (sorting == "H2L") {
        players.sort(function (a, b) {
            return b.price - a.price;
        })
        displayData(players);

    }
    else if(sorting === "L2H")
    {
        players.sort(function (a, b) {
            return a.price - b.price;
        })
        displayData(players);
    }
}

function search() {
    var searchText = document.getElementById("search").value;
    var filterData = players.filter(function (elem) {
        return elem.name.trim().toLowerCase().includes(searchText.toLowerCase());
    })
    displayData(filterData);
}