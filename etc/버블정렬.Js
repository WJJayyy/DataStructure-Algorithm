// ES5
function swap_(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function bubbleSort_(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    console.log("ONE PASS COMPLETE!");
    if (noSwaps) break;
  }
  return arr;
}
console.log("1", bubbleSort_([37, 45, 29, 8]));

// ES2015(ES6)
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
console.log("2", bubbleSort([37, 45, 29, 8]));

//최적화
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true; // 외부 for 문 돌 때마다 이전 swap 기록 초기화
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false; // 이번 순회에서 swap했다면 false 할당
      }
    }
    console.log("one pass complete");
    console.log(noSwaps);
    if (noSwaps) break; // 지난 번 순회에서 swap하지 않았다면(true) 루프를 break;
  }
  return arr;
}

const array = [9, 1, 2, 3, 4, 5];
console.log(bubbleSort(array));
