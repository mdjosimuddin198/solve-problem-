const capitalizeWords = (str) => {
  let result = "";
  let capitalizeNext = true;

  for (let char of str) {
    if (char === " ") {
      result += char;
      capitalizeNext = true;
    } else if (capitalizeNext) {
      result += char.toUpperCase();
      capitalizeNext = false;
    } else {
      result += char;
    }
  }

  return result;
};

console.log(capitalizeWords("hello world")); // "Hello World"
console.log(capitalizeWords("javascript is fun")); // "Javascript Is Fun"
