const arrayPlusArray = (arr1, arr2) =>
  [...arr1, ...arr2].reduce((acc, a) => acc + a);
