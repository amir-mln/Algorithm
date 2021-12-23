// my solution
function branchSum(headNode, acc = 0, accArr = []) {
  acc += headNode.value;

  if (!headNode.left && !headNode.right) {
    accArr.push(acc);
  }

  if (headNode.left) {
    branchSum(headNode.left, acc);
  }

  if (headNode.right) {
    branchSum(headNode.right, acc);
  }

  return accArr;
}

// O(n) time | O(n) space - where n is the number of nodes
function branchSums(root) {
  const sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
}

function calculateBranchSums(node, runningSum, sums) {
  if (!node) return;
  const newRunningSum = runningSum + node.value;
  if (!node.left && !node.right) {
    sums.push(newRunningSum);
    return;
  }
  calculateBranchSums(node.left, newRunningSum, sums);
  calculateBranchSums(node.right, newRunningSum, sums);
}
