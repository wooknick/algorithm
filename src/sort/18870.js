const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const X = input[1].split(" ").map(Number);
const sortedX = [...new Set(X)].sort((a, b) => a - b);
let answer = "";
for (let i = 0; i < N; i++) {
  answer += " " + search(0, sortedX.length - 1, X[i]);
}

function search(left, right, target) {
  const mid = Math.floor((left + right) / 2);
  if (sortedX[mid] < target) {
    const newLeft = mid + 1;
    return search(newLeft, right, target);
  } else if (target < sortedX[mid]) {
    const newRight = mid;
    return search(left, newRight, target);
  } else {
    return mid;
  }
}

console.log(answer.trim());
