

// Show Cash Out
document.getElementById('show-cash-out').addEventListener('click', function () {
  document.getElementById('cash-out-main').classList.add('hidden'); // cash out show
  document.getElementById('cash-out-form').classList.remove('hidden'); // add money hide
});

// Show Add Money
document.getElementById('show-add-money').addEventListener('click', function () {
  document.getElementById('cash-out-main').classList.remove('hidden'); // cash out hide
  document.getElementById('cash-out-form').classList.add('hidden'); // add money show
});

