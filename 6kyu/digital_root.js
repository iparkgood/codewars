function digital_root(n) {
  const arr = [...n.toString()].map((num) => +num);
  let sum = arr.reduce((total, el) => total + el, 0);

  while (sum.toString().length !== 1) {
    sum = [...sum.toString()].reduce((total, el) => total + +el, 0);
  }

  return sum;
}

console.log(digital_root(16)); // 7
console.log(digital_root(45679)); // 6
