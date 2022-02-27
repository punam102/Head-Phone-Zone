var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];
console.log(cartArr)



var cartArr = JSON.parse(localStorage.getItem("cartItems"));
console.log(cartArr)

function displayData(cartArr) {
    document.querySelector(".left").innerHTML = "";
    cartArr.map(function (elem, index, array) {

        var div = document.createElement("div");

        var img = document.createElement("img");
        img.setAttribute("src", elem.image);
        img.setAttribute("class","image")

        var name = document.createElement("p");
        name.innerText = elem.name;


        var priceDiv = document.createElement("div");

        var price = document.createElement("p");
        price.innerText = "Rs."+ elem.price + " / "+"Qty"+" - " + elem.quant;

      

        var strike = document.createElement("p");
        strike.innerText = elem.tag;


        priceDiv.append(price, strike);
        priceDiv.setAttribute("class", "priceDiv");


        var btn = document.createElement("button");
        btn.innerText = "Qty+1";

        btn.addEventListener("click", function () {
            increaseQuant(index);
        })

        var btn2 = document.createElement("button");
        btn2.innerText = "Qty-1";

        btn2.addEventListener("click", function () {
            decreaseQuant(index);
        })
        
        var deleteicon = document.createElement("i");
        deleteicon.className="fa fa-trash";
        deleteicon.addEventListener("click",function(){
            deleteItem(index)
        })

        div.append(img, name, priceDiv, btn, btn2,deleteicon);
        document.querySelector(".left").append(div);
    });
}

function Total() {
    var cartTotal = cartArr.reduce(function (acc, elem, index) {
        return acc + (elem.price * elem.quant);
    }, 0);

    document.querySelector(".total").innerText = cartTotal;
}


displayData(cartArr)
Total();

function increaseQuant(index) {
    cartArr[index].quant++;
    localStorage.setItem("cartItems", JSON.stringify(cartArr));
    displayData(cartArr)
    Total();
}
function decreaseQuant(index) {
    cartArr[index].quant--;
    localStorage.setItem("cartItems", JSON.stringify(cartArr));
    displayData(cartArr)
    Total();
}
function deleteItem(index){
    cartArr.splice(index,1)
    localStorage.setItem("cartItems", JSON.stringify(cartArr))
    displayData(cartArr)
    Total();
}