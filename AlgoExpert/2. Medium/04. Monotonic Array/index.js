// redoing Medium exercises
// input => numbers: Number[]
// output => Boolean | '-1' | '+1'
// we should tell if our array is monotonic which means if it is only increasing or decreasing

function isMonotonic(numbers) {
  let dir = 0;
  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];
    const prevNum = numbers[i - 1];
    const newDir = currentNum - prevNum;
    if (!dir || (dir < 0 && newDir < 0) || (dir > 0 && newDir > 0)) {
      dir = newDir;
      continue;
    } else {
      return false;
    }
  }

  return Math.sign(dir);
}
isMonotonic([2, 3, 3, 4, 5, 6, 2]);
isMonotonic([1, 1, -1, -2, -10, -55, -853]);

// AlgoExpert's solution
// O(n) time | O(1) space - where n is the length of the array
function isMonotonic(array) {
  if (array.length <= 2) return true;
  let direction = array[1] - array[0];
  for (let i = 2; i < array.length; i++) {
    if (direction === 0) {
      direction = array[i] - array[i - 1];
      continue;
    }
    if (breaksDirection(direction, array[i - 1], array[i])) {
      return false;
    }
  }
  return true;
}

function breaksDirection(direction, previousInt, currentInt) {
  const difference = currentInt - previousInt;
  if (direction > 0) return difference < 0;
  return difference > 0;
}

// O(n) time | O(1) space
function isMonotonic(array) {
  let isNonDecreasing = true;
  let isNonIncreasing = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) isNonDecreasing = false;
    if (array[i] > array[i - 1]) isNonIncreasing = false;
  }
  return isNonDecreasing || isNonIncreasing;
}
