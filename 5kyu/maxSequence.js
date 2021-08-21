var maxSequence = function (arr) {
  //returns 0 if the array only includes negative numbers or empty
  if (arr.every((e) => e < 0) || !arr.length) return 0;

  let currentSum = 0;
  //find maxSequence
  return arr.reduce((acc, el) => {
    currentSum = Math.max(0, currentSum + el);
    return Math.max(acc, currentSum);
  }, 0);
};

console.log(maxSequence([])); //0
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
