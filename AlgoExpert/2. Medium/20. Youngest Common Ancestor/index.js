function Node(val) {
  this.value = val;
  this.children = [];
}

let nodes = {
  A: new Node("A"),
  B: new Node("B"),
  C: new Node("C"),
  D: new Node("D"),
  E: new Node("E"),
  F: new Node("F"),
  G: new Node("G"),
  H: new Node("H"),
  I: new Node("I"),
  J: new Node("J"),
  K: new Node("K"),
};

nodes.A.children = [nodes.B, nodes.C, nodes.D];
nodes.B.children = [nodes.E, nodes.F];
nodes.C.children = [nodes.G, nodes.H];
nodes.G.children = [nodes.I, nodes.J];
nodes.J.children = [nodes.K];

// my solution
function findCommonAncestor(headerNode, nodeOne, nodeTwo) {
  const nodeOnePedigree = createPedigree(headerNode, nodeOne);
  const nodeTwoPedigree = createPedigree(headerNode, nodeTwo);
  let commonAncestor = "";
  for (
    let i = 0;
    i < Math.min(nodeOnePedigree.length, nodeTwoPedigree.length);
    i++
  ) {
    if (nodeOnePedigree[i] == nodeTwoPedigree[i]) {
      commonAncestor = nodeOnePedigree[i];
      continue;
    }
    break;
  }

  return commonAncestor;
}

function createPedigree(headerNode, targetNode, prevParents = "") {
  if (!headerNode) return "";

  if (headerNode.value === targetNode.value) {
    return prevParents.split("-");
  } else {
    prevParents += headerNode.value + "-";
    for (const child of headerNode.children) {
      let p = createPedigree(child, targetNode, prevParents);
      if (p) return p;
    }
  }
}

findCommonAncestor(nodes.A, nodes.I, nodes.K);

// AlgoExpert solution

class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

// O(d) time | O(1) space - where d is the depth (height) of the ancestral tree
function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const depthOne = getDescendantDepth(descendantOne, topAncestor);
  const depthTwo = getDescendantDepth(descendantTwo, topAncestor);
  if (depthOne > depthTwo) {
    return backtrackAncestralTree(
      descendantOne,
      descendantTwo,
      depthOne - depthTwo
    );
  } else {
    return backtrackAncestralTree(
      descendantTwo,
      descendantOne,
      depthTwo - depthOne
    );
  }
}

function getDescendantDepth(descendant, topAncestor) {
  let depth = 0;
  while (descendant !== topAncestor) {
    depth++;
    descendant = descendant.ancestor;
  }
  return depth;
}

function backtrackAncestralTree(lowerDescendant, higherDescendant, diff) {
  while (diff > 0) {
    lowerDescendant = lowerDescendant.ancestor;
    diff--;
  }
  while (lowerDescendant !== higherDescendant) {
    lowerDescendant = lowerDescendant.ancestor;
    higherDescendant = higherDescendant.ancestor;
  }
  return lowerDescendant;
}
