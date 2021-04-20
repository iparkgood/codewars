function maskify(cc) {
  if (cc.length > 4) {
    const sharps = "#".repeat(cc.length - 4);
    return sharps.concat(cc.slice(cc.length - 4));
  } else {
    return cc;
  }
}

console.log(maskify("4556364607935616"));
console.log(maskify("1"));
console.log(maskify("11111"));
