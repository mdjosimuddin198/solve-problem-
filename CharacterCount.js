const CountCharacter = (text) => {
  const count = {};

  for (let char of text) {
    count[char] = (count[char] || 0) + 1;
  }

  return count;
};

const result = CountCharacter("josim");
console.log(result);
