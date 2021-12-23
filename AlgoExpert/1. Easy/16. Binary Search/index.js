// my solution
function binarySearch(sortedArr, num) {
  let leftIndex = 0;
  let rightIndex = sortedArr.length - 1;

  while (rightIndex != leftIndex) {
    const halfIndex = Math.floor((rightIndex + leftIndex) / 2);
    const halfNum = sortedArr[halfIndex];
    if (halfNum == num) {
      return halfIndex;
    }
    if (halfNum > num) {
      rightIndex = halfIndex;
      continue;
    }
    if (halfNum < num) {
      leftIndex = halfIndex;
      continue;
    }
  }

  return rightIndex;
}

binarySearch([0, 1, 21, 33, 42, 48, 56, 58, 73, 84], 33);
