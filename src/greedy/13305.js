const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const d = input[1].split(" ").map(BigInt);
const p = input[2].split(" ").map(BigInt);

let pos = 0;
let price = p[0];
let cost = 0n;

/**
 * 현재 위치 pos ( from: 0, to: N - 1 )
 */
// 끝에 도착할때까지 간다
while (pos < N - 1) {
  cost += d[pos] * price;
  // 다음 도시 가격이 지금보다 더 싸다면 가격 체인지
  if (p[pos + 1] < price) {
    price = p[pos + 1];
  }
  pos++;
}

console.log(cost.toString());
