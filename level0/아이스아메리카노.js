function solution(money) {
  var answer = [];
  let num = parseInt(money / 5500);
  let change = money % 5500;
  answer.push(num, change);
  return answer;
}

function solution(money) {
  let num = 0; //최대 잔 수
  let change = 0; //잔돈

  num = parseInt(money / 5500);
  change = money % 5500;

  let answer = [num, change];

  return answer;
}
