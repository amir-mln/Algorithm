// redoing medium questions

// new solution
function findMinWays(target, numbers) {
  const ways = (function helper(target, numbers) {
    if (target == 0) return [[]];
    if (target < 0) return null;

    const combinations = [];

    for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i];
      const combs = helper(target - num, numbers);
      if (combs) combs.forEach((c) => combinations.push([...c, num]));
    }

    return combinations;
  })(target, numbers);

  return ways.sort((a, b) => a.length - b.length)[0];
}
findMinWays(6, [1, 2, 4]);

// My implementations of AlgoExpert's description
function findMinWays(change, coins) {
  const ways = new Array(change + 1).fill(0);

  for (const coin of coins) {
    for (let i = coin; i < ways.length; i++) {
      const tempWay = i - coin + 1;
      if (ways[i] < tempWay) ways[i] = tempWay;
    }
  }

  return ways[change];
}

findMinWays(6, [1, 2, 4]);

// this question and the previous one are very similar. you need to know tabulation and dynamic programming to solve. both are which topics that this AlgoExpert does not teach.

// we have some coins and we want to know number of ways to make one specific coin. to solve these questions we first make an array of length `specific coin + 1`. each index of the array are going to represent the number of ways we can make the coin with value of the corresponding index. for example the value of the index 4 is the number of ways we can make a 4$ coin.

// then we iterate through our coin collection and in each iteration we then iterate through our array of possible ways. the second iteration starts from the the value of ' coin of coins` (look at the code for reference). in the second iteration we implement our logic that changes the value of way[i];

// by this definition, index 0 represents the ways we can make a 0$ coin. since we dont have a 0$ coin we might use it as the base of our calculation.

// finally we return ways[targetAmount]
