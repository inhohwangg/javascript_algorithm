const n = [
  "원범",
  "원범",
  "혜원",
  "혜원",
  "혜원",
  "혜원",
  "유진",
  "유진",
  "유진",
  "유진",
  "유진",
];
let result = {};
let winner = "";

for (let i = 0; i < n.length; i++) {
  let val = n[i];
  result[val] = result[val] === undefined ? 1 : result[val] + 1;
  console.log(result);
}

winner = Object.keys(result).reduce((a, b) => {
  return result[a] > result[b] ? a : b;
});

console.log(winner);
console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.}`);
