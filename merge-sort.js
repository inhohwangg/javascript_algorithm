function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  // [1,7,4,5,9,2,3,6]
  const mid = Math.floor(arr.length / 2); // mid = 4
  const left = arr.slice(0, mid); //left = 0,4 0번 부터 4번배열까지 [1,7,4,5]
  const right = arr.slice(mid); //right = 4 4번부터 마지막배열까지 [9,2,3,6]
  // left , right 를 합치는 부분
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  // left.length , right.length 이 존재하면 반복시작
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

const array = [1, 7, 4, 5, 9, 2, 3, 6];

console.log(mergeSort(array));
