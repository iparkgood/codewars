function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) return [];

  return input.reduce(
    (acc, el) => {
      if (el > 0) acc[0]++;
      if (el < 0) acc[1] += el;

      return acc;
    },
    [0, 0]
  );
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);
