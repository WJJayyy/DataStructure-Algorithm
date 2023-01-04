//Sliding Window(기준점 간 이동배열 패턴 )

function maxSubarraySum(arr, num) {
  let tempSum = 0;
  let maxSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3); // 19
maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([2, 3], 3); // null
