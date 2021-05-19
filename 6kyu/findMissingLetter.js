function findMissingLetter(array) {
  let missing = "";

  for (let i = 0; i < array.length - 1; i++) {
    if (Math.abs(array[i].charCodeAt() - array[i + 1].charCodeAt()) > 1) {
      missing = String.fromCharCode(array[i].charCodeAt() + 1);
    }
  }

  return missing;
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"])); // 'e'
console.log(findMissingLetter(["O", "Q", "R", "S"])); // 'P'
