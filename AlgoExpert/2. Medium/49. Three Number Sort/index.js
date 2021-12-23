// function threeNumberSort(numbers, order) {
//   let result = [];

//   for (let i = 0; i < order.length; i++) {
//     const filtered = numbers.filter((n) => n == order[i]);
//     result.push(...filtered);
//   }

//   return result;
// }

// function threeNumberSort(numbers, order) {
//   const perOrder = [[], [], []];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] == order[0]) {
//       perOrder[0].push(numbers[i]);
//     }
//     if (numbers[i] == order[1]) {
//       perOrder[1].push(numbers[i]);
//     }
//     if (numbers[i] == order[2]) {
//       perOrder[2].push(numbers[i]);
//     }
//   }

//   return perOrder.flat();
// }

// function threeNumberSort(numbers, order) {
//   const perOrder = [0, 0, 0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] == order[0]) {
//       perOrder[0] += 1;
//     }
//     if (numbers[i] == order[1]) {
//       perOrder[1] += 1;
//     }
//     if (numbers[i] == order[2]) {
//       perOrder[2] += 1;
//     }
//   }

//   return numbers.map((_, i) => {
//     return i < perOrder[0]
//       ? order[0]
//       : perOrder[0] <= i && i < perOrder[0] + perOrder[1]
//       ? order[1]
//       : order[2];
//   });
// }

function threeNumberSort(numbers, order) {
  let first = 0;

  for (let o = 0; o < 2; o++) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] == order[o] && numbers[first] !== order[o]) {
        numbers[i] = numbers[first];
        numbers[first] = order[o];
        first++;
      }
    }
  }

  return numbers;
}

console.log(threeNumberSort([1, -1, 0, -1, 1, 0, 0, -1], [-1, 0, 1]));
