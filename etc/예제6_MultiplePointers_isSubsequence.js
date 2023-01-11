// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

function isSubsequence(str1, str2) {
  if (str1.length > str2.length) {
    return false;
  }
  let i = 0;
  let j = 0;
  while (i < str1.length && j < str2.length) {
    let char1 = str1[i];
    let char2 = str2[j];
    if (char1 === char2) {
      i++;
    }
    j++;
    console.log(char1, char2);
    console.log(i, j);
  }
  if (i === str1.length) return true;
  else return false;
}

// console.log(isSubsequence("hello", "hello world")); // true
// console.log(isSubsequence_("hello", "hello world")); // true
// console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
// console.log(isSubsequence("abc", "acb")); // false (order matters)
