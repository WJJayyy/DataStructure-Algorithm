//1.
function solution(numbers) {
  const result = numbers.reduce((a, c) => a + c, 0);
  return result / numbers.length;
}

//2.
function solution(numbers) {
  const result = numbers.reduce(function (a, c) {
    return a + c;
  }, 0);
  return result / numbers.length;
}
