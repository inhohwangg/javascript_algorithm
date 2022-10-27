//원의 반지름 구하기
//공식 반지름(r) * 반지름(r) * 3.14

//나의 풀이

const a = 2;

const result = a * a * 3.14;

console.log(result);

//강의 풀이
function solution(n) {
  return n * n * 3.14;
}
console.log(solution(5));
