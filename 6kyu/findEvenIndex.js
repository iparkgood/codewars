function findEvenIndex(arr) {
  let idx = 0;
  let sumLeft = 0;
  let sumRight = 0;
  let isFind = false;

  for (let i = 0; i < arr.length; i++) {
    sumLeft = 0;
    sumRight = 0;
    for (let j = i - 1; j >= 0; j--) {
      sumLeft += arr[j];
    }
    for (let k = i + 1; k < arr.length; k++) {
      sumRight += arr[k];
    }
    if (sumLeft === sumRight) {
      idx = i;
      isFind = true;
    }
  }

  return  isFind? idx: -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); //3, "The array was: [1,2,3,4,3,2,1] \n");
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); //1, "The array was: [1,100,50,-51,1,1] \n");
console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); //-1, "The array was: [1,2,3,4,5,6] \n");
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); //3, "The array was: [20,10,30,10,10,15,35] \n");
console.log(findEvenIndex([20,10,-80,10,10,15,35])); //0
