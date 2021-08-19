function abbrevName(name) {
  return (
    name.slice(0, 1).toUpperCase() +
    "." +
    name.slice(name.indexOf(" ") + 1, name.indexOf(" ") + 2).toUpperCase()
  );
}

console.log(abbrevName("Sam Harris")); //"S.H"
console.log(abbrevName("Patrick Feenan")); //"P.F"
console.log(abbrevName("Evan Cole")); //"E.C"
console.log(abbrevName("P Favuzzi")); //"P.F"
console.log(abbrevName("David Mendieta")); //"D.M"
