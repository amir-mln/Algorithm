function BinaryTree(val) {
  this.val = val;
  this.left;
  this.right;
}

function binaryTreeDiameter(headNode) {
  return getTreeInfo(headNode).diameter;
}

function getTreeInfo(headNode) {
  if (!headNode) return makeTreeInfo(0, 0);

  const leftTreeData = getTreeInfo(headNode.left);
  const rightTreeData = getTreeInfo(headNode.right);

  let longestPathThroughRoot = leftTreeData.height + rightTreeData.height;
  let maxDiameterSoFar = Math.max(
    leftTreeData.diameter,
    rightTreeData.diameter
  );
  let currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar);
  let currentHeight =
    1 + Math.max(1 + leftTreeData.height, rightTreeData.height);

  return makeTreeInfo(currentDiameter, currentHeight);
}

function makeTreeInfo(diameter, height) {
  return { diameter, height };
}
