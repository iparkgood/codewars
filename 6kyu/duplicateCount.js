function duplicateCount(text) {
  let dupes = [];
  let textLower = text.toLowerCase();

  for (let i = 0; i < textLower.length; i++) {
    for (let j = i + 1; j < textLower.length; j++) {
      !dupes.includes(textLower[j]) && textLower[i] === textLower[j]
        ? dupes.push(textLower[j])
        : dupes;
    }
  }

  return dupes.length;
}

console.log(duplicateCount(""));
console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde")); //a, b -> 2
console.log(duplicateCount("aabBcde")); //a, b -> 2
console.log(duplicateCount("Indivisibility")); //i -> 1
console.log(duplicateCount("Indivisibilities")); //i, s -> 2
