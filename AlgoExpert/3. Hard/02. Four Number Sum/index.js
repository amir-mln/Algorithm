// input=> numbers: [7, 6, 4, -1, 1, 2] target: 16
// output=> [[7, 6, 4, -1], [7, 6, 1, 2]]

// the question has not specified wether we can have repetetive numbers or not, like if [4,4,4,4] is valid for a target of 16. so i assume it is.

// with repetetive numbers
function fourNumberSum(numbers, target, depth = 0) {
  if (depth > 4) return null;
  if (depth == 4 && target == 0) return [[]];

  const combinations = [];

  for (const num of numbers) {
    const loopCompbinations = fourNumberSum(numbers, target - num, depth + 1);

    if (loopCompbinations) {
      loopCompbinations.forEach((combination) =>
        combinations.push([...combination, num])
      );
    }
  }

  return combinations;
}

fourNumberSum([7, 6, 4, -1, 1, 2], 16);

// without repetetive numbers
function fourNumberSum(numbers, target, depth = 0) {
  if (depth > 4) return null;
  if (depth == 4 && target == 0) return [[]];

  const combinations = [];

  for (const num of numbers) {
    const loopCompbinations = fourNumberSum(
      numbers.filter((n) => n !== num),
      target - num,
      depth + 1
    );

    if (loopCompbinations) {
      loopCompbinations.forEach((combination) =>
        combinations.push([num, ...combination])
      );
    }
  }

  return combinations;
}

fourNumberSum([7, 6, 4, -1, 1, 2], 16);
