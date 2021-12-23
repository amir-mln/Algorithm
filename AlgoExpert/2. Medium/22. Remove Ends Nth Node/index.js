// my first solution
function name(headNode, targetIndex) {
  let currentNode = headNode;
  let totalNodes = 0;
  let revIndex;
  while (currentNode) {
    totalNodes++;
    currentNode = currentNode.next;
  }
  revIndex = totalNodes - targetIndex;
  currentNode = headNode;
  while (revIndex > 0) {
    if (revIndex == 1) {
      currentNode.next = currentNode.next.next;
      break;
    }
    currentNode = currentNode.next;
    revIndex--;
  }
}

// my second solution
function name(firstNode, targetIndex) {
  let currentNode = firstNode;
  while (true) {
    let tempNode = currentNode;
    for (let i = 0; i < targetIndex; i++) {
      tempNode = tempNode.next;
    }
    if (!tempNode.next) {
      currentNode.next = currentNode.next.next;
      break;
    }
    currentNode = currentNode.next;
  }
}

// AlgoExpert's Solution
// O(n) time | O(1) space
function removeKthNodeFromEnd(head, k) {
  let counter = 1;
  let first = head;
  let second = head;
  while (counter <= k) {
    second = second.next;
    counter++;
  }
  if (second === null) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }
  while (second.next !== null) {
    second = second.next;
    first = first.next;
  }
  first.next = first.next.next;
}
