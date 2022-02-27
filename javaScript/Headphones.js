var headphones = [{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/beyerdynamic-dt-770-pro-headphone-zone-13980464185407_500x.jpg?v=1579662488",
    name: "V-MODA M-200",
    tag: "Wired DJ Headphones",
    priceSymbol: "₹",
    price: 13999,
    strike: 15999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-dt-990-pro-1160-1160-5_500x.jpg?v=1598946254",
    name: "SHURE-SH400",
    tag: "Closed-back Studio Headphones",
    priceSymbol: "₹",
    price: 17999,
    strike: 19999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-DT-880-Pro-1160-1160-1_500x.jpg?v=1599208178",
    name: "EVERYDYNAMIC-DT 880",
    tag: "Open-Back studio",
    priceSymbol: "₹",
    price: 18499,
    strike: 24999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/sennheiser-hd-569-headphone-zone-29093551111_500x.jpg?v=1579780219",
    name: "EIKON-H200",
    tag: "Wired DJ Headphones",
    priceSymbol: "₹",
    price: 10999,
    strike: 15999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-AIAIAI-Studio-XE-02_300x.jpg?v=1636776924",
    name: "AIAIAI-TMA 2",
    tag: "Wired DJ Headphones",
    priceSymbol: "₹",
    price: 16549,
    strike: 19999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Meze-99-Neo-1160-1160-2_500x.jpg?v=1591944478",
    name: "EIKON-H250",
    tag: "Professional On-Ear Headphones",
    priceSymbol: "₹",
    price: 14999,
    strike: 15999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-shure-srh840-1160-1160-2_500x.jpg?v=1623753195",
    name: "AUSTERIAN AUDIO-HX-15",
    tag: "High Definition Audio",
    priceSymbol: "₹",
    price: 13999,
    strike: 15999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-HiFiMAN-Sundara-1160-1160-2_500x.jpg?v=1592332661",
    name: "AUSTERIAN AUDIO-HX-25",
    tag: "Professional On-Ear Headphones",
    priceSymbol: "₹",
    price: 18999,
    strike: 19999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/HiFiMAN-HE400SE-01_500x.jpg?v=1614231957",
    name: "AIAIAI TMA-2HD",
    tag: "High Definition Audio",
    priceSymbol: "₹",
    price: 13599,
    strike: 15000,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Audio-technica-m20x-1160-1160-1_600x.jpg?v=1590482291",
    name: "AIAIAI TMA05",
    tag: "High Definition Audio",
    priceSymbol: "₹",
    price: 15599,
    strike: 16699,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Sennheiser-HD560S-01_500x.jpg?v=1606982042",
    name: "AKG-KPG",
    tag: "High Definition Audio",
    priceSymbol: "₹",
    price: 13999,
    strike: 15999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-audio-technica-m40x-1160-1160-1_500x.jpg?v=1590564160",
    name: "V-MODA CROSSFADE",
    tag: "Wired DJ Headphones",
    priceSymbol: "₹",
    price: 13999,
    strike: 15999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-Audio-Technica-ATH-R70x-1160-1160-1_500x.jpg?v=1583303027",
    name: "AUSTERIAN AUDIO-HX001",
    tag: "Professional On-Ear Headphones",
    priceSymbol: "₹",
    price: 14999,
    strike: 15999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-DT-880-Pro-1160-1160-1_500x.jpg?v=1599208178",
    name: "SENHEISER HD-5",
    tag: "Closed-back Studio Headphones",
    priceSymbol: "₹",
    price: 17899,
    strike: 19999,
},

{
    image: "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-V-MODA-M-200-1160-1160_300x.jpg?v=1588002899",
    name: "AUSTERIAN AUDIO-HX100",
    tag: "Wired DJ Headphones",
    priceSymbol: "₹",
    price: 13999,
    strike: 14999,
},]


localStorage.setItem("headPhonesData", JSON.stringify("headphones"));

var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];


function displayData(headphones) {

    document.querySelector("#container").innerHTML = "";
    headphones.map(function (elem, index, array) {
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

displayData(headphones)

function sortItems() {
    var sorting = document.querySelector("#sorter").value;

    if (sorting == "H2L") {
        headphones.sort(function (a, b) {
            return b.price - a.price;
        })
        displayData(headphones);

    }
    else if(sorting === "L2H")
    {
        headphones.sort(function (a, b) {
            return a.price - b.price;
        })
        displayData(headphones);
    }
}

function search() {
    var searchText = document.getElementById("search").value;
    var filterData = headphones.filter(function (elem) {
        return elem.name.trim().toLowerCase().includes(searchText.toLowerCase());
    })
    displayData(filterData);
}