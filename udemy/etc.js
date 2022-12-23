function charCount(str){
  var result = {};
  for (var i = 0; i < str.length; i++){
    var char = str[i].toLowerCase()
    console.log("char",result[char])
    if(!result[char]) {
      result[char] = 0;
      console.log("char1",result[char])
    }
    result[char]++;
    console.log("char2",result[char])
  }
  return result
}
console.log(charCount("llo"))

// function charCount(str){
//   var result = {};
//   for (var i = 0; i < str.length; i++){
//     var char = str[i].toLowerCase()
//     if(result[char] > 0){
//       result[char]++;
//       console.log("char1",result[char])
//     }
//     else {
//       result[char] = 1;
//       console.log("char2",result[char])
//     }
//   }
//   return result
// }
// console.log(charCount("hello"))