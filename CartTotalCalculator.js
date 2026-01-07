// Problem: Cart Total Calculator
const cart = [
  { name: "T-shirt", price: 500, quantity: 2 },
  { name: "Jeans", price: 1200, quantity: 1 },
  { name: "Cap", price: 300, quantity: 3 },
];

const result = cart.reduce(
  (acc, item) => {
    acc.totalItems += item.quantity;
    acc.totalPrice += item.price * item.quantity;
    return acc;
  },
  { totalItems: 0, totalPrice: 0 }
);

console.log(result);
