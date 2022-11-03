let allCart = JSON.parse(localStorage.getItem("cartData")) || [];
displayTable(allCart);

function displayTable(allCart) {
  let total = 0;
  let count = 0;

  function applyNow(event) {
    event.preventDefault();
  
    let apply = document.querySelector("#text").value;
    if (apply == "Masai30") {
      total = ((total * 30) / 100) - total;
      document.querySelector("#total").innerText = "$"+Math.floor(Math.abs(total));
      alert("Promo Code applied Successfully")
    } else {
      alert("Please Enter Valid Promo Code");
    }
  }
  
  let apply = document.querySelector("form");
  apply.addEventListener("submit", applyNow);

  document.querySelector("#cart").innerHTML = "";
  allCart.forEach(function (elem, index) {
    let totalPrice = document.querySelector("#total");
    let subTotal = document.querySelector("#sub");
    if (index < 0) {
      totalPrice.innerText = "$" + 0;
    } else {
      total = total + Number(elem.price);
      totalPrice.innerText = "$" + total;
      subTotal.innerText = "$" + total;
    }

    let totalcart = document.querySelector("#count");
    count++;
    totalcart.innerText = count;

    let box = document.createElement("div");
    box.setAttribute("id", "box");
    let b1 = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", elem.image);

    let b2 = document.createElement("div");
    let name = document.createElement("p");
    name.innerText = elem.name;
    let info = document.createElement("p");
    info.innerText = elem.info;
    let btn = document.createElement("p");
    btn.innerText = "Move to Love";

    let b3 = document.createElement("div");
    let price = document.createElement("p");
    price.innerText = elem.price;
    let rmv = document.createElement("button");
    rmv.innerText = "Remove";
    rmv.style.color = "red";
    rmv.addEventListener("click", function () {
      deleteEl(elem, index);
    });

    b1.append(image);
    b2.append(name, info, btn);
    b3.append(price, rmv);
    box.append(b1, b2, b3);
    document.querySelector("#cart").append(box);
  });
}
function deleteEl(elem, index) {
  allCart.splice(index, 1);
  localStorage.setItem("cartData", JSON.stringify(allCart));
  displayTable(allCart);
}

