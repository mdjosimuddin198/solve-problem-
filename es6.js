// একটা function লেখো countByRole(users)
//  reduce ছাড়া কিছু ব্যবহার করা যাবে না
//  user গুলোকে role অনুযায়ী count করবে
//  role না থাকলে "user" ধরবে

// Demo Data

const users = [
  { name: "Josim", role: "admin" },
  { name: "Rahim", role: "mentor" },
  { name: "Karim" },
  { name: "Hasan", role: "admin" },
];

const countByRole = (users = []) =>
  users.reduce((acc, { role = "user" }) => {
    acc[role] = (acc[role] || 0) + 1;
    return acc;
  }, {});

// demo
console.log(countByRole(users));
