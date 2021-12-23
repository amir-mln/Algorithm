// my solution
function sortedSquaredArr(arr) {
  return arr.map((n) => Math.pow(n, 2)).sort((a, b) => a - b);
}

// AlgoExpert's solution
function sortedSquaredArr(arr) {
  let left = 0,
    right = arr.length - 1,
    answer = new Array(arr.length),
    answerIndex = answer.length - 1;

  while (left <= right) {
    let lSquared = arr[left] * arr[left],
      rSquared = arr[right] * arr[right];
    answer[answerIndex] = Math.max(lSquared, rSquared);
    answerIndex--;
    lSquared > rSquared ? left++ : right--;
  }
  return answer;
}
