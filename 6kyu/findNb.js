function findNb(m) {
  let sum = 0;
  let i = 1;

  while (sum < m) {
    sum += i ** 3;

    if (sum === m) {
      return i;
    }

    i++;
  }

  return -1;
}

console.log(findNb(4183059834009)); // 2022
console.log(findNb(24723578342962)); // -1
console.log(findNb(135440716410000)); // 4824
console.log(findNb(40539911473216)); // 3568
