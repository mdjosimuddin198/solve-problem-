const isPalindrome = (str) => {
  //   let palindrome = "";
  let reverse = "";
  for (let i of str) {
    reverse = i + reverse;
  }
  if (reverse === str) {
    return true;
  } else {
    return false;
  }
};

let result = isPalindrome("teacher");
console.log(result);
