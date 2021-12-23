function sumOfLists(l1HeadNode, l2HeadNode) {
  const revList1 = revList(l1HeadNode);
  const revList2 = revList(l2HeadNode);

  return Number(revList1) + Number(revList2);
}

function revList(node, prev = "") {
  if (!node) return prev;

  return revList(node.next, node.value + prev);
}
