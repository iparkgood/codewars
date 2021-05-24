function dirReduc(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") ||
      (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") ||
      (arr[i] === "WEST" && arr[i + 1] === "EAST") ||
      (arr[i] === "EAST" && arr[i + 1] === "WEST")
    ) {
      arr.splice(i, 2);
      i -= 2;
    }
  }

  return arr;
}

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
); // ["WEST"]
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])); // ["NORTH", "WEST", "SOUTH", "EAST"]
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])); // []
