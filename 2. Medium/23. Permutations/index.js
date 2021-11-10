function getPermutation(elements) {
  if (!elements.length) return [[]];

  const combinations = [];

  for (let i = 0; i < elements.length; i++) {
    const newElements = elements.slice(0, i).concat(elements.slice(i + 1));
    const combos = getPermutation(newElements);
    const transCombos = combos.map((combo) => [elements[i], ...combo]);
    combinations.push(...transCombos);
  }

  return combinations;
}

console.log(getPermutation([1, 2, 3, 4]));
