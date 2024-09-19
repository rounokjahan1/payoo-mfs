// add money to the account
// step-1 add an event handler to the add money btn inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
  //prevent page reload after form submit
  event.preventDefault();
  //step-2 get money to be added to the account 
  const addMoneyInput = document.getElementById('input-add-money').value;
  // step-3 get the pin number provided
  const pinNumberInput = document.getElementById('input-pin-number').value;

  console.log(addMoneyInput, pinNumberInput);
})