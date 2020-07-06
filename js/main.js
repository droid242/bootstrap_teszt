function calcAmount() {
   let price = 1200;
   let amountInput = document.querySelector("input[name='amount-input']");
   let showAmount = document.querySelector("span.show-amount");
   let amountNumber = parseInt(amountInput.value);

   amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

   if(amountNumber > 10) {
      alert("Maximális rendelhető mennyiség: 10 db!");
   } else if(amountNumber < 1) {
      alert("Minimális rendelési mennyiség: 1 db!");
   } else {
      let amount = amountNumber * price;
      showAmount.innerHTML = `${amount}`;
   }
}