function solution(num_list) {
  let evenNum = 0;
  let oddNum = 0;
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      evenNum++;
    } else {
      oddNum++;
    }
  }
  return [evenNum, oddNum];
}

