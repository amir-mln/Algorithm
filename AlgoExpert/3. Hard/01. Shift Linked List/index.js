// input=> list: 0 -> 1 -> 2 -> 3 -> 4 -> 5 k: 2
// ouput=> list: 4 -> 5 -> 0 -> 1 -> 2 -> 3

// my solution
// time: O(n)   space: O(n)  n:number of list nodes
function shiftList(list, k) {
  const nodes = [];
  let currentHead = list.head;

  while (currentHead.next) {
    nodes.push(currentHead);
    currentHead = currentHead.next;
  }
  nodes[nodes.length - 1].next = list.head;
  nodes[nodes.length - k - 1].next = null;
  list.head = nodes[nodes.length - k];
}
