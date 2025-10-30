// console.log('enter your amaount');

document.getElementById('add-money').addEventListener('click', function (event) {
  event.preventDefault();
  console.log('Succesfuly add Money');



  const addAmaountInput = document.getElementById('add-amaount').value;
  console.log(addAmaountInput);

  const addPincode = document.getElementById('add-pin').value;
  console.log(addPincode);

  if (addPincode === '1234') {
    console.log('add Money')
  }
  else {
    window.alert('Wrong Number or pin Please try again');
  }
  
  const Balance = document.getElementById('Main-balance').innerText;
  console.log(Balance);


  const addMoneyNumber = parseFloat(addAmaountInput);
  const blanceNumber = parseFloat(Balance);
  const Newblance = addMoneyNumber + blanceNumber;
  console.log(Newblance);


  document.getElementById('Main-balance').innerText = Newblance;

});
