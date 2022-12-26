//1.
function solution(sides) {
  let answer = 0;
  for (let i = 0; i < sides.length; i++) {
    answer += sides[i];
  }
  let max = Math.max(...sides);
  let total = answer - max;
  if (max < total) {
    return 1;
  } else {
    return 2;
  }
}
//2.
function solution(sides) {
  sides.sort((a, b) => a - b);
  return sides[0] + sides[1] > sides[2] ? 1 : 2;
}
//3.
function solution(sides) {
  let answer = 0;
  let max = Math.max(...sides);
  let sum = sides.reduce((a, b) => a + b, 0) - max;
  return sum > max ? 1 : 2;
}
