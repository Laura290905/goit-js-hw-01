function getShippingMessage(country, price, deliverFee) {
    let totalPrice = price + deliverFee;
    return "Shipping to " + country + " will cost " + totalPrice + " credits";
}

console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweeden", 100, 20));