// my solution based on AlgoExpert's tutorial
// O(n): time O(1): space
function maxSumInSubArrays(array) {
  let sum = 0;
  let maxSum = 0;
  for (const num of array) {
    sum = Math.max(sum + num, num);
    if (sum > maxSum) maxSum = sum;
  }
  return maxSum;
}

maxSumInSubArrays([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]);

// extra work, this is not asked by the question
// this one returns the sub array which sum of its members is the max sum
// O(n): time
function subArrayWithMaxSum(array) {
  // prettier-ignore
  let sum = maxSum = 0;
  let start = 0;
  let end = 0; // or 1?
  for (let i = 0; i < array.length; i++) {
    const currentSum = array[i] + sum;

    sum = Math.max(array[i], currentSum);

    if (currentSum == 0) start = i;

    if (sum > maxSum) {
      maxSum = sum;
      end = i;
    }
  }

  return array.slice(start, end + 1);
}

subArrayWithMaxSum([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]);

// extra work, this is not asked by the question
// this one also returns all the sub arrays which the sum of their members is equal to the target sum
function allSubArraysWithSum(array, targetSum) {
  let sum = 0;
  let start = 0;
  let subArrays = [];
  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i];
    const currentSum = sum + array[i];

    sum = Math.max(currentSum, currentNum);

    if (currentSum == 0) {
      start = i;
    }

    if (sum == targetSum) {
      subArrays.push(array.slice(start, i + 1));
      sum -= array[start];
      start += 1;
    }
  }

  return subArrays;
}

allSubArraysWithSum([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -4, 5], 19);
