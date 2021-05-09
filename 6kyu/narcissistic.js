function narcissistic(value) {
    const valueArr = [...value.toString()];
    const powNum = valueArr.length;
    let sum = 0;

    for (let i = 0; i < powNum; i++) {
      sum += Math.pow(+valueArr[i], powNum);
    }

    return value === sum;
}

console.log(narcissistic(7)); // true, "7 is narcissistic"
console.log(narcissistic(371)); // true, "371 is narcissistic"
