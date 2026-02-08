// ( and ) work as normal parentheses
// * can act as:
// (
// )
// or an empty string
// The string is valid if parentheses can be balanced

const isValidParentheses = (str) => {
  let minOpen = 0;
  let maxOpen = 0;

  for (let ch of str) {
    if (ch === "(") {
      minOpen++;
      maxOpen++;
    } else if (ch === ")") {
      minOpen--;
      maxOpen--;
    } else if (ch === "*") {
      minOpen--; // treat as ')'
      maxOpen++; // treat as '('
    }

    if (maxOpen < 0) return false;
    if (minOpen < 0) minOpen = 0;
  }

  return minOpen === 0;
};

isValidParentheses("()"); // true
isValidParentheses("(*)"); // true
isValidParentheses("(*))"); // true
isValidParentheses("(*()"); // false
