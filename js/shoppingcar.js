
let minusBtn = document.querySelectorAll(".minus-btn");
let numInput = document.querySelectorAll(".numinput");
let plusBtn = document.querySelectorAll(".plus-btn");
let totalPay = document.querySelectorAll(".totalpay");
let price = document.querySelectorAll(".price");
let total = document.querySelector(".total");



//BTN1-----------------------------------------------------------------------------



minusBtn[0].addEventListener("click", function (e) {
    if (numInput[0].value > 1) {
        numInput[0].value -= 1;
        totalPay[0].textContent = "NT" + (numInput[0].value * price[0].innerHTML)
    }
    init();
});

plusBtn[0].addEventListener("click", function (e) {
    numInput[0].value = parseInt(numInput[0].value) + 1;
    totalPay[0].textContent = "NT" + (numInput[0].value * price[0].innerHTML)
    init();
});






//BTN2-------------------------------------------------------------------------

minusBtn[1].addEventListener("click", function (e) {
    if (numInput[1].value > 1) {
        numInput[1].value -= 1;
        totalPay[1].textContent = "NT" + (numInput[1].value * price[1].innerHTML)
    }
    init();
});

plusBtn[1].addEventListener("click", function (e) {
    numInput[1].value = parseInt(numInput[1].value) + 1;
    totalPay[1].textContent = "NT" + (numInput[1].value * price[1].innerHTML)
    init();
});


//BTN3-------------------------------------------------------------------------


minusBtn[2].addEventListener("click", function (e) {
    if (numInput[2].value > 1) {
        numInput[2].value -= 1;
        totalPay[2].textContent = "NT" + (numInput[2].value * price[2].innerHTML)
    }
    init();
});

plusBtn[2].addEventListener("click", function (e) {
    numInput[2].value = parseInt(numInput[2].value) + 1;
    totalPay[2].textContent = "NT" + (numInput[2].value * price[2].innerHTML)
    init();
});





/*初始化*/

function init() {
    let num = 0;
    for (i = 0; i < totalPay.length; i++) {
        num += numInput[i].value * price[i].innerHTML;

    }
    total.textContent = "NT" + num;
    console.log(num);
};


