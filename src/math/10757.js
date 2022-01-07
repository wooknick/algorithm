const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .trim()
  .split("\n");

const [A, B] = input[0].split(" ");

const longA = A.split("").reverse().map(Number);
const longB = B.split("").reverse().map(Number);
const longC = new Array(
  longA.length > longB.length ? longA.length : longB.length
).fill(null);

let surplus = 0;
for (let i = 0; i < longC.length; i++) {
  let sum = 0;
  if (longA.length - 1 >= i) {
    sum += longA[i];
  }
  if (longB.length - 1 >= i) {
    sum += longB[i];
  }
  sum += surplus;
  if (sum >= 10) {
    surplus = 1;
  } else {
    surplus = 0;
  }
  longC[i] = sum - surplus * 10;
}
if (surplus === 1) {
  longC.push(1);
}

console.log(longC.reverse().join(""));
