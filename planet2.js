// 나의풀이

const planet = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

function solution(n) {
  if (n === "수성") return planet[0];
  else if (n === "금성") return planet[1];
  else if (n === "지구") return planet[2];
  else if (n === "화성") return planet[3];
  else if (n === "목성") return planet[4];
  else if (n === "토성") return planet[5];
  else if (n === "천왕성") return planet[6];
  else if (n === "해왕성") return planet[7];
}

console.log(solution("수성"));

// 강의 풀이
const planet2 = {
  수성: "Mercury",
  금성: "Venus",
  지성: "Earth",
  화성: "Mars",
  목성: "Jupiter",
  토성: "Saturn",
  천왕성: "Uranus",
  해왕성: "Neptune",
};

const name = "수성";
console.log(planet2[name]);
