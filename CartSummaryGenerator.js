const orders = [
  { id: 101, product: "Shoes", price: 2500, quantity: 1 },
  { id: 102, product: "Bag", price: 1800, quantity: 2 },
  { id: 103, product: "Watch", price: 3200, quantity: 1 },
  { id: 104, product: "Socks", price: 200, quantity: 5 },
];

const getCartSummary = (carts) => {
  return carts.reduce(
    (acc, item) => {
      acc.totalItems += item.quantity;
      acc.totalPrice += item.price * item.quantity;
      if (item.price > 1000) {
        acc.expensiveItems.push(item.product);
      }
      return acc;
    },
    { totalItems: 0, totalPrice: 0, expensiveItems: [] }
  );
};

const result = getCartSummary(orders);
console.log(result);
