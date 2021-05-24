function bouncingBall(h, bounce, window) {
  let count = 0;

  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;

  while (h > window) {
    count++;
    h = h * bounce;

    if (h > window) {
      count++;
    }
  }

  return count;
}

console.log(bouncingBall(3.0, 0.66, 1.5)); //3
console.log(bouncingBall(30.0, 0.66, 1.5)); //15
