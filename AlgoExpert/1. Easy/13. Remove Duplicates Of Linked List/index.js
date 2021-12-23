// my own solution - did not check algoExpert's solution

function Node(value, next = null) {
  this.value = value;
  this.next = next;
}

function List(head = nul) {
  this.head = head;
}

const values = [1, 1, 3, 4, 4, 4, 5, 6, 7];

const nodes = values.map((val) => new Node(val));

nodes.forEach((n, i, ns) => (n.next = ns[i + 1]));

const list = new List(nodes[0]);

function removeDuplicates(list) {
  let currentNode = list.head;

  while (true) {
    if (!currentNode.next) {
      break;
    }
    if (currentNode.value == currentNode.next.value) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode.next = currentNode.next.next;
      }
      continue;
    }
    if (currentNode.value != currentNode.next.value) {
      currentNode = currentNode.next;
      continue;
    }
  }

  return list;
}

removeDuplicates(list);
