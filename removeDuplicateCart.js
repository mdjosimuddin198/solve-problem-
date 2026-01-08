const carts = [
  { id: 1, name: "T-shirt", price: 500, quantity: 1 },
  { id: 2, name: "Jeans", price: 1200, quantity: 1 },
  { id: 1, name: "T-shirt", price: 500, quantity: 2 },
  { id: 3, name: "Cap", price: 300, quantity: 1 },
  { id: 2, name: "Jeans", price: 1200, quantity: 3 },
];

// method 1

const result = carts.reduce((acc, item) => {
  const isExist = acc.find((p) => p.id === item.id);
  if (isExist) {
    isExist.quantity += item.quantity;
  } else {
    acc.push({ ...item });
  }
  return acc;
}, []);
console.log("final result is ", result);
