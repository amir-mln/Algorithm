// redoing Medium exercises
// input numbers: Number[], target: Number
// we receive an array of numbers; we must move all of its member that are equal to taget, to the end of the array.
// solution 1
function moveToTheEnd(numbers, target) {
  return numbers
    .filter((n) => n !== target)
    .concat(numbers.filter((n) => n == target));
}

// solution 2
function moveToTheEnd(numbers, target) {
  let lIndex = 0;
  let rIndex = numbers.length - 1;
  while (lIndex < rIndex) {
    if (numbers[lIndex] !== target) {
      lIndex++;
      continue;
    }

    if (numbers[rIndex] == target) {
      rIndex--;
      continue;
    }

    if (numbers[lIndex] == target && numbers[rIndex] !== target) {
      numbers[lIndex] = numbers[rIndex];
      numbers[rIndex] = target;
      rIndex--;
      lIndex++;
    }
  }

  return numbers;
}
moveToTheEnd([2, 1, 2, 2, 3, 2, 4, 1, 2], 2);
