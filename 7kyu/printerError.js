function printerError(s) {
  const numerator = s.match(/[^a-m]/g) !== null ? s.match(/[^a-m]/g).length : "0";

  return numerator + "/" + s.length;
}

var s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
console.log(printerError(s)); //"3/56"

//numerator is the number of errors(not from a-m)
//denominator the length of the control string
