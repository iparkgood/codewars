function validBraces(braces) {
  let stack = [];

  for (let i = 0; i < braces.length; i++) {
    if (braces[i] === "(" || braces[i] === "{" || braces[i] === "[") {
      stack.push(braces[i]);
    } else if (
      (stack[stack.length - 1] === "(" && braces[i] === ")") ||
      (stack[stack.length - 1] === "{" && braces[i] === "}") ||
      (stack[stack.length - 1] === "[" && braces[i] === "]")
    ) {
      stack.pop();
    } else return false;
  }

  return stack.length === 0;
}

console.log(validBraces("()")); //true
console.log(validBraces("[(])")); //false
