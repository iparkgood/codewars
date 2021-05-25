function anagrams(word, words) {
  let result = [];

  const total = [...word].reduce((sum, w) => {
    return sum + w.charCodeAt();
  }, 0);

  const totals = words.map((word) => {
    return [...word].reduce((sum, w) => {
      return sum + w.charCodeAt();
    }, 0);
  });

  for (let i = 0; i < totals.length; i++) {
    if (totals[i] === total) {
      result.push(words[i]);
    }
  }

  return result;
}

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])); //['aabb', 'bbaa']
console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"])); //['carer', 'racer']
console.log(anagrams("laser", ["lazing", "lazy", "lacer"])); //[]
