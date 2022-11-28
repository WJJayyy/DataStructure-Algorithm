function solution(my_string, n) {
  let a = "";
  let answer = [...my_string];
  for (let i = 0; i < answer.length; i++) {
    a += answer[i].repeat(n);
  }
  return a;
}

