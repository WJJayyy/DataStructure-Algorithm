//1.
function solution(slice, n) {
  if (n % slice != 0) {
    return Math.ceil(n / slice);
  } else {
    return n / slice;
  }
}

//2.
function solution(slice, n) {
  return Math.floor((n - 1) / slice) + 1;
}
