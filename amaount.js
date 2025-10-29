// console.log('enter your amaount');


document.getElementById('add-money').addEventListener('click', function (event) {
  event.preventDefault();
  console.log('Succesfuly add Money');



  const addAmaountInput = document.getElementById('add-amaount').value;
  console.log(addAmaountInput);

  const addPincode = document.getElementById('add-pin').value;
  console.log(addPincode);


});
