const str = "hello";

const reverseStr = (str) => {
  let reversed = "";
  for (let i of str) {
    reversed = i + reversed;
  }
  return reversed;
};

let result = reverseStr(str);
console.log(result);
