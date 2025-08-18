let word = "programming";

const isContainVowel = (str) => {
  let count = 0;
  for (let c of str) {
    if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
      count++;
    }
  }
  return count;
};

let result = isContainVowel(word);

console.log(result);
