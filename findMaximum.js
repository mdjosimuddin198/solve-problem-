const isMaximumNum = (numbers) => {
  let max = numbers[0];
  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
};

const result = isMaximumNum([5, 1, 9, 11, 3]);
console.log(result);
