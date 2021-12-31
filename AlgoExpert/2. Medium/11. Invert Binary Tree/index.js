// my solution
function invertTree(headNode) {
  if (!headNode) return;
  const temp = headNode.left;
  headNode.left = headNode.right;
  headNode.right = temp;

  invertTree(headNode.left);
  invertTree(headNode.right);

  return headNode;
}

// AlgoExpert's solution

// O(n) time | O(d) space
function invertBinaryTree(tree) {
  if (tree === null) return;

  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;

  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}
