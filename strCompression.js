// Problem: String Compression (Interview Level)

// Write a function compressString(str) with the following rules:

// Use only JavaScript

// Compress the string by counting consecutive characters

// Return the compressed string

// If the compressed string is not shorter than the original, return the original string

const compressString = (str) => {
  if (str.length === 0) return str;

  let compressed = "";
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      compressed += str[i - 1] + count;
      count = 1;
    }
  }

  return compressed.length < str.length ? compressed : str;
};

console.log(compressString("aaabbcccc"));
// Output: "a3b2c4"

console.log(compressString("abc"));
// Output: "abc"

console.log(compressString("aabcccccaaa"));
// Output: "a2b1c5a3"
