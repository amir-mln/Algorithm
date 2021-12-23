// My implenmentaion of AlgoExpert's description
function findWays(target, amounts) {
  const ways = new Array(target + 1).fill(0);
  ways[0] = 1;
  for (const amount of amounts) {
    for (let i = amount; i < ways.length; i++) {
      if (amount <= i) ways[i] += ways[i - amount];
    }
  }

  return ways[target];
}

findWays(10, [1, 5, 10, 25]);

// AlgoExpet's solution
// O(nd) time | O(n) space
function numberOfWaysToMakeChange(n, denoms) {
  const ways = new Array(n + 1).fill(0);
  ways[0] = 1;
  for (let denom of denoms) {
    for (let amount = 1; amount < n + 1; amount++) {
      if (denom <= amount) {
        ways[amount] += ways[amount - denom];
      }
    }
  }
  return ways[n];
}
