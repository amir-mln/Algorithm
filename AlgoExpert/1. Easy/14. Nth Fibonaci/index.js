// my first solution
function getNthFib(n) {
  return n == 2 ? 1 : n == 1 ? 0 : getNthFib(n - 1) + getNthFib(n - 2);
}

// my second solution
const fiboDp = { 1: 0, 2: 1 };

function getNthFib(n) {
  if (n in fiboDp) {
    return fiboDp[n];
  } else {
    fiboDp[n] = getNthFib(n - 1) + getNthFib(n - 2);
    return fiboDp[n];
  }
}

// AlgoExpert's second solution
function getNthFib(n, memoize = { 1: 0, 2: 1 }) {
  if (n in memoize) {
    return memoize[n];
  } else {
    memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
    return memoize[n];
  }
}

// AlgoExpert's third solution
function getNthFib(n) {
  const lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}
