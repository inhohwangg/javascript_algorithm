// 1 ~ 9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한줄에 출력하는 프로그램을 작성하세요

// 나의 풀이
const n = 2;

function gugudan(n) {
  let result = [];
  for (let i = 1; i < 10; i++) {
    result.push(n * i);
  }
  return result.join(" ");
}

console.log("gugudan(2): ", gugudan(9));

// 강의 풀이
const num = 2;
let result = "";

for (let i = 0; i < 9; i++) {
  result = result + num * (i + 1) + " ";
}

console.log(result);
