// this one returns all the combinations
function traverseStairs(height, maxSteps, combination = []) {
  if (height == 0) return combination;
  if (height < 0) return null;

  const combos = [];

  for (let step = 1; step <= maxSteps; step++) {
    const combo = traverseStairs(height - step, maxSteps, [
      ...combination,
      step,
    ]);

    if (Array.isArray(combo)) {
      if (typeof combo[0] !== "number") combos.push(...combo);
      else combos.push(combo);
    }
  }

  return combos;
}
traverseStairs(4, 2);

// this one returns number of possible combinations
function traverseStairs(height, maxSteps) {
  if (height == 0) return 1;
  if (height < 0) return 0;

  let combos = 0;

  for (let step = 1; step <= maxSteps; step++) {
    combos += traverseStairs(height - step, maxSteps);
  }

  return combos;
}

traverseStairs(4, 2);
