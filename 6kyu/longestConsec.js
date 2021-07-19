function longestConsec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length || k <= 0) return "";

  let longest = "";

  for(let i = 0 ; i <= strarr.length - k ; i++) {
    let temp = strarr.slice(i, i+k).join("");
    if(temp.length > longest.length) {
      longest = temp;
    }
  }

  return longest;
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
