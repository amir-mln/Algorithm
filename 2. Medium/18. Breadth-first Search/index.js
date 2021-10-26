// my solution
// O(n)
function breadthFirstSearch(headNode, arr = [], index = 0) {
  if (!headNode) return;

  arr[index].push(headNode.value);

  for (const child of headNode.children) {
    breadthFirstSearch(child);
  }

  if (index == 0) return arr.flat(1);
}

// AlgoExpert's solution
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // O(v + e) time | O(v) space
  breadthFirstSearch(array) {
    const queue = [this];
    while (queue.length > 0) {
      const current = queue.shift();
      array.push(current.name);
      for (const child of current.children) {
        queue.push(child);
      }
    }
    return array;
  }
}
