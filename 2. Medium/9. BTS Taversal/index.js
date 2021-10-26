// my solutions
// O(n)
function bstInOrder(headNode, arr = []) {
  if (!headNode) return;

  bstInOrder(headNode.left, arr);
  arr.push(headNode.value);
  bstInOrder(headNode.right, arr);

  return arr;
}

function bstPreOrder(headNode, arr = []) {
  if (!headNode) return;

  arr.push(headNode.value);
  bstInOrder(headNode.left, arr);
  bstInOrder(headNode.right, arr);

  return arr;
}

function bstPostOrder(headNode, arr = []) {
  if (!headNode) return;
  bstInOrder(headNode.left, arr);
  bstInOrder(headNode.right, arr);
  arr.push(headNode.value);
  return arr;
}
