const n = [
  "인호",
  "인호",
  "인호",
  "인호",
  "찬익",
  "찬익",
  "동선",
  "동선",
  "상렬",
];
let result = {};
let winner = "";

for (let i = 0; i < n.length; i++) {
  let val = n[i];
  result[val] = result[val] === undefined ? 1 : result[val] + 1;
}
winner = Object.keys(result).reduce((a, b) => {
  return result[a] > result[b] ? a : b;
});
console.log(`${winner}(이)가 총 ${result[winner]}로 반장이 되었습니다.`);

// 뭔가 reduce 개념잡는게 아직 많이 부족한거같다...
