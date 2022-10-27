const level = 5;

for (let i = 1; i < level; i++) {
  let tree = "";
  for (let k = 1; k < level - i; k++) {
    tree = tree + " ";
  }
  for (let j = 0; j < i * 2 - 1; j++) {
    tree = tree + "*";
  }
  console.log(tree);
}
