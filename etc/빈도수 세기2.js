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
  // console.log(sameFrequency('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
  console.log(sameFrequency(182, 281)); // true
  // console.log(sameFrequency(34, 14)); // false
  // console.log(sameFrequency(3589578, 5879385)); // true
  // sameFrequency(22,222) // false
  