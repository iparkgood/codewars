function divisors(integer) {
  let primes = [];

  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      primes.push(i);
    }
  }

  return primes.length !== 0 ? primes : `${integer} is prime`;
}

console.log(divisors(15)); //[3, 5])
console.log(divisors(12)); //[2, 3, 4, 6])
console.log(divisors(13)); //"13 is prime")
