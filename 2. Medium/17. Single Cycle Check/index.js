// my solution
// O(n) time
function singleCycleCheck(array) {
  let jumpIndex = 0;

  for (let i = 0; i < array.length; i++) {
    jumpIndex += array[jumpIndex];
    if (jumpIndex < 0) jumpIndex += array.length;
    if (jumpIndex > array.length) jumpIndex -= array.length;
  }

  return jumpIndex == 0 && array[0] != 0;
}

singleCycleCheck([2, 3, 1, -4, -4, 2]);

singleCycleCheck([2, -1, -1]);

// AlgoExpet's solution
// O(n) time | O(1) space
function hasSingleCycle(array) {
  let numElementsVisited = 0;
  let currentIdx = 0;

  while (numElementsVisited < array.length) {
    if (numElementsVisited > 0 && currentIdx === 0) return false;
    numElementsVisited++;
    currentIdx = getNextIdx(currentIdx, array);
  }

  return currentIdx === 0;
}

function getNextIdx(currentIdx, array) {
  const jump = array[currentIdx];
  const nextIdx = (currentIdx + jump) % array.length;
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}
