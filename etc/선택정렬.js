//ES5
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      console.log("*****************");
      console.log(arr);
      console.log("Swapping to: ");
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
      console.log(arr);
      console.log("*****************");
    }
  }
  return arr;
}

console.log("1", selectionSort([34, 22, 10, 19, 17]));

//ES2015(ES6)
function selectionSort_(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

console.log("2", selectionSort_([0, 2, 34, 22, 10, 19, 17]));
