// my solution
// O(n*m)
function smallestD(arr1, arr2) {
  let small = [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      const currentDifference = Math.abs(arr1[i] - arr2[j]);
      const prevDifference = Math.abs(small[0] - small[1]);
      if (currentDifference < prevDifference) {
        small[0] = arr1[i];
        small[1] = arr2[j];
      }
    }
  }
  return small;
}

smallestD([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]);

// AlgoExpert's
// O(nlog(n) + mlog(m)) time | O(1) space
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let idxOne = 0;
  let idxTwo = 0;
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];
  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let firstNum = arrayOne[idxOne];
    let secondNum = arrayTwo[idxTwo];
    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      idxOne++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      idxTwo++;
    } else {
      return [firstNum, secondNum];
    }
    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }
  return smallestPair;
}
