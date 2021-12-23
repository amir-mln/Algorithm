// my solution
// O(n2)
function findIt(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(num - arr[i]) && arr[i] != num - arr[i]) {
      return [arr[i], num - arr[i]];
    }
  }
}

findIt([3, 5, -4, 8, 11, -1, 1, 6], 10);

// AlgoExper's solutiosn
// O(n) time | O(n) space
function twoNumberSum(array, targetSum) {
  const nums = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}

// O(nlog(n)) | O(1) space
function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}
