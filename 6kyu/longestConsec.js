function longestConsec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length || k <= 0) return "";

  let obj = {};

  for (let i = 0; i < strarr.length - k + 1; i++) {
    let str = "";
    for (let j = i; j < i + k; j++) {
      str += strarr[j];
    }
    if (!obj.hasOwnProperty(str.length)) {
      obj[str.length] = [str];
    } else {
      obj[str.length].push(str);
    }
  }
  console.log(obj);
  return obj[Math.max(...Object.keys(obj))][0];
}

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
); //"abigailtheta"
console.log(
  longestConsec(
    [
      "ejjjjmmtthh",
      "zxxuueeg",
      "aanlljrrrxx",
      "dqqqaaabbb",
      "oocccffuucccjjjkkkjyyyeehh",
    ],
    1
  )
); //"oocccffuucccjjjkkkjyyyeehh"
console.log(longestConsec([], 3)); //"")
console.log(
  longestConsec(
[
  "itvayloxrp",
  "wkppqsztdkmvcuwvereiupccauycnjutlv",
  "vweqilsfytihvrzlaodfixoyxvyuyvgpck",
],
2
  )
); //"wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
console.log(
  longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2)
); //"wlwsasphmxxowiaxujylentrklctozmymu"
console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)
); //""
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)); //"ixoyx3452zzzzzzzzzzzz"
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15)
); //""
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0)); //""
