// 나의 풀이
// 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.
const n = "10 11 8 7 6 5 4 3 2 1";
const change = n.split(" ");
console.log(Math.max(...change));

// 강의 풀이
let result = "10 11 15 7 6 5 4 3 2 1";
result = result.split(" ").map((n) => {
  return parseInt(n, 10);
});
result.sort((a, b) => a - b);
console.log(result.pop());
