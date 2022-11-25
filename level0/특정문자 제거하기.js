function solution(my_string, letter) {
  let regexAll = new RegExp(letter, "g");
  let answer = my_string.replace(regexAll, "");
  return answer;
}

//매개변수의 정규식 사용법
let pattern = "Abc";
let text = "abcabaAbcabbbcAbc";

let regexOne = new RegExp(pattern); // 일치하는 패턴 중 최초 등장하는 패턴 한 번만 찾음
let regexAll = new RegExp(pattern, "g"); // 모든 패턴을 찾음
let regexAllCase = new RegExp(pattern, "gi"); // 대소문자 구분 없이 모든 패턴을 찾음

console.log(text.replace(regexOne, "___")); // abcaba___abbbcAbc
console.log(text.replace(regexAll, "___")); // abcaba___abbbc___
console.log(text.replace(regexAllCase, "___")); // ___aba___abbbc___
console.log(text); // abcabaAbcabbbcAbc
