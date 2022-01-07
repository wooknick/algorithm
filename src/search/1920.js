const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const M = Number(input[2]);
const Target = input[3].split(" ").map(Number);

A.sort((a, b) => a - b);

const answer = Target.map((t) => search(0, N - 1, t))
  .join("\n")
  .trim();

console.log(answer);

function search(left, right, target) {
  if (left === right) {
    if (target === A[left]) {
      return 1;
    } else {
      return 0;
    }
  }
  const mid = Math.floor((left + right) / 2);
  if (A[mid] < target && target <= A[N - 1]) {
    return search(mid + 1, right, target);
  } else if (A[0] <= target && target < A[mid]) {
    return search(left, mid, target);
  } else if (target === A[mid]) {
    return 1;
  } else {
    return 0;
  }
}
