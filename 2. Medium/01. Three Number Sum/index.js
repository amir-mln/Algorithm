// my solution
// time complexity: terrible (probably O(n2))
// space complexity: terrible

function twoNumSum(arr, target) {
  const nums = {};
  for (const num of arr) {
    const potentialMatch = target - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}

function threeNumSum(arr, target) {
  const sums = [];
  const sumsNums = {};

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    const candidate = target - currentNum;
    const copy = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const twoNums = twoNumSum(copy, candidate);
    if (
      twoNums.length &&
      (!sumsNums[twoNums[0]] || !sumsNums[twoNums[1]] || !sumsNums[currentNum])
    ) {
      sumsNums[twoNums[0]] = true;
      sumsNums[twoNums[1]] = true;
      sumsNums[currentNum] = true;
      sums.push([...twoNums, currentNum]);
    }
  }

  return sums;
}

threeNumSum([12, 3, 1, 2, -6, 5, -8, 6], 0);

//algoExpert's solution
// O(n^2) time | O(n) space
function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];
      if (currentSum === targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }
  return triplets;
}

threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0);
