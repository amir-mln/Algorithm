// redoing Medium exercises
// input => a 2D array, sub arrays all have the same length
// output => the result of traversing 2D array in a spiral way
// My Solution
// o(n): time O(n): space
function spiralTraversal(matrix) {
  const array = [];
  const matrixMembers = matrix.reduce(
    (acc, subArray) => acc + subArray.length,
    0
  );
  let topEdge = 0;
  let rightEdge = matrix[0].length - 1;
  let bottomEdge = matrix.length - 1;
  let leftEdge = 0;
  let x = 0;
  let y = 0;

  while (array.length < matrixMembers) {
    array.push(matrix[y][x]);
    if (y == topEdge && x < rightEdge) {
      x += 1;
      continue;
    } else if (x == rightEdge && y < bottomEdge) {
      y += 1;
      continue;
    } else if (y == bottomEdge && x > leftEdge) {
      x += -1;
      continue;
    } else if (x == leftEdge && y > topEdge) {
      if (y - 1 == topEdge) {
        topEdge += 1;
        rightEdge += -1;
        bottomEdge += -1;
        leftEdge += 1;
        x += 1;
        continue;
      }
      y += -1;
      continue;
    }
  }

  return array;
}

spiralTraverse([
  ["a", "b", "c", "d"],
  ["n", "o", "p", "e"],
  ["m", "t", "q", "f"],
  ["l", "s", "r", "g"],
  ["k", "j", "i", "h"],
]);

// AlgoExpert's Solution

// O(n) time | O(n) space - where n is the total number of elements in the array
function spiralTraverse(array) {
  const result = [];
  let startRow = 0,
    endRow = array.length - 1;
  let startCol = 0,
    endCol = array[0].length - 1;
  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      result.push(array[startRow][col]);
    }
    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(array[row][endCol]);
    }
    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break;
      result.push(array[endRow][col]);
    }
    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break;
      result.push(array[row][startCol]);
    }
    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }
  return result;
}

// O(n) time | O(n) space - where n is the total number of elements in the array
function spiralTraverse(array) {
  const result = [];
  spiralFill(array, 0, array.length - 1, 0, array[0].length - 1, result);
  return result;
}
function spiralFill(array, startRow, endRow, startCol, endCol, result) {
  if (startRow > endRow || startCol > endCol) return;
  for (let col = startCol; col <= endCol; col++) {
    result.push(array[startRow][col]);
  }
  for (let row = startRow + 1; row <= endRow; row++) {
    result.push(array[row][endCol]);
  }
  for (let col = endCol - 1; col >= startCol; col--) {
    if (startRow === endRow) break;
    result.push(array[endRow][col]);
  }
  for (let row = endRow - 1; row >= startRow + 1; row--) {
    if (startCol === endCol) break;
    result.push(array[row][startCol]);
  }
  spiralFill(array, startRow + 1, endRow - 1, startCol + 1, endCol - 1, result);
}
