function calcAmount() {
    let price = 1200;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    
    showSumPrice(price, amountNumber);
}

function showSumPrice(price, amountNumber) {
    amountNumber = amountNumber || 0;
    let showAmount = document.querySelector("span.show-amount");

    if (amountNumber > 10) {
        alert("Maximális rendelhető mennyiség: 10 db!");
    } else if (amountNumber < 1) {
        alert("Minimális rendelési mennyiség: 1 db!");
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = `${amount}`;
    }
}


// DOM - Add help text
let helpText = document.createElement("small");
helpText.className = "form-text text-muted";

helpText.innerHTML = "Adja meg a feltéteket!";

let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);

parent.removeChild(helpText);


/* // DOM - Window event
let sendButton = document.querySelector("form .btn.btn-primary");

/* sendButton.onclick = function() {
    alert("Hello JS!");
} */

/* sendButton.addEventListener("click", function() {
    alert("Helló JS!");
});

window.addEventListener("resize", function() {
    console.log(this.innerHeight, this.innerWidth);
}); */


//DOM - Egér események, űrlap események
let orderForm = document.querySelector("#orderForm");

orderForm.addEventListener("submit", function(ev) {
    ev.preventDefault(); //megakadályozza az oldal újra betöltését - az alap működést akadályozza meg
    //console.log(this);

    let inputs = this.querySelectorAll("input");
    let values = {};

    for(let i = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value;
    }

    console.log(values);
});


//DOM - Alert eltűntetése
let alertClose = document.querySelectorAll(".close[data-dismiss='alert']");

let alertCloseEvent = function(ev) {
    this.parentElement.style.display = "none";
};

for(let i = 0; i < alertClose.length; i++) {
    alertClose[i].addEventListener("click", alertCloseEvent);
}

//DOM - lista (select elem kitöltése)
let toppings = [
    "",
    "Szalonna",
    "Hagyma",
    "Tükörtojás",
    "Libamáj",
    "Extra sonka"
];
let toppingSelect = document.querySelector("#topInput");

let index = 0;
while(index < toppings.length) {
    let option = document.createElement("option");
    option.value = toppings[index];
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option);
    index++;
}