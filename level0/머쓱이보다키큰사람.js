function solution(array, height) {
  let result = array.filter((el) => el > height).length;
  return result;
}
