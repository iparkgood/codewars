function longest(s1, s2) {
  let longestArr = [];
  const twoArrs = (s1 + s2).split("");

  for (let i = 0; i < twoArrs.length; i++) {
    if (twoArrs[i] !== twoArrs[i + 1] && !longestArr.includes(twoArrs[i])) {
      longestArr.push(twoArrs[i]);
    }
  }

  return longestArr.sort().join("");
}

console.log(longest("aretheyhere", "yestheyarehere")); //"aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")); //"abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions")); //"acefghilmnoprstuy"
