function calcAmount() {
   let price = 1200;
   let amount_Input = document.querySelector("input[name='amount-input']");
   let showAmount = document.querySelector("span.show-amount");
   let amount = parseInt(amount_Input.value) * price;
   
   showAmount.innerHTML = `${amount}`;
}