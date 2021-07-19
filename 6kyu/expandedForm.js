function expandedForm(num) {
  let numArr = [...num.toString()];

  for (let i = 0; i < numArr.length; i++) {
    numArr[i] += "0".repeat(numArr.length - i - 1);
  }

  return numArr.filter((num) => !num.startsWith("0")).join(" + ");
}

console.log(expandedForm(12)); //'10 + 2'
console.log(expandedForm(42)); //'40 + 2'
console.log(expandedForm(70304)); //'70000 + 300 + 4'
