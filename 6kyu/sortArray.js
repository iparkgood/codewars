function sortArray(array) {
  const odd = array.filter((el) => el % 2 !== 0).sort((a, b) => a - b);
  let idx = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      array[i] = odd[idx];
      idx++;
    }
  }

  return array;
}

console.log(sortArray([5, 3, 2, 8, 1, 4])); //[1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0])); //[1, 3, 5, 8, 0]
console.log(sortArray([])); //[]
console.log(sortArray([1, 11, 2, 8, 3, 4, 5])); //[ 1, 3, 2, 8, 5, 4, 11 ]
console.log(sortArray([ -33, -40, -43, -47, 11, 30, 15, 21, 23, 0, 23, 12, 42, 0, 42, 23, 26, 3, 3, 31 ]))
//[ -47, -40, -43, -33, 3, 30, 3, 11, 15, 0, 21, 12, 42, 0, 42, 23, 26, 23, 23, 31 ]
