function list(names) {
  const nameArr = names.map((name) => name.name);

  if (nameArr.length === 0 || names === []) return "";
  if (nameArr.length === 1) return nameArr[0];

  return (
    nameArr.slice(0, nameArr.length - 1).join(", ") +
    " & " +
    nameArr[nameArr.length - 1]
  );
}

console.log(
  list([
    { name: "Bart" },
    { name: "Lisa" },
    { name: "Maggie" },
    { name: "Homer" },
    { name: "Marge" },
  ])
); //'Bart, Lisa, Maggie, Homer & Marge'
console.log(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])); //'Bart, Lisa & Maggie'
console.log(list([{ name: "Bart" }, { name: "Lisa" }])); //'Bart & Lisa'
console.log(list([{ name: "Bart" }])); //'Bart'
console.log(list([])); //''
