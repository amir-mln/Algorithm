//my solution
// O(n*n): time
function sunsetViews(heights, dir) {
  const results = [];
  if (dir == "WEST") heights.reverse();

  for (let i = 0; i < heights.length; i++) {
    const current = heights[i];
    let hasView = true;
    for (let j = i + 1; j < heights.length; j++) {
      const next = heights[j];
      if (current <= next) {
        hasView = false;
        break;
      }
    }
    if (hasView) results.push(dir == "EAST" ? i : heights.length - 1 - i);
  }

  return results;
}

console.log(sunsetViews([3, 5, 4, 4, 3, 1, 3, 2], "EAST"));
console.log(sunsetViews([3, 5, 4, 2, 6, 1, 3, 2], "WEST"));
console.log(sunsetViews([1, 2, 3, 4, 5, 6, 7], "WEST"));
