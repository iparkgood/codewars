function digPow(n, p) {
  let sum = 0;
  const nums = [...n.toString()].map((num) => +num);

  for (let i = 0; i < nums.length; i++) {
    sum += Math.pow(nums[i], p + i);
  }

  return Number.isInteger(sum / n) ? sum / n : -1;
}

console.log(digPow(89, 1)); // 1
console.log(digPow(92, 1)); // -1
console.log(digPow(46288, 3)); // 51
