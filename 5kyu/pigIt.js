function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + "ay";
  });
}

console.log(pigIt("Pig latin is cool")); //'igPay atinlay siay oolcay'
console.log(pigIt("This is my string")); //'hisTay siay ymay tringsay'
