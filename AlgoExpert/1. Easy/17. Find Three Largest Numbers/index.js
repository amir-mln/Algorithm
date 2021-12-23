// my solution
function largest3(numbers) {
  const largests = new Array(3);
  for (let i = 2; i >= 0; i--) {
    let largest = Math.max(...numbers);
    largests[i] = largest;
    numbers[numbers.findIndex((x) => x == largest)] = -Infinity;
  }
  return largests;
}

largest3([54, 12, 68, 34, 99, 20, 75, 110]);

// AlgoExpet's solution
// O(n) time | O(1) space
function findThreeLargestNumbers(array) {
  const threeLargest = [null, null, null];
  for (const num of array) {
    updateLargest(threeLargest, num);
  }
  return threeLargest;
}

function updateLargest(threeLargest, num) {
  if (threeLargest[2] === null || num > threeLargest[2]) {
    shiftAndUpdate(threeLargest, num, 2);
  } else if (threeLargest[1] === null || num > threeLargest[1]) {
    shiftAndUpdate(threeLargest, num, 1);
  } else if (threeLargest[0] === null || num > threeLargest[0]) {
    shiftAndUpdate(threeLargest, num, 0);
  }
}

function shiftAndUpdate(array, num, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      array[i] = num;
    } else {
      array[i] = array[i + 1];
    }
  }
}

findThreeLargestNumbers([54, 12, 68, 34, 99, 20, 75, 110]);
