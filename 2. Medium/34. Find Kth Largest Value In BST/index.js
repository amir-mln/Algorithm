function nthLargest(headNode, n) {
  const values = bstInOrder(headNode);
  return values[values.length - n];
}

function bstInOrder(headNode, arr = []) {
  if (!headNode) return;

  bstInOrder(headNode.left, arr);
  arr.push(headNode.value);
  bstInOrder(headNode.right, arr);

  return arr;
}
