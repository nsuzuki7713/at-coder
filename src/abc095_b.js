// https://atcoder.jp/contests/abc095/tasks/abc095_b
"use strict"
function Main(input) {
  const params = input.split('\n');
  const n = Number(params[0].split(' ')[0]);
  const x = Number(params[0].split(' ')[1]);
  const m = params.slice(1, -1);
  let total = 0;
  let min = Number.MAX_VALUE;
  m.forEach(value => {
    if (value === '') return;
    total += Number(value);
    min = Math.min(min, Number(value));
  });

  const remain = x - total;
  const create = Math.floor(remain / min);
  console.log(n + create);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));