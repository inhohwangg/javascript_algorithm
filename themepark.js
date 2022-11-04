// 나의 풀이

let a = Math.floor(Math.random() * 50);
let b = 300;
let member = 20;
let total = 0;
let count = 0;

for (let i = 0; i < member; i++) {
  total = total + a;
  if (total <= b) {
    count++;
  }
}
console.log("total:", total);
console.log("count:", count);

// 강의 풀이
const weightLimit = "100";
const memberCount = "5";
let count2 = 0;
let totalWeight = 0;

for (let i = 0; i < memberCount; i++) {
  totalWeight = totalWeight + parseInt("50", 10);
  if (totalWeight <= weightLimit) {
    count2++;
  }
}
console.log("count2: ", count2);
