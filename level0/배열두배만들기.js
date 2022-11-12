//1.
function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    answer[i] = numbers[i] * 2;
  }
  return answer;
}

//2.
function solution(numbers) {
  return numbers.map((n) => n * 2);
}
