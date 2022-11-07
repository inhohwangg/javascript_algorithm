//나의 풀이

function solution(n) {
  let a = n.toString().split("");
  let result = 0;
  for (let i = 0; i < n.length; i++) {
    result = result + Number(n[i]);
  }
  return result;
}

console.log(solution("18234"));

// 강의 풀이
// 수학적인 생긱을 필요로하는 방법이라고함...
let num = "18234";
let sum = 0;

while (num) {
  sum = sum + (num % 10);
  num = Math.floor(num / 10);
}

console.log(sum);
