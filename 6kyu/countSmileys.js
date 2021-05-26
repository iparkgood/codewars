function countSmileys(arr) {
  let count = 0;

  if (arr === []) return 0;

  arr.forEach((a) => {
    if (a.length === 2) {
      if (a.includes(":") || a.includes(";")) {
        if (a.includes(")") || a.includes("D")) {
          count++;
        }
      }
    } else if (a.length === 3) {
      if (a.includes(":") || a.includes(";")) {
        if (a.includes("-") || a.includes("~")) {
          if (a.includes(")") || a.includes("D")) {
            count++;
          }
        }
      }
    }
  });

  return count;
}

console.log(countSmileys([])); //0
console.log(countSmileys([":D", ":~)", ";~D", ":)"])); //4
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"])); //2
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"])); //1
console.log(countSmileys([";(", ":>", ":}", ":]"]));
