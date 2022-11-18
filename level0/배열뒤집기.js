//1. 원본배열이 변경된다.
function solution(num_list) {
  const result = num_list.reverse();
  return result;
}

//2. 전체연산자 사용으로 원본배열이 유지된다
function solution(num_list) {
  const result = [...num_list].reverse();
  return result;
}
