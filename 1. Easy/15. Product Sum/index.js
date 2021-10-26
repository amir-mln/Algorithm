const testCase = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

// my solution
function productSum(arr, depth) {
  let acc = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      acc += productSum(arr[i], depth + 1) * depth;
    } else {
      acc += arr[i] * depth;
    }
  }

  return acc;
}

productSum(testCase, 1);
