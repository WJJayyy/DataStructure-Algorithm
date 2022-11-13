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

const arr = [1, 2, 3];

const result = arr.reduce(function add(sum, currValue) {
  return sum + currValue;
}, 0);
const average = result / arr.length;

console.log(average); // 2
