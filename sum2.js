// 나의 풀이

const n = "101112131415";
const arr = n.split("");
let result = 0;

for (let i = 0; i < arr.length; i++) {
  result = result + Number(arr[i]);
}
console.log(result);

// 강의 풀이
let ars = [];
let total = 0;
let a = 21;
for (let i = 1; i <= a; i++) {
  ars[i] = i;
}

ars.forEach((n) => {
  while (n) {
    total = total + (n % 10);
    n = Math.floor(n / 10);
  }
});
console.log(total);
