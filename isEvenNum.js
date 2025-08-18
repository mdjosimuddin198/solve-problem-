const isEvenNum = (numbers) => {
  let even = [];
  for (let num of numbers) {
    if (num % 2 === 0) {
      even.push(num);
    }
  }
  return even;
};
const result = isEvenNum([1, 2, 3, 4, 5, 6]);
console.log(result);
