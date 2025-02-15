function calculateOrderTotal(orders) {
  let total = 0;
  for (let i = 0; i < orders.length; i++) {
    total += orders[i].quantity * orders[i].price;
  }
  return total;
}

const orders = [
  { id: "1", name: "A", quantity: 2, price: 100 },
  { id: "2", name: "B", quantity: 1, price: 200 },
  { id: "3", name: "C", quantity: 3, price: 300 },
];

console.log(calculateOrderTotal(orders));