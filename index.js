document.addEventListener('load', () => {
  if (teaQty == 0 & bagelQty == 0 & coffeeQty == 0) {
      document.getElementById('title').style.display = "none"

  }
})
document.getElementById("form1").addEventListener('submit', function (e) {

  e.preventDefault()
  var qtyText = document.getElementById('teaPrice').textContent
  var teaPrice = parseFloat(qtyText)
  var teaQty = document.getElementById('teaQty')
  var totalTeaPrice = (teaPrice * teaQty.value).toFixed(2);

  var bagelPriceText = document.getElementById('bagelPrice').textContent
  var bagelPrice = parseFloat(bagelPriceText)
  var bagelQty = document.getElementById('bagelQty')
  var totalBagelPrice = (bagelPrice * bagelQty.value).toFixed(2);

  var coffeePriceText = document.getElementById('coffeePrice').textContent
  var coffeePrice = parseFloat(coffeePriceText)
  var coffeeQty = document.getElementById('coffeeQty')
  var totalcoffeePrice = (coffeePrice * coffeeQty.value).toFixed(2);


  var displayTea = document.getElementById('tea')
  var displayBagel = document.getElementById('bagel')
  var displayCoffee = document.getElementById('coffee')
  document.getElementById('title').style.display = "block"
  var grandTotal = document.getElementById('grandTotal')
  displayTea.innerHTML = 'Tea: ' + qtyText + ' @ Qty ' + teaQty.value + ' = ' + totalTeaPrice;
  displayBagel.innerHTML = 'Bagel: ' + bagelPriceText + ' @ Qty ' + bagelQty.value + ' = ' + totalBagelPrice;
  displayCoffee.innerHTML = 'Coffee: ' + coffeePriceText + ' @ Qty ' + coffeeQty.value + ' = ' + totalcoffeePrice;

  var grandTotalPrice = parseFloat(totalTeaPrice) + parseFloat(totalBagelPrice) + parseFloat(totalcoffeePrice);

  grandTotal.innerHTML = 'Grand Total = ' + grandTotalPrice.toFixed(2);

});