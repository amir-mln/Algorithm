// my solution
// does not work right
function BST(val) {
  this.value = val;
  this.left;
  this.right;
}

function minHeightBst(arr, daddy) {
  if (arr.length <= 1) return;
  const left = 0;
  const right = arr.length;
  const headIndex = Math.floor((left + right) / 2);
  const headLIndex = Math.floor((headIndex + left) / 2);
  const headRIndex = Math.floor((headIndex + right) / 2);

  if (!daddy) daddy = new BST(arr[headIndex]);

  if (arr[headLIndex] !== undefined && headLIndex !== headIndex)
    daddy.left = new BST(arr[headLIndex]);

  if (arr[headRIndex] !== undefined && headRIndex !== headIndex)
    daddy.right = new BST(arr[headRIndex]);

  minHeightBst(arr.slice(left, headIndex), daddy.left);
  minHeightBst(arr.slice(headIndex, right), daddy.right);

  return daddy;
}
minHeightBst([0, 1, 2, 3, 4, 5, 6, 7, 8], 0, 8);

// AlgoExpert's solution
// O(n) time | O(n) space - where n is the length of the array
function minHeightBst(array, startIdx, endIdx) {
  if (endIdx < startIdx) return null;
  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const bst = new BST(array[midIdx]);
  bst.left = minHeightBst(array, startIdx, midIdx - 1);
  bst.right = minHeightBst(array, midIdx + 1, endIdx);
  return bst;
}

minHeightBst([0, 1, 2, 3, 4, 5, 6, 7, 8], 0, 8);
