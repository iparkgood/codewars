function solution(str) {
  let result = [];

  if (str === "") return [];

  if (str.length % 2 !== 0) {
    str = str.concat("_");
  }

  for (let i = 0; i < str.length; i += 2) {
    result.push(str[i] + str[i + 1]);
  }

  return result;
}

console.log(solution("abcdef")); // ["ab", "cd", "ef"]
console.log(solution("abcdefg")); // ["ab", "cd", "ef", "g_"]
console.log(solution("")); // []
