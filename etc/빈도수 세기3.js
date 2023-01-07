// Frequency Counter
// Multiple Pointers - areThereDuplicates

function areThereDuplicates(...args) {
  let result = {};
  for (let i = 0; i < args.length; i++) {
    if (!result[args[i]]) {
      result[args[i]] = 1;
      console.log(result);
    } else {
      return true;
    }
  }
  return false;
}

function areThereDuplicates(...args) {
  let set = new Set(args);
  console.log(set.size);
  return set.size !== args.length;
}

// console.log(areThereDuplicates(1, 2, 3)); // false
// console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
