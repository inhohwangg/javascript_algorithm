// 대소문자를 바꿔서 출력하기
// 입력값 : AAABBBcccddd
// 출력값 : aaabbbCCCDDD

// 나의 풀이

let n = "AAABBBcccddd";
let test1 = "A";
let test2 = "a";
console.log(test1.toLowerCase());
let change = n.split("");
let result = [];

for (let i = 0; i < change.length; i++) {
  if (change[i] === change[i].toUpperCase()) {
    result.push(change[i].toLowerCase());
  } else {
    result.push(change[i].toUpperCase());
  }
}
console.log(result.join(""));

// 강의풀이
const str = "AAABBBcccddd";
let arr = [];

for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i].toUpperCase()) {
    arr.push(str[i].toLowerCase());
  } else {
    arr.push(str[i].toUpperCase());
  }
}
console.log(arr.join(""));
