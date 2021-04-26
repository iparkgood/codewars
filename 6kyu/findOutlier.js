function findOutlier(integers) {
  const oddArr = integers.filter((int) => int % 2 !== 0);
  const evenArr = integers.filter((int) => int % 2 === 0);

  return evenArr.length === 1 ? evenArr[0] : oddArr[0];
}

console.log(findOutlier([0, 1, 2])); // 1
console.log(findOutlier([1, 2, 3])); // 2
console.log(findOutlier([2, 6, 8, 10, 3])); // 3
console.log(findOutlier([0, 0, 3, 0, 0])); // 3
console.log(findOutlier([1, 1, 0, 1, 1])); // 0
