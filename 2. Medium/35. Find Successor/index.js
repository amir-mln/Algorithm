function findSuccessor(headNode, target) {
  const sortedValues = bstInOrder(headNode);
  return sortedValues[sortedValues.indexOf(target) + 1];
}

function bstInOrder(headNode, arr = []) {
  if (!headNode) return;

  bstInOrder(headNode.left, arr);
  arr.push(headNode.value);
  bstInOrder(headNode.right, arr);

  return arr;
}
