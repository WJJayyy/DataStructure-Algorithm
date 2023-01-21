//반복문
function factorial_(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    console.log(total);
    total *= i;
  }
  return total;
}

console.log(factorial_(3));

//재귀함수
function factorial(num) {
  console.log(num);
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(3));
