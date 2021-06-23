function deleteNth(arr, n) {
  let result = [];
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i]) && obj[arr[i]] < n) {
      obj[arr[i]]++;
    } else if (!obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] = 1;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] !== 0) {
      result.push(arr[i]);
      obj[arr[i]]--;
    }
  }

  return result;
}

console.log(deleteNth([20, 37, 20, 21], 1)); //[20,37,21]
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)); //[1, 1, 3, 3, 7, 2, 2, 2]
