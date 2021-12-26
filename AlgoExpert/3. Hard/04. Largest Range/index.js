// input=> numbers: [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
// output=> [0, 1, 2, ..., 7]

// we must find the largest range of sequential numbers. (numbers that come after each other)

// my solution
function findLgRange(numbers) {
  let range = [];
  let tempRange = [];
  numbers.sort((a, b) => a - b);
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const nextNumber = numbers[i + 1];
    const isSequential = nextNumber - number == 1;

    if (isSequential) {
      tempRange.push(number);
    }

    if (!isSequential && tempRange.length) {
      if (tempRange.length > range.length) range = [...tempRange, number];
      tempRange = [];
    }
  }

  return range;
}

findLgRange([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]);
findLgRange([1, 11, 3, 0, 15, 9, 2, 13, 14, 4, 10, 7, 12, 6]);

// my implementation of video explanations
function findLgRange(numbers) {
  const numbersObj = {};
  let range = [];

  for (const number of numbers) {
    numbersObj[number] = true;
  }

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (!numbersObj[number]) continue;

    numbersObj[number] = false;

    let tempRange = [number];
    let smaller = number - 1;
    let larger = number + 1;

    while (numbersObj[smaller]) {
      tempRange = [smaller, ...tempRange];
      numbersObj[smaller] = false;
      smaller += -1;
    }

    while (numbersObj[larger]) {
      tempRange = [...tempRange, larger];
      numbersObj[larger] = false;
      larger += 1;
    }

    if (tempRange.length > range.length) range = tempRange;
    tempRange = [];
  }
  return range;
}

findLgRange([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]);
findLgRange([1, 11, 3, 0, 15, 9, 2, 13, 14, 4, 10, 7, 12, 6]);
