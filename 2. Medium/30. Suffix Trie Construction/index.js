// my solution
function suffixNode(value) {
  this.value = value;
  this.childern = [];
}

function suffixTree(headNode, string) {
  let currentNode = headNode;

  for (let i = 0; i < string.length; i++) {
    for (let j = i; j <= string.length; j++) {
      if (!string[j]) {
        currentNode.childern[currentNode.childern.length - 1] !== "*" &&
          currentNode.childern.push("*");
        continue;
      }

      const theFoundChild = findInChildren(currentNode, string[j]);
      let newNode;
      if (!theFoundChild) {
        newNode = new suffixNode(string[j]);
        currentNode.childern.push(newNode);
      }

      currentNode = theFoundChild || newNode;
    }
    currentNode = headNode;
  }

  return headNode;
}

function findInChildren(node, val) {
  for (const child of node.childern) {
    if (child.value === val) return child;
  }
}

suffixTree(new suffixNode(null), "babc");

// AlgoExpert's solution
class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }
  // O(n^2) time | O(n^2) space
  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      this.insertSubstringStartingAt(i, string);
    }
  }
  insertSubstringStartingAt(i, string) {
    let node = this.root;
    for (let j = i; j < string.length; j++) {
      const letter = string[j];
      if (!(letter in node)) node[letter] = {};
      node = node[letter];
    }
    node[this.endSymbol] = true;
  }
  // O(m) time | O(1) space
  contains(string) {
    let node = this.root;
    for (const letter of string) {
      if (!(letter in node)) return false;
      node = node[letter];
    }
    return this.endSymbol in node;
  }
}
