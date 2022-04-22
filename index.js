const fs = require("fs");

let lines = fs.readFileSync("./dictionary.txt", { encoding: "utf-8"});
lines = lines.split("\n");
lines.shift();  // First line is a comment line
console.log(lines.length, "words in dictionary");
const word5 = [];
lines.forEach(w => {
  if (w.length===5) word5.push(w);
});
console.log(word5.length, "5-letter words");
lines = undefined;

const frequency = [];
const Z = "Z".charCodeAt(0), A = "A".charCodeAt(0);
let a26 = 26;
while (a26--) frequency[a26] = [ String.fromCharCode(Z-(26-a26-1)), 0, 0, 0, 0, 0, 0];
word5.forEach(w => {
  for (let pos=0; pos<w.length; pos++) {
    const code = w.charCodeAt(pos) - A;
    frequency[code][1]++;
    frequency[code][pos+2]++;
  }
})

// console.table(frequency);
frequency.sort((b, a) => a[1] - b[1]);
console.table(frequency);
frequency.forEach(r => {
  console.log(r[0], `${String(r[1]).padStart(4)}: ${String(r[2]).padStart(4)} ${String(r[3]).padStart(4)} ${String(r[4]).padStart(4)} ${String(r[5]).padStart(4)} ${String(r[6]).padStart(4)}`);
})
