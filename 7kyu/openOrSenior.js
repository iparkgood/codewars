function openOrSenior(data) {
  return data.map((el) => {
    if (el[0] >= 55) {
      if (el[1] > 7) {
        return "Senior";
      }
      return "Open";
    }
    return "Open";
  });
}

/*
To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
*/

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
); //['Open', 'Senior', 'Open', 'Senior']
console.log(
  openOrSenior([
    [3, 12],
    [55, 1],
    [91, -2],
    [54, 23],
  ])
); //['Open', 'Open', 'Open', 'Open']
console.log(
  openOrSenior([
    [59, 12],
    [55, -1],
    [12, -2],
    [12, 12],
  ])
); //['Senior', 'Open', 'Open', 'Open']
