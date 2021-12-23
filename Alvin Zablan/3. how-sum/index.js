function howSum(target, numbers, hows = [], memo = {}) {
  if (target in memo) return memo[target];
  if (target == 0) return hows;
  if (target < 0) return null;

  for (const number of numbers) {
    const sum = howSum(target - number, numbers, [...hows, number], memo);

    if (sum !== null) {
      memo[target] = sum;
      return sum;
    }
  }

  memo[target] = null;
  return null;
}

console.log(howSum(7, [2, 6]));
console.log(howSum(9, [2, 6, 3, 7]));
console.log(howSum(300, [8, 2, 100, 80]));
