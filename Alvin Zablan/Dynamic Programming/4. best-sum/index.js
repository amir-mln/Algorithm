function bestSum(target, numbers, memo = {}) {
  if (target in memo) return memo[target];

  if (target == 0) return [];
  if (target < 0) return null;

  let shortest = null;

  for (const number of numbers) {
    const remainderCombo = bestSum(target - number, numbers, memo);

    if (remainderCombo !== null) {
      const combo = [number, ...remainderCombo];
      if (shortest === null || shortest.length > combo.length) shortest = combo;
    }
  }

  memo[target] = shortest;
  return shortest;
}

console.log(bestSum(9, [2, 3, 4, 1]));
console.log(bestSum(7, [2, 6]));
console.log(bestSum(9, [2, 6, 3, 7]));
console.log(bestSum(300, [8, 2, 100, 80]));
