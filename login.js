

document.getElementById('button-login').addEventListener('click', function (event) {
  event.preventDefault();
  console.log('log in button clicked');

  const phoneNumber = document.getElementById('phone-number').value;
  console.log(phoneNumber);
});