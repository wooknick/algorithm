const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const N = BigInt(input[0]);
const DIVISOR = 1000000007n;
const memo = new Map();

function solve(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  if (n === 0n) {
    return 0n;
  } else if (n === 1n) {
    return 1n;
  } else {
    if (n % 2n === 0n) {
      let ret = solve(n / 2n) * (solve(n / 2n) + 2n * solve(n / 2n - 1n));
      ret %= DIVISOR;
      memo.set(n, ret);
      return ret;
    } else {
      let ret =
        solve((n - 1n) / 2n + 1n) * solve((n - 1n) / 2n + 1n) +
        solve((n - 1n) / 2n) * solve((n - 1n) / 2n);
      ret %= DIVISOR;
      memo.set(n, ret);
      return ret;
    }
  }
}

console.log(Number(solve(N)));
