function high(x) {
  const words = x.split(" ");
  let numbers = [];

  for (let i = 0; i < words.length; i++) {
    const total = [...words[i]].reduce(
      (acc, w) => acc + (w.charCodeAt(0) - 96),
      0
    );
    numbers.push(total);
  }

  return words[numbers.indexOf(Math.max(...numbers))];
}

console.log(high("man i need a taxi up to ubud")); //'taxi'
console.log(high("what time are we climbing up the volcano")); //'volcano'
console.log(high("take me to semynak")); //'semynak'
console.log(high("aa b")); //'aa'
console.log(high("b aa")); //'b'
console.log(high("bb d")); //'bb'
console.log(high("d bb")); //'d'
console.log(high("aaa b")); //'aaa'
