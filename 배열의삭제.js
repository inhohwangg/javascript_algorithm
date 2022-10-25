//문제 링크 : https://www.notion.so/1-94677631c7b642a7bf3a60d93137f7b5

// 다음의 배열에서 400,500을 삭제하는 code 를 입력하세요
// 나의 풀이 방식
var nums = [100, 200, 300, 400, 500];

function solution() {
  let answer = [];
  for (let i = 0; i < 3; i++) {
    // nums[i].push(answer);
    answer.push(nums[i]);
  }
  return answer;
}
console.log(solution(nums));

// 베열에서 지원해주는 내장 함수 pop()
nums.pop();
nums.pop();
console.log(nums);
