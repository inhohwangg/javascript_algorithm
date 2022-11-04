const day = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];
const month = "5";
const date = "5";

function solution(a, b) {
  const theDay = new Date(`2020-${a}-${b}`);
  // getDay() method 는 해당 요일을 숫자로 반환한다.
  console.log(day[theDay.getDay()]);
}

solution(month, date);

// getDay 쓰니까 너무 간단하다....
