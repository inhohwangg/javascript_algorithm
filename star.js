const level = 5;
let con = "";

for (let i = 0; i < level; i++) {
  let con = "";
  for (let k = 1; k <= level - i; k++) {
    con = con + " ";
  }
  for (let j = 0; j <= i * 2; j++) {
    con = con + "*";
  }
  // console.log(con);
}

// 출력
//     *
//    ***
//   *****
//  *******
// *********

// 느낀점 = 이중 포문의 활용방법을
// 아직도 나는 잘 모르고있는거같다.
// 그리고 멍청한게 잘하지도 못하면서 계산하는걸 싫어하니....

// 그런 마음으로 다시 풀어봤당....
let level2 = 5;
for (let i = 0; i < level; i++) {
  let tree = "";
  for (let k = 0; k < level - i; k++) {
    tree = tree + " ";
  }
  for (let j = 0; j <= i * 2; j++) {
    tree = tree + "*";
  }
  console.log(tree);
}
