var maxSequence = function (arr) {
  //returns 0 if the array only includes negative numbers or empty
  if (arr.every((e) => e < 0) || !arr.length) return 0;

  let maxSum = 0;
  let currentSum = 0;
  //find maxSequence
  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(0, currentSum + arr[i]);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
};

console.log(maxSequence([])); //0
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
