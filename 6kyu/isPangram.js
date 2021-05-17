function isPangram(string) {
  const alpabets = [..."abcdefghijklmnopqrstuvwxyz"];

  return alpabets.every((a) => string.toLowerCase().includes(a));
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true
console.log(isPangram("This is not a pangram.")); // false
