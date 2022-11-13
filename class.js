let n = "176 156 155 165 166 169";
n.split(" ").join(" ") === n.split(" ").sort().join(" ")
  ? console.log("YES")
  : console.log("NO");

let n2 = "155 156 165 166 169 176";
n2.split(" ").join(" ") === n2.split(" ").sort().join(" ")
  ? console.log("YES")
  : console.log("NO");
