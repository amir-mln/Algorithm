// redoing medium exercises

// new solution
function waysOfMakingChange(numbers, target) {
  if (target == 0) return [[]];
  if (target < 0) return null;

  const combinations = [];

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const newNumbers = numbers.slice(i);
    const combs = waysOfMakingChange(newNumbers, target - num);

    if (combs) combs.forEach((c) => combinations.push([...c, num]));
  }

  return combinations;
}

waysOfMakingChange([1, 5, 10, 25], 10);

// My implementation of AlgoExpert's description
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
