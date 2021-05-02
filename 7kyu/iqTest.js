function iqTest(numbers) {
  const odd = [];
  const even = [];

  numbers.split(" ").forEach((num, idx) => {
    num % 2 !== 0 ? odd.push(idx + 1) : even.push(idx + 1);
  });

  return odd.length === 1 ? odd[0] : even[0];
}

console.log(iqTest("2 4 7 8 10")); //3
console.log(iqTest("1 2 2")); //1
