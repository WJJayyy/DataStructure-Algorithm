function solution(array) {
  array.sort((a, b) => {
    return a - b;
  });
  return array[Math.floor(array.length / 2)];
}
ddd