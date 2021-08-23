function breakCamelCase(str) {
  //check if the letter is uppercase
  //if the letter is uppercase add space in front
  return [...str].map(letter => {
    if(letter === letter.toUpperCase()) return " ".concat(letter);
    return letter;
  }).join("");
}

console.log(breakCamelCase("camelCasing")); //'camel Casing', 'Unexpected result'
console.log(breakCamelCase("camelCasingTest")); //'camel Casing Test', 'Unexpected result'
