function solution(numbers) {
  let answer = numbers.sort((a, b) => a - b);
  let result = answer[answer.length - 1] * answer[answer.length - 2];
  return result;
}
