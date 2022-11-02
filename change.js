// 나의 풀이
// replace 활용
// replace("대상 문자열", "변경하고싶은 문자열")

let n = "querty";

console.log(n.includes("q") ? n.replace("q", "e") : "");

let q = "hqllo my namq is hyqwon";

console.log(q.includes("q") ? q.replaceAll("q", "e") : "");

// 강의 풀이

const word = "hqllo my namq is hyqwon";
console.log(word.split("q").join("e"));

// join 을 이렇게 활용할수 있는줄 몰랐다....
