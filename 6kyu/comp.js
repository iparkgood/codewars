function comp(array1, array2) {
  if (array1 === null || array2 === null) return false;

  let obj1 = {};
  let obj2 = {};

  array1.forEach((el1) => {
    if (!obj1.hasOwnProperty(el1)) {
      obj1[el1] = 1;
    } else {
      obj1[el1]++;
    }
  });

  array2.forEach((el2) => {
    if (!obj2.hasOwnProperty(el2)) {
      obj2[el2] = 1;
    } else {
      obj2[el2]++;
    }
  });

  for (const prop1 in obj1) {
    for (const prop2 in obj2) {
      if (obj2[Math.pow(prop1, 2)] !== obj1[prop1]) return false;
    }
  }

  return true;
}

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
); // true
console.log(
  comp(
    [6, 8, 9, 0, 6, 8, 8, 4, 2, 9, 6, 5, 7],
    [16, 81, 36, 64, 4, 81, 0, 25, 65, 64, 36, 49, 36]
  )
); //false
