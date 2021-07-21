function rot13(message) {
  const dictionary = {
    a: "n",
    A: "N",
    b: "o",
    B: "O",
    c: "p",
    C: "P",
    d: "q",
    D: "Q",
    e: "r",
    E: "R",
    f: "s",
    F: "S",
    g: "t",
    G: "T",
    h: "u",
    H: "U",
    i: "v",
    I: "V",
    j: "w",
    J: "W",
    k: "x",
    K: "X",
    l: "y",
    L: "Y",
    m: "z",
    M: "Z",
    n: "a",
    N: "A",
    o: "b",
    O: "B",
    p: "c",
    P: "C",
    q: "d",
    Q: "D",
    r: "e",
    R: "E",
    s: "f",
    S: "F",
    t: "g",
    T: "G",
    u: "h",
    U: "H",
    v: "i",
    V: "I",
    w: "j",
    W: "J",
    x: "k",
    X: "K",
    y: "l",
    Y: "L",
    z: "m",
    Z: "M",
  };

  let ciphered = "";

  for (let i = 0; i < message.length; i++) {
    if (dictionary[message[i]]) {
      ciphered += dictionary[message[i]];
    } else {
      ciphered += message[i];
    }
  }

  return ciphered;
}

console.log(rot13("test")); //"Input: test , Expected Output: grfg , Actual Output: " + rot13("test")
console.log(rot13("Test")); //"Input: Test , Expected Output: Grfg , Actual Output: " + rot13("Test")
