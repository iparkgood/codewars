function Xbonacci(signature, n) {
  if (n < signature.length) {
    return signature.slice(0, n);
  }

  let result = [...signature];

  for (let i = 0; i < n - signature.length; i++) {
    let sum = 0;
    for (let j = i; j < i + signature.length; j++) {
      sum += result[j];
    }
    result.push(sum);
  }

  return result;
}

console.log(Xbonacci([0, 1], 10)); //[0,1,1,2,3,5,8,13,21,34]
console.log(Xbonacci([1, 1], 10)); //[1,1,2,3,5,8,13,21,34,55]
console.log(Xbonacci([0, 0, 0, 0, 1], 10)); //[0,0,0,0,1,1,2,4,8,16]
console.log(Xbonacci([1, 0, 0, 0, 0, 0, 1], 10)); //[1,0,0,0,0,0,1,2,3,6]
console.log(Xbonacci([1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20)); //[1,0,0,0,0,0,0,0,0,0,1,1,2,4,8,16,32,64,128,256]
