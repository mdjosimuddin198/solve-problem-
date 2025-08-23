// const reversed = (str) => {
//   let revestr = "";
//   for (let i of str) {
//     revestr = i + revestr;
//   }
//   return revestr;
// };
// const result = reversed("josim");
// console.log(result);

// 2 problem

// const isVowel = (str) => {
//   let count = 0;
//   for (let i of str) {
//     if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
//       count++;
//     }
//   }
//   return count;
// };
// const result = isVowel("josim");
// console.log(result);

// Problem 3

// const isPalindrome = (str) => {
//   let reverse = "";
//   for (let i of str) {
//     reverse = i + reverse;
//   }
//   if (reverse === str) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const result = isPalindrome("madam");
// console.log(result);

// problem 4

// const maxNum = (arr) => {
//   let max = arr[0];
//   for (let i of arr) {
//     if (i > max) {
//       max = i;
//     }
//   }
//   return max;
// };
// const result = maxNum([5, 1, 9, 3, 33, 77]);
// console.log(result);

//  problem 6

const SumOfNums = (arr) => {
  let total = 0;
  for (let i of arr) {
    total = total + i;
  }
  return total;
};

const result = SumOfNums([1, 2, 3, 4]);
console.log(result);
