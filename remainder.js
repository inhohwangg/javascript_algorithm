// 몫과 나머지
//나의 풀이

let n = ["10", "2"];

let result = parseInt(n[0], 10) / parseInt(n[1], 10);
let remainder = parseInt(n[0], 10) % parseInt(n[1], 10);

console.log(`몫${result}과  나머지${remainder}`);

// 강의 풀이

let num = ["7", "2"];

let val1 = Math.floor(parseInt(num[0], 10) / parseInt(num[1], 10));

let val2 = parseInt(num[0], 10) % parseInt(num[1], 10);

console.log(val1, val2);
