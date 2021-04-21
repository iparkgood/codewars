function arrayDiff(a, b) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        a.splice(i, 1);
        i--;
      }
    }
  }

  return a;
}

console.log(arrayDiff([], [4, 5])); //[]
console.log(arrayDiff([3, 4], [3])); //[4]
console.log(arrayDiff([1, 8, 2], [])); //[1,8,2]
console.log(
  arrayDiff(
    [-6, 15, -20, -18, 16, -5, 5, 18, 2],
    [-6, -5, 5, -20, -18, 2, 18, 16, 15]
  )
); // []
