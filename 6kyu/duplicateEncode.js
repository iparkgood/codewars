function duplicateEncode(word) {
  let wordLowerArr = word.toLowerCase().split("");

  return wordLowerArr
    .map((word) => {
      return wordLowerArr.indexOf(word) === wordLowerArr.lastIndexOf(word)
        ? "("
        : ")";
    })
    .join("");
}

//dupe -> )
//no dupe -> (

console.log(duplicateEncode("din")); //"((("
console.log(duplicateEncode("recede")); //"()()()"
console.log(duplicateEncode("Success")); //")())())","should ignore case"
console.log(duplicateEncode("(( @")); // "))(("
