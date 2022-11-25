function solution(numbers) {
  let answer = numbers.sort((a, b) => a - b); //  오름차순 정리
  let result = answer[answer.length - 1] * answer[answer.length - 2];
  return result;
}

