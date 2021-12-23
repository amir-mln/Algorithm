// based on algo experts explanation
function findInSortedMatrix(sortedMatrix, target) {
  const maxValOfX = sortedMatrix[0].length;
  const maxValOfY = sortedMatrix.length;

  for (let x = maxValOfX - 1; x >= 0; x--) {
    for (let y = 0; y < maxValOfY; y++) {
      if (sortedMatrix[y][x] > target) break;

      if (sortedMatrix[y][x] == target) return [y, x];
    }
  }

  return -1;
}

// AlgoExpert's solution

// O(n + m) time | O(1) space
function findInSortedMatrix(matrix, target) {
  let row = 0;
  let col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] > target) {
      col--;
    } else if (matrix[row][col] < target) {
      row++;
    } else {
      return [row, col];
    }
  }
  return [-1, -1];
}

findInSortedMatrix(
  [
    [1, 4, 7, 12, 15, 100],
    [2, 5, 19, 31, 32, 101],
    [3, 8, 24, 35, 38, 102],
    [40, 41, 42, 44, 45, 103],
    [99, 100, 106, 107, 108, 109],
  ],
  44
);
