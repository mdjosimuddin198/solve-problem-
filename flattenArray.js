const flattenArray = (arr) => {
  const result = [];

  const flatten = (item) => {
    for (let el of item) {
      if (Array.isArray(el)) {
        flatten(el);
      } else {
        result.push(el);
      }
    }
  };

  flatten(arr);
  return result;
};

console.log(flattenArray([1, [2, [3, 4], 5], 6]));
