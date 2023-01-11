//Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false


function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  let result = {};
  if (strNum1.length !== strNum2.length) return false;
  for (let i = 0; i < strNum1.length; i++) {
    let val = strNum1[i];
    result[val] ? result[val]++ : (result[val] = 1);
  }
  console.log(result);
  for (let i = 0; i < strNum2.length; i++) {
    let val = strNum2[i];
    if (result[val]) {
      result[val]--;
    } else {
      return false;
    }
  }
  console.log(result);
  return true;
}
console.log(sameFrequency("amama", "aaamn")); // false
// console.log(sameFrequency(182, 281)); // true
// console.log(sameFrequency(34, 14)); // false
// console.log(sameFrequency(3589578, 5879385)); // true
// sameFrequency(22, 222); // false
