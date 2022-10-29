// 나의 풀이

// const n = [1, 2, 3, 4, 5];
// console.log(n.reverse());

// const n2 = [2, 4, 6, 7, 8];
// console.log(n2.reverse());

const n3 = "1 2 3 4 5";
console.log(n3.split(" ").reverse().join(" "));

const n4 = "2 4 6 7 8";
console.log(n4.split(" ").reverse().join(" "));

// 강의 풀이

const nums = "1 2 3 4 5";
const arr = nums.split(" ").reverse();

let reverseVal = "";

for (let i = 0; i < arr.length; i++) {
  reverseVal = reverseVal + (arr[i] + " ");
}

console.log(reverseVal);

// 내가 푼것보다 좀더 복잡한거같다
// join 메서드를 사용하면 for문을 돌리지 않아도되는데....
