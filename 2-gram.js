//나의 풀이

const n = "Javascript";
let change = n.split("");
for (let i = 0; i < n.length - 1; i++) {
  console.log(change[i] + " " + change[i + 1]);
}

// 강의 풀이
const word = "안녕하세요";

for (let j = 0; j < word.length - 1; j++) {
  console.log(word[j], word[j + 1]);
}
