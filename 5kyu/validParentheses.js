function validParentheses(parens) {
  let count = 0;

  for (let i = 0; i < parens.length; i++) {
    parens[i] === "(" ? count++ : count--;
    if (count < 0) {
      return false;
    }
  }

  return count === 0;
}

console.log(validParentheses("()")); //true
console.log(validParentheses(")(()))")); //false
