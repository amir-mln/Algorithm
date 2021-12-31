// input => three nodes
// output => boolean
// we must determine wether or not node2 is between node1 and node 3. it is not guaranteed that node1 is the descendant of node2; therefore node3 might be the descendant.
// my solution
function validateThreeNodes(node1, node2, node3) {
  return isDescendant(node2, node1)
    ? isDescendant(node3, node2)
    : isDescendant(node2, node3)
    ? isDescendant(node1, node2)
    : false;
}

function isDescendant(child, father) {
  if (!father) return false;

  if (father.right?.value == child.value || father.left?.value == child.value)
    return true;

  return isDescendant(
    child,
    child.value < father.value ? father.left : father.right
  );
}
