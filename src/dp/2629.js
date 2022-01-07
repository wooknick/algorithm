const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const weight = input[1].split(" ").map(Number);
const ball = input[3].split(" ").map(Number);
let weightSum = 0;
for (let i = 0; i < N; i++) {
  weightSum += weight[i];
}

const dp = new Array(weightSum + 1).fill(false);
dp[weight[0]] = true;

for (let i = 1; i < weight.length; i++) {
  const prev = [];
  for (let j = 1; j < dp.length - weight[i]; j++) {
    if (dp[j]) {
      prev.push(j);
    }
  }
  for (let j = 0; j < prev.length; j++) {
    if (prev[j] > weight[i]) {
      dp[prev[j] - weight[i]] = true;
    } else {
      dp[weight[i] - prev[j]] = true;
    }
    dp[weight[i] + prev[j]] = true;
  }
  dp[weight[i]] = true;
}

const answer = ball.map((b) => (dp[b] ? "Y" : "N")).join(" ");
console.log(answer);
