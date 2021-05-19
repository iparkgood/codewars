function rgb(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}

function toHex(color) {
  if (color < 0) return "00";
  if (color > 255) return "FF";

  return ("0" + color.toString(16).toUpperCase()).slice(-2);
}

console.log(rgb(0, 0, 0)); // '000000'
console.log(rgb(0, 0, -20)); // '000000'
console.log(rgb(300, 255, 255)); // 'FFFFFF'
console.log(rgb(6, -4, 292)); // '0600FF'
