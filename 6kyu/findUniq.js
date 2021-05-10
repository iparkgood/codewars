function findUniq(arr) {
  const nums = {};

  for (let i = 0; i < arr.length; i++) {
    if (nums.hasOwnProperty(arr[i])) {
      nums[arr[i]]++;
    } else {
      nums[arr[i]] = 1;
    }
  }

  for (const prop in nums) {
    if (nums[prop] === 1) {
      return +prop;
    }
  }
}

console.log(findUniq([0, 1, 0])); // 1
console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
console.log(findUniq([3, 10, 3, 3, 3])); // 10
