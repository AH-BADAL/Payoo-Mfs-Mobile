// Started work javascrit log in form

document.getElementById('button-login').addEventListener('click', function (event) {
  event.preventDefault();
  console.log('log in button clicked');

  const phoneNumber = document.getElementById('phone-number').value;
  const pinNumber = document.getElementById('pin-number').value;
  console.log(phoneNumber, pinNumber);
  

  if (phoneNumber === '5' && pinNumber === '2580') {
    console.log('you are log in');
     window.location.href = 'homepage.html';
  }
  else {
    alert('Wrong Number or pin');
  }
});