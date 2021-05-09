var moveZeros = function (arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }

  return arr;
};

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); //[ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]
console.log(
  moveZeros([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0])
); //[9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]
