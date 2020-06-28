// https://atcoder.jp/contests/abc047/tasks/abc047_b
"use strict";
function Main(input) {
  const [basePoint, ...points] = input.trim().split("\n");
  const [W, H, N] = basePoint.trim().split(" ").map(Number);
  const field = Array(W)
    .fill()
    .map(() => Array(H).fill(1));

  for (let i = 0; i < N; i++) {
    const [x, y, a] = points[i].trim().split(" ").map(Number);
    if (a === 1) {
      for (let j = 0; j < x; j++) {
        for (let k = 0; k < H; k++) {
          field[j][k] = 0;
        }
      }
    } else if (a === 2) {
      for (let j = x; j < W; j++) {
        for (let k = 0; k < H; k++) {
          field[j][k] = 0;
        }
      }
    } else if (a === 3) {
      for (let j = 0; j < W; j++) {
        for (let k = 0; k < y; k++) {
          field[j][k] = 0;
        }
      }
    } else if (a === 4) {
      for (let j = 0; j < W; j++) {
        for (let k = y; k < H; k++) {
          field[j][k] = 0;
        }
      }
    }
  }

  const area = field.flat().reduce((acc, cur) => acc + cur, 0);
  console.log(area);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
