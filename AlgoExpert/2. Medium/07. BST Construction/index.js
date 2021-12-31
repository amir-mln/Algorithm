// redoing Medium exercises
// just a simple Binary Search Tree

function Node(value) {
  this.value = value;
  this.left;
  this.right;
}

function BST(node) {
  this.root = node;

  this.insert = function (value) {
    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = new Node(value);
          return this;
        }

        currentNode = currentNode.left;
        continue;
      } else {
        if (!currentNode.right) {
          currentNode.right = new Node(value);
          return this;
        }

        currentNode = currentNode.right;
        continue;
      }
    }
  };

  this.includes = function (value) {
    let currentNode = this.root;
    while (true) {
      if (!currentNode) {
        return false;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
        continue;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
        continue;
      } else {
        return currentNode;
      }
    }
  };

  this.findFather = function (value) {
    let currentNode = this.root;

    while (true) {
      if (!currentNode) return [];

      if (currentNode.left?.value == value) {
        return [currentNode, "left"];
      }

      if (currentNode.right?.value == value) {
        return [currentNode, "right"];
      }

      if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        return [this, "root"];
      }
    }
  };

  this.remove = function (value) {
    let [fatherNode, edge] = this.findFather(value);
    let targetNode = fatherNode && fatherNode[edge];

    if (!targetNode) {
      return false;
    }
    if (!targetNode.left) {
      fatherNode[edge] = targetNode.right;
      return this;
    } else if (!targetNode.right) {
      fatherNode[edge] = targetNode.left;
      return this;
    } else {
      let candidate = targetNode.right;
      while (candidate.left?.left) {
        candidate = candidate.left;
      }
      targetNode.value = candidate.left.value;
      candidate.left = candidate.left.right;
      return this;
    }
  };
}

var rootNode = new Node(10);
var values = [7, 12, 11, 18, 20, 17, 16, 14, 15];

var bst = new BST(rootNode);
values.forEach((v) => bst.insert(v));
