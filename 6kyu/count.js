function count(string) {
  return [...string].reduce((obj, letter) => {
    obj[letter] = (obj[letter] || 0) + 1;
    return obj;
  }, {});
}

console.log(count("aba")); //{ a: 2, b: 1 }
console.log(count("")); //{}
