function solution(str, ending) {
  //   if (ending.length === 0) return true;
  //   return str.slice(-ending.length) === ending;
  return str.endsWith(ending);
}

console.log(solution("abcde", "cde")); //true
console.log(solution("abcde", "abc")); //false
console.log(solution("abc", ""));
