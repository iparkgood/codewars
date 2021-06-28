function inArray(array1, array2) {
  let result = [];

  for (let i = 0; i < array2.length; i++) {
    for (let j = 0; j < array1.length; j++) {
      if (array2[i].includes(array1[j]) && !result.includes(array1[j])) {
        result.push(array1[j]);
      }
    }
  }

  return result.sort();
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
a11 = ["xyz", "live", "strong"];
console.log(inArray(a11, a2)); //["live", "strong"]

a12 = ["live", "strong", "arp"];
console.log(inArray(a12, a2)); //["arp", "live", "strong"]

a13 = ["tarp", "mice", "bull"];
console.log(inArray(a13, a2)); //[]
