// my solution
function invertTree(haedNode) {
  if (!haedNode) return;
  const temp = haedNode.left;
  haedNode.left = haedNode.right;
  haedNode.right = temp;

  invertTree(haedNode.left);
  invertTree(haedNode.right);

  return haedNode;
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
