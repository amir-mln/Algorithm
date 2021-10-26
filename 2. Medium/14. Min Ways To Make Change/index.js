// My implenmentaion of AlgoExpert's description

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

// this question and the previous one are very similar. we have some coins and we want to know number of ways to make one specefic coin. to solve these questions we first make an array of length `specefic coin + 1`. each index of the array are going to represent the number of ways we can make the coin with value of the corresponding index. for example the value of the index 4 is the number of ways we can make a 4$ coin.

// then we iterate through our coin collection and in each iteration we then iterate through our array of possible ways. the second iteration starts from the the value of ' coin of coins` (look at the code fore refrence). in the second iteration we implement our logic that changes the value of way[i];

// by this definition, index 0 represents the ways we can make a 0$ coin. since we dont have a 0$ coin we might use it as the base of our calculation.

// finally we return ways[targetAmount]
