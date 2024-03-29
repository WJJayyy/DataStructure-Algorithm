function insertionSort_(arr) {
  let i, j;

  for (i = 1; i < arr.length; i++) {
    let currentVal = arr[i];

    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
    // console.log("arr", arr);
  }
  return arr;
}

console.log("1", insertionSort_([6, 3, 5, 1, 9, 4, 8, 2, 7]));

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const checkValue = arr[i];
    let left = i - 1;

    while (left >= 0 && arr[left] > checkValue) {
      arr[left + 1] = arr[left];
      left--;
    }
    arr[left + 1] = checkValue;
  }
  return arr;
};

console.log("2", insertionSort([6, 3, 5, 1, 9, 4, 8, 2, 7]));
