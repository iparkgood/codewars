function invert(array) {
  return array.map((a) => -a);
}

console.log(invert([1, 2, 3, 4, 5])); //[-1,-2,-3,-4,-5]
console.log(invert([1, -2, 3, -4, 5])); //[-1,2,-3,4,-5]
console.log(invert([])); //[]
console.log(invert([0])); //[-0]
