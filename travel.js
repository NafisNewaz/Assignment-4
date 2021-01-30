//using query selector for take all class name 
var plusBtn = document.querySelectorAll('.plusBtn');
var quantityText =document.querySelectorAll('.quantityText');
var minusBtn = document.querySelectorAll('.minusBtn');
var spanText = document.querySelectorAll('.spanText');

// plus button handler
for (let i = 0; i < plusBtn.length; i++) {
    const button = plusBtn[i];
    button.addEventListener('click', function () {
        if (quantityText[i].value == "" || quantityText[i].value == NaN) {
            quantityText[i].value = "0";
        }
        var quantityNum = parseInt(quantityText[i].value);
        quantityText[i].value = ++quantityNum;
             var price = [1500,1000];
             var totalPrice = (quantityNum * price[i]);
            spanText[i].innerText = totalPrice;
            totalCount(); // total amount handler
    })
}

//minus button handler
for (let i = 0; i < minusBtn.length; i++) {
    const button = minusBtn[i];
    button.addEventListener('click', function () {
        var quantityNum = parseInt(quantityText[i].value);
        if (quantityNum < 1) {
            quantityNum = 1;
        }
        quantityText[i].value = --quantityNum;
         var price = [1500,1000];
         var totalPrice = (quantityNum * price[i]);
        spanText[i].innerText = totalPrice;
        totalCount();
    })
}

// calculating handler
function totalCount() {
    var subTotal = parseInt(spanText[0].innerText) + parseInt(spanText[1].innerText);
    document.getElementById('subTotalAmount').innerText = subTotal;
      var vat = subTotal * .10;     // vat amount = 10% 
    document.getElementById('vatCount').innerText = vat.toFixed();
      var inTotal = subTotal + vat;
    document.getElementById('totalAmount').innerText = inTotal.toFixed();
}

// after booking confirmation handler
function Booking() {
    alert('Booking done');
    var travel = document.getElementById('travel-section');
    travel .style.display = 'none';
    var bookingDone = document.getElementById('confirm-section');
    bookingDone.style.display = 'block';
}


