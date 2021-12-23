function queueTime(customers, n) {
  const initialAcc = new Array(n).fill(0);
  function reducer(acc, val, i) {
    acc.sort((a, b) => a - b);
    acc[0] += val;
    return acc;
  }
  return customers.reduce(reducer, initialAcc).sort((a, b) => b - a)[0];
}
