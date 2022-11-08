// 나의 풀이

const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903",
};
let result = [];
Object.entries(people).find((name) => {
  result.push(name);
});
console.log(result.length);

// 강의 풀이
const people2 = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903",
};

let result2 = new Set();
for (let key in people) {
  result2.add(people[key]);
}

console.log(result2.size);
