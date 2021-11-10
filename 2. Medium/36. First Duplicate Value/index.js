// my solution
// O(n^2)
function firstDuplicate(array) {
  for (let i = 0; i < array.length; i++) {
    for (let reverse = i - 1; reverse >= 0; reverse--) {
      if (array[i] == array[reverse]) return array[i];
    }
  }
}

firstDuplicate([2, 3, 4, 1, 3, 1]);

// AlgoExpert's solution

// O(n)
function firstDuplicate(array) {
  const seen = new Set();
  for (const num of array) {
    if (seen.has(num)) return num;

    seen.add(num);
  }
}
