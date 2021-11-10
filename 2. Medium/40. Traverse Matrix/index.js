function traverseMatrix(x, y, memo = {}) {
  const key = x + "-" + y;

  if (key in memo) return memo[key];
  if (x <= 0 || y <= 0) return 0;
  if (x == y && y == 1) return 1;

  memo[key] = traverseMatrix(x - 1, y, memo) + traverseMatrix(x, y - 1, memo);

  return memo[key];
}

console.log(traverseMatrix(18, 15));
