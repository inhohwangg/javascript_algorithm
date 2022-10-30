// 나의 풀이

const a = "유진";
const n = "원범 원범 혜원 혜원 혜원 혜원 유진 유진";

let total = 0;
let result = n.split(" ");

for (let i = 0; i < result.length; i++) {
  if (result[i] === a) total++;
}
console.log(`${a}(이)가 총 ${total}표로 반장이 되었습니다.`);

// 강의풀이
const array = [
  "원범",
  "원범",
  "원범",
  "원범",
  "원범",
  "혜원",
  "혜원",
  "혜원",
  "혜원",
  "유진",
  "유진",
];
let result2 = {};
let winner = "";

for (let i in array) {
  let val = array[i];
  result2[val] =
    result2[val] === undefined ? 1 : (result2[val] = result2[val] + 1);
}

console.log(result2);
winner = Object.keys(result2).reduce((a, b) => {
  return result2[a] > result2[b] ? a : b;
});

console.log(winner);
console.log(`${winner} (이)가 총 ${result2[winner]}표로 반장이 되었습니다.`);
