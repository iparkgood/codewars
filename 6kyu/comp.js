function comp(array1, array2) {
  if (array1 === null || array2 === null) return false;

  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);

  return array1
    .map((el1) => Math.pow(el1, 2))
    .every((el1, idx) => el1 === array2[idx]);
}

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
); // true
console.log(
  comp(
    [6, 8, 9, 0, 6, 8, 8, 4, 2, 9, 6, 5, 7],
    [16, 81, 36, 64, 4, 81, 0, 25, 65, 64, 36, 49, 36]
  )
); //false
