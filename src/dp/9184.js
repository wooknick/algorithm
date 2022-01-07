const input = require("fs")
  .readFileSync("/dev/stdin", "utf8")
  .toString()
  .trim()
  .split("\n");

const dp = [];
for (let i = 0; i < 21; i++) {
  const t = [];
  for (let j = 0; j < 21; j++) {
    t.push(new Array(21).fill(null));
  }
  dp.push(t);
}
for (let max = 1; max < 21; max++) {
  for (let i = 0; i < max; i++) {
    for (let j = 0; j < max; j++) {
      for (let k = 0; k < max; k++) {
        if (dp[i][j][k] === null) {
          dp[i][j][k] = w(i, j, k);
        }
      }
    }
  }
}

input.forEach((i) => {
  const [a, b, c] = i.split(" ").map(Number);
  if (a === -1 && b === -1 && c === -1) {
    return;
  } else {
    console.log(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
  }
});

function w(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return 1;
  } else if (a > 20 || b > 20 || c > 20) {
    const t = w(20, 20, 20);
    return t;
  } else if (dp[a][b][c] !== null) {
    return dp[a][b][c];
  } else if (a < b && b < c) {
    const t = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
    dp[a][b][c] = t;
    return t;
  } else {
    const t =
      w(a - 1, b, c) +
      w(a - 1, b - 1, c) +
      w(a - 1, b, c - 1) -
      w(a - 1, b - 1, c - 1);
    dp[a][b][c] = t;
    return t;
  }
}
