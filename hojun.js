let n = [97, 86, 75, 66, 55, 97, 85, 97, 97, 95];

//1위 ~ 3위를 선정해야한다.
n.sort();

let result = [];
let count = 0;

while (result.length < 4) {
  let value = n.pop();
  if (!result.includes(value)) {
    result.push(value);
  }
  count++;
}

console.log("count: ", count - 1);
console.log(result);
