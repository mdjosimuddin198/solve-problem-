const sumAllNums = (numbers) => {
  let total = 0;
  for (let num of numbers) {
    total = total + num;
  }
  return total;
};
const result = sumAllNums([1, 2, 3, 4, 5]);
console.log(result);
