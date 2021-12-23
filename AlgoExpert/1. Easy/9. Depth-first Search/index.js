// my solution
// time: O(n)
function dfs(headNode, arr = []) {
  arr.push(headNode.value);
  headNode.left && dfs(headNode.left, arr);
  headNode.right && dfs(headNode.right, arr);
}
