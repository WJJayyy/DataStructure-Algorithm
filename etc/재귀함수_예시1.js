//1.재귀함수
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log("1", num);
  num--;
  countDown(num);
}
countDown(5);

//1-1.반복문
function countDown_(num) {
  for (let i = num; i > 0; i--) {
    console.log("2", i);
  }
  console.log("All done!");
}
countDown_(5);

//2.재귀함수
function sumRange(num) {
  console.log("3", num);
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
console.log(sumRange(4));

//2-1. 반복문
function sumRange_(num) {
  let result = 0;
  for (let i = num; i > 0; i--) {
    console.log("4", i);
    result += i;
  }
  return result;
}
console.log(sumRange_(4));
