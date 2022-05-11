const calculatePriceWithDiscount = (price, discount) => {
  const percentageWithDiscount = 100 - discount
  return (price * percentageWithDiscount) / 100;
};

function getPriceWithDiscount () {
  const price = Number(document.getElementById('priceInput').value)
  const discount = Number(document.getElementById('discountInput').value)
  const result = calculatePriceWithDiscount(price, discount)

  document.getElementById('result').innerText = `El precio con descuento es: ${result}`
}
// console.log({
//   originalPrice: originalPrice,
//   discount: discount,
//   percentageWithDiscount: percentageWithDiscount,
//   priceWithDiscount: priceWithDiscount
// });
