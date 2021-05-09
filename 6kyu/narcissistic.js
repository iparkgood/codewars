function narcissistic(value) {
  return (
    value ===
    [...value.toString()].reduce(
      (acc, el, idx, arr) => (acc += Math.pow(+el, arr.length)),
      0
    )
  );
}

console.log(narcissistic(7)); // true, "7 is narcissistic"
console.log(narcissistic(371)); // true, "371 is narcissistic"
