// AlgoExpert's solution
function isBalancedTree(headNode) {
  return getTreeInfo(headNode).isBalanced;
}

function getTreeInfo(headNode) {
  if (!headNode) return makeTreeInfo(true, 0);

  const { isBalanced: lBalanced, depth: lDepth } = getTreeInfo(headNode.left);
  const { isBalanced: rBalanced, depth: rDepth } = getTreeInfo(headNode.right);

  const balanceCondition =
    lBalanced && rBalanced && Math.abs(lDepth - rDepth) <= 1;
  const newDepth = Math.max(lDepth, rDepth) + 1;
  return makeTreeInfo(balanceCondition, newDepth);
}

function makeTreeInfo(isBalanced, depth) {
  return { isBalanced, depth };
}
