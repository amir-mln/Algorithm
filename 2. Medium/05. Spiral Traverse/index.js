// My Solution
// o(n)
function spiralTraversal(arr) {
  const traversedArr = [];
  let arrTrueLength = 0;
  let roof = -1;
  let rWall = arr[0].length;
  let floor = arr.length;
  let lWall = -1;
  let x = (y = 0);

  for (const subArr of arr) {
    arrTrueLength += subArr.length;
  }

  while (traversedArr.length < arrTrueLength) {
    traversedArr.push(arr[y][x]);

    if (x == 0 && y == 00) roof++;

    if (y == roof && x < rWall) {
      if (x == lWall || (lWall == -1 && x == 0)) rWall--;
      x++;
      continue;
    }
    if (y < floor && x == rWall) {
      if (y == roof) floor--;
      y++;
      continue;
    }
    if (y == floor && x > lWall) {
      if (x == rWall) lWall++;
      x--;
      continue;
    }
    if (y > roof && x == lWall) {
      if (y == floor) roof++;
      y--;
      continue;
    }
  }

  return traversedArr;
}

spiralTraversal([
  ["a", "b", "c", "d"],
  ["n", "o", "p", "e"],
  ["m", "t", "q", "f"],
  ["l", "s", "r", "g"],
  ["k", "j", "i", "h"],
]);

// prettier-ignore
spiralTraversal([
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [2, 1, 2, 3, 4, 5, 6, 7, 8],
  [3, 8, 9, 8, 7, 6, 5, 8, 7],
  [4, 7, 8, 9, 8, 7, 4, 9, 6],
  [5, 6, 7, 2, 1, 6, 3, 8, 5],
  [6, 5, 6, 3, 4, 5, 2, 7, 4],
  [7, 4, 5, 4, 3, 2, 1, 6, 3],
  [8, 3, 2, 1, 2, 3, 4, 5, 2],
  [9, 8, 7, 6, 5, 4, 3, 2, 1],
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
