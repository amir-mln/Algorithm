// my solution
function INSERT(val) {
  // the question itself should give us this function based on video explanation
}

function minHeightBst(arr, lIndex = 0, rIndex = arr.length - 1) {
  if (lIndex > rIndex) return;
  const targetIndex = Math.floor((rIndex + lIndex) / 2);
  INSERT(arr[targetIndex]);
  // for the left branch
  minHeightBst(arr, lIndex, targetIndex - 1);
  // for the right branch
  minHeightBst(arr, targetIndex + 1, rIndex);

  return targetIndex;
}

minHeightBst([1, 2, 5, 7, 10, 13, 14, 15, 22], 0, 8);
