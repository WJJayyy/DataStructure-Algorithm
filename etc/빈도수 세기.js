// function validAnagram(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   }
//   const lookup = {};
//   for (let i = 0; i < first.length; i++) {
//     let letter = first[i];
//     lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
//   }
//   console.log("1", lookup);

//   for (let i = 0; i < second.length; i++) {
//     let letter = second[i];
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }
//   console.log("2", lookup);
//   return true;
// }

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

function Anagram(first, second) {
  let result = {};
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    let char = first[i];
    result[char] ? (result[char] += 1) : (result[char] = 1);
  }
  console.log("1", result);

  for (let i = 0; i < second.length; i++) {
    let char = second[i];
    if (result[char]) {
      result[char] -= 1;
    } else {
      return false;
    }
  }
  console.log("2", result);
  return true;
}

console.log(Anagram("aaz", "zza"));
