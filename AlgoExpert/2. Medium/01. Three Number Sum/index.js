// redoing Medium exercises
// input => numbers: Number[], target: Number
// output => Number[]
// we receive an array of numbers and should return three members of the input array that their addition is equal to the target

// my solution
function threeNumberSum(numbers, target, depth = 0) {
  if (depth > 3) return null;
  if (depth == 3 && target == 0) return [];

  for (const number of numbers) {
    const filteredNumbers = numbers.filter((n) => n !== number);
    const combination = threeNumberSum(
      filteredNumbers,
      target - number,
      depth + 1
    );
    if (combination) {
      return [number, ...combination];
    }
  }

  return null;
}

threeNumberSum([1, 4, -3, 6, 2, 5], 9);

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
