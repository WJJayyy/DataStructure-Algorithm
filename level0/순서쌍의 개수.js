function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer += 1;
  }
  return answer;
}

function solution(n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  console.log(answer);
  return answer.length;
}

console.log(solution(20));
