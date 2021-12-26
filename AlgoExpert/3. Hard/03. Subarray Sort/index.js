// input=> numbers: [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]
// output=> [3, 9]

// we receive a half-sorted array we should return the starting index and ending index of smallest subarray of input array; which when gets sorted, the whole array becomes sorted.

// we need to first find the smallest and largest anomalies (a number that has made the array unsorted). then we find the appropriate place for our smallest and largest anomalies and simply return the index of those places

// my implementation based on video explanation
function findSubarray(numbers) {
  const anomalies = [];
  let smallestIndex, smallest, largestIndex, largest;
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num < numbers[i - 1] || num > numbers[i + 1]) anomalies.push(num);
  }
  smallest = Math.min(...anomalies);
  largest = Math.max(...anomalies);

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num > smallest) {
      smallestIndex = i;
      break;
    }
  }

  for (let i = numbers.length - 1; i > 0; i--) {
    const num = numbers[i];
    if (num < largest) {
      largestIndex = i;
      break;
    }
  }

  return [smallestIndex, largestIndex];
}

findSubarray([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]);

// AlgoExpert solution
function subarraySort(numbers) {
  let minOutOfOrder = Infinity;
  let maxOutOfOrder = -Infinity;
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (isOutOfOrder(i, num, array)) {
      minOutOfOrder = Math.min(minOutOfOrder, num);
      maxOutOfOrder = Math.max(maxOutOfOrder, num);
    }
  }
  if (minOutOfOrder === Infinity) {
    return [-1, -1];
  }
  let subarrayLeftIdx = 0;
  while (minOutOfOrder >= array[subarrayLeftIdx]) {
    subarrayLeftIdx++;
  }
  let subarrayRightIdx = array.length - 1;
  while (maxOutOfOrder <= array[subarrayRightIdx]) {
    subarrayRightIdx--;
  }
  return [subarrayLeftIdx, subarrayRightIdx];
}

function isOutOfOrder(i, num, array) {
  if (i === 0) return num > array[i + 1];
  if (i === array.length - 1) return num < array[i - 1];
  return num > array[i + 1] || num < array[i - 1];
}
