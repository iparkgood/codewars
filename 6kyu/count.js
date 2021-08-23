function count(string) {
  let obj = {};

  [...string].forEach((letter) => {
    obj[letter] = (obj[letter] || 0) + 1;
  });

  return obj;
}

console.log(count("aba")); //{ a: 2, b: 1 }
console.log(count("")); //{}
