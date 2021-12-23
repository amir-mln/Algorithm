// my solution
// time: O(n)
function moveToEnd(arr, num) {
  let lIndex = 0,
    rIndex = arr.length - 1;
  while (lIndex < rIndex) {
    const lValue = arr[lIndex];
    const rValue = arr[rIndex];

    if (lValue == num && rValue != num) {
      arr[lIndex] = rValue;
      arr[rIndex] = lValue;
      lIndex++;
      rIndex--;
    }
    if (rValue == num) rIndex--;
    if (lValue != num) lIndex++;
  }

  return arr;
}

moveToEnd([2, 1, 2, 2, 3, 2, 4, 1, 2], 2);
