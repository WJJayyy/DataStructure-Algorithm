//1.
function solution(n, k) {
  var answer = 0;
  if (n < 10) {
    answer += 12000 * n + 2000 * k;
  } else if (n >= 10 && n % 10 !== 0) {
    let remainder = n % 10;
    let result = (n - remainder) / 10;
    answer += 12000 * n + 2000 * (k - result);
  } else if (n >= 10 && n % 10 == 0) {
    answer += 12000 * n + 2000 * k - 2000 * (n / 10);
  }
  return answer;
}

//2.
function solution(n, k) {
  return n * 12000 + (k - Math.floor(n / 10)) * 2000;
}
