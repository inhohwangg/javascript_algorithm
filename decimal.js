// 나의 풀이

const n = 1.3;

n % 1 === 0 ? console.log("YES") : console.log("NO");

console.log(n);

// 강의 풀이

const prime = 1;

function primeFunc(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return console.log("no");
    }
  }
  if (n === 1) {
    return console.log("no");
  }
  console.log("yes");
}

primeFunc(prime);
