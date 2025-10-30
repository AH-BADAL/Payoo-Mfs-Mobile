document.getElementById('cash-out').addEventListener('click', function (event) {
  event.preventDefault();
  console.log('cash out');
 
   const cashoutInput = document.getElementById('input-cash-out').value;
   const cashOutNumber = parseFloat(cashoutInput);
   const pinNumberInput = document.getElementById('pin-cash-out').value;

  console.log(cashoutInput, pinNumberInput);

  if (pinNumberInput === '1234') {
    console.log('succesfuly cash out');
    const balance = document.getElementById('Main-balance').innerText;
    console.log(balance);
    const blanceNumber = parseFloat(balance);

    const NewBlance = blanceNumber - cashOutNumber;
    document.getElementById('Main-balance').innerText = NewBlance;
  }

  else {
    window.alert('Your pin and number is wrong');
  };












});