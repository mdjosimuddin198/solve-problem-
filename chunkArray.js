const chunkArray = (arr, size) => {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
};

const result = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result);
