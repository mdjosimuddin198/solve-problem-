const removeDuplicates = (arr) => {
  let unique = [];

  for (let num of arr) {
    let exists = false;

    for (let u of unique) {
      if (u === num) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      unique.push(num);
    }
  }

  return unique;
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates([5, 5, 5, 1, 2, 2])); // [5, 1, 2]
