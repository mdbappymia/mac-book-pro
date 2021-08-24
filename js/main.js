//Update the cost of memory, storage and delivery
function costUpdate(updateId, cost) {
  document.getElementById(updateId).innerText = cost;
  //calling update total call function and update total all button click
  updateTotal();
}
//update the total cost
function updateTotal() {
  const bestPrice = document.getElementById("best-price").innerText;
  const memoryCost = document.getElementById("memory-cost").innerText;
  const storageCost = document.getElementById("storage-cost").innerText;
  const delevaryCost = document.getElementById("delevary-cost").innerText;
  const totalCostText = document.getElementById("total-cost");
  //update the total cost
  const totalCostValue =
    parseFloat(bestPrice) +
    parseFloat(memoryCost) +
    parseFloat(storageCost) +
    parseFloat(delevaryCost);
  totalCostText.innerText = totalCostValue;
  //update overall total cost
  document.getElementById("overall-total").innerText = totalCostValue;
}
//update the overall total cost after applying promo code
let count = 3;
document.getElementById("apply-coupon").addEventListener("click", function () {
  const promoCode = document.getElementById("input-promo").value;
  const validatePromo = "stevekaku";
  const totalCost = document.getElementById("total-cost");
  const overallTotalAmountText = totalCost.innerText;
  let overallTotalAmount = parseFloat(overallTotalAmountText);
  //promo code check
  if (promoCode == validatePromo) {
    overallTotalAmount = overallTotalAmount - overallTotalAmount * 0.2;
    document.getElementById("overall-total").innerText = overallTotalAmount;
    document.getElementById("num-of-try").innerText = "";
    count = 3;
  } else {
    count--;
    document.getElementById("num-of-try").innerText = `Your ${count} try left`;
  }
  console.log(count);
  if (count == 0) {
    document.getElementById("apply-coupon").setAttribute("disabled", true);
  }
  //clear the promo code input
  document.getElementById("input-promo").value = "";
});
