// 영하네 반은 국어,수학,영어 시험을 보았습니다.
// 영하는 친구들의 평균 점수를 구해주기로 했습니다.

// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요.
// 단, 소숫점 자리는 모두 버립니다.

// 나의 풀이
const score = [20, 30, 40];
let result = score.reduce((a, b) => a + b / score.length, 0);
console.log(Math.floor(result));

// 강의 풀이
const score2 = ["70", "82", "95"];
let sum = 0;

for (let i = 0; i < score2.length; i++) {
  sum = sum + parseInt(score2[i], 10);
}

// Math.floor : 주어진 값보다 이하의 가장 큰 정수를 반환합니다.
console.log(Math.floor(sum / score2.length));
