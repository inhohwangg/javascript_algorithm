// function sortValidation(n) {
//   let sortResult = n.sort((a, b) => a - b);
//   console.log("sortResult: ", sortResult);
//   console.log("n:", n);
//   console.log(sortResult === n ? true : fnlse);
//   if (n === sortResult) return console.log("YES");
//   else console.log("No");
// }
// let n = [176, 156, 155, 165, 166, 169];
// console.log(sortValidation(n));

const n = "176 156 155 165 166 169";
let sorted = "";

sorted = n
  .split(" ")
  .sort((a, b) => a - b)
  .join(" ");

if (n === sorted) console.log("YES");
else console.log("NO");
