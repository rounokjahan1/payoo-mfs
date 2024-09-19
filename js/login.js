console.log('added page')
// step-1 set event handler
document.getElementById('button-login').addEventListener('click', function(event){
  console.log('login btn clicked');
  // step 2 prevent default behavior (prevent reloading)
  event.preventDefault();
  // step-3 get the phone number
  const phoneNumber = document.getElementById('phone-number').value;
  const pinNumber = document.getElementById('pin-number').value;
  console.log(phoneNumber , pinNumber);
// validate phone and pin
  if(phoneNumber === '5' && pinNumber === "1234"){
    console.log('You are logged in');
    window.location.href = '/home.html';

  }
  else {
    alert('Wrong phone number or pin')
  }
})