//1.
function solution(n) {
  if (n % 7 === 0) {
    return n / 7;
  } else {
    return Math.ceil(n / 7);
  }
}

//2.
function solution(n) {
  return Math.floor((n - 1) / 7) + 1;
}


