// input => [10, 15, 8, 12, 94, 81, 5, 2, 11], [10, 8, 5, 15, 2, 12, 11, 94, 81]
// output => true

// we receive two arrays that hold the values of two BST trees. we must find out if the two trees are the same. the trick to this question is that we need to recursively compare the head node of the two trees. in each recursive call we pass the left and the right sub trees of the previous trees.

function sameBst(tree1, tree2) {
  if (tree1[0] !== tree2[0] || tree1.length !== tree2.length) return false;
  if (tree1.length == tree2.length && !tree1.length) return true;

  const tree1LeftBranch = tree1.filter((v) => v < tree1[0]);
  const tree2LeftBranch = tree2.filter((v) => v < tree2[0]);

  const tree1RightBranch = tree1.filter((v) => v > tree1[0]);
  const tree2RightBranch = tree2.filter((v) => v > tree2[0]);

  return (
    sameBst(tree1LeftBranch, tree2LeftBranch) &&
    sameBst(tree1RightBranch, tree2RightBranch)
  );
}

sameBst([10, 15, 8, 12, 94, 81, 5, 2, 11], [10, 8, 5, 15, 2, 12, 11, 94, 81]);
sameBst([10, 15, 8, 12, 94, 81, 5, 2, 11], [10, 8, 5, 12, 2, 15, 11, 94, 81]);
