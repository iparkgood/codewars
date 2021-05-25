function anagrams(word, words) {
  const sorted = [...word].sort().join("");

  return words.filter((w) => [...w].sort().join("") === sorted);
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])); //['aabb', 'bbaa']
console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"])); //['carer', 'racer']
console.log(anagrams("laser", ["lazing", "lazy", "lacer"])); //[]
