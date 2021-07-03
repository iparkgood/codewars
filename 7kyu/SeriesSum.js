function SeriesSum(n) {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += 1 / (3 * i + 1);
  }

  return sum.toFixed(2).toString();
}

console.log(SeriesSum(1)); //"1.00"
console.log(SeriesSum(2)); //"1.25"
console.log(SeriesSum(3)); //"1.39"
console.log(SeriesSum(4)); //"1.49"

/*
SeriesSum(1) => 1 = "1.00"
SeriesSum(2) => 1 + 1/4 = "1.25"
SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
*/
