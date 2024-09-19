console.log('added page')
// step-1 set event handler
document.getElementById('button-login').addEventListener('click', function(event){
  console.log('login btn clicked');
  // step 2 prevent default behavior (prevent reloading)
  event.preventDefault();
  // step-3 get the phone number
  const phoneNumber = document.getElementById('phone-number').value;
  console.log(phoneNumber)
})