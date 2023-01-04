// 문자열을 받아서 문자열의 각문자의 개수를 반환하는 함수를 작성하시오.
//1.
function charCount(str) {
  //마지막에 반활할 빈 객체를 생성
  const result = {};
  // for문을 통해 문자열 만큼 돈다
  for (let i = 0; i < str.length; i++) {
    //모든 문자를 소문자로 변환
    let char = str[i].toLowerCase();
    //영문자와 숫자인 경우만 처리하도록 정규표현식 추가
    if (/[a-z0-9]/.test(char)) {
      //만약 객체안에 해당 문자가 이미 들어었으면, 문자의 개수에 1을 더한다.
      if (result[char] > 0) {
        result[char]++;
      }
      //만약 객체에 해당 문자가 없다면, 객체에 더해주고 값을 1로 저장한다.
      else {
        result[char] = 1;
      }
    }
  }
  return result;
}
console.log(charCount("hello"));

// //2.
// function charCount(str) {
//   const result = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (!result[char]) {
//       result[char] = 0;
//     }
//     result[char]++;
//   }
//   return result;
// }
// console.log(charCount("llo"));

// //3.
// function charCount(str) {
//   const result = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     /[a-z0-9]/.test(char)
//       ? result[char] > 0
//         ? result[char]++
//         : (result[char] = 1)
//       : alert("not regexp");
//   }
//   return result;
// }
// console.log(charCount("lH79jjklo"));

// //4.
// function charCount(str) {
//   const result = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     !result[char] ? (result[char] = 1) : result[char]++;
//   }
//   return result;
// }
// console.log(charCount("llo"));
