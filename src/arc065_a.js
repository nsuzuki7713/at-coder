// https://atcoder.jp/contests/abc049/tasks/arc065_a
"use strict"
function Main(input) {
  let s = input.split('\n')[0];
  const target = ['dream', 'dreamer', 'erase', 'eraser'];

  while(true) {
    if (s === '') {
      console.log('YES');
      break;
    }

    if(s.endsWith('dreamer')) {
      s = s.slice(0, -7)
    }
    if(s.endsWith('dream')) {
      s = s.slice(0, -5)
      continue;
    }

    if(s.endsWith('eraser')) {
      s = s.slice(0, -6)
      continue;
    }
    if(s.endsWith('erase')) {
      s = s.slice(0, -5)
      continue;
    }
    console.log(s);
    console.log('NO');
    break;
  }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));