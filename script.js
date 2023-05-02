// Declare your variables here
const btnEl = document.getElementById('calculate');
const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const totalSpan = document.getElementById('total');

// Create your function here
function calculateTotal (){
    // These are the values needed to calculate the total.
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (1 + tipValue / 100);

    /*This displays the total on the webpage instead of just in the console log.*/
    totalSpan.innerHTML = totalValue.toFixed(2);
}

// This button will calculate the total when clicked.
btnEl.addEventListener('click', calculateTotal);



