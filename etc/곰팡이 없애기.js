// 곰팡이 없애기
let basket = [
  ["양파", "곰팡이"],
  ["곰팡이", "빵", "딸기잼"],
  ["귤", "곰팡이", "곰팡이", "곰팡이", "사과"],
];

function removeGerm(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "곰팡이") {
        arr[i].splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}
