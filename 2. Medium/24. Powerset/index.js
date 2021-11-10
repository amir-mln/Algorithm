// coderbyte solution
// O(2^n): time
function powerset(elements) {
  if (elements.length == 0) return [[]];

  const [firstEl, ...rest] = elements;
  const combsOfRest = powerset(rest);
  const combsOfFirst = [];

  for (const combo of combsOfRest) {
    combsOfFirst.push([firstEl, ...combo]);
  }

  return [...combsOfFirst, ...combsOfRest];
}

console.log(powerset(["a", "b", "c"]));
