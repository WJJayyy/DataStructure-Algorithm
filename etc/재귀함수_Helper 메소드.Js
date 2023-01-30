//1-1 재귀함수
function collectOddValues(arr) {
  let result = [];
  function helper(helperInput) {
    console.log(helperInput);
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

let values = collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(values);

//1-2
function collectOddValues_(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues_(arr.slice(1)));
  return newArr;
}
console.log(collectOddValues_([1, 2, 3, 4, 5]));
// [1,3,5]
    [1].concat(collectOddValues_[(2, 3, 4, 5)]);
    // [1].concat([3,5]) = [1,3,5]
        [].concat(collectOddValues_[(3, 4, 5)]);
        // [].concat([3,5]) = [3,5]
            [3].concat(collectOddValues_[(4, 5)]);
            // [3].concat([5]) = [3,5]
                [].concat(collectOddValues_[5]);
                // [].concat([5]) = [5]
                    [5].concat(collectOddValues_([]));
                    // [5].concat([]) = [5]
