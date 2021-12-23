const fiboAkin = { 1: 1, 2: 1 };

function U(n) {
  if (n in fiboAkin) return fiboAkin[n];
  const n_1 = U(n - 1),
    n_2 = U(n - 2);
  fiboAkin[n] = U(n - n_1) + U(n - n_2);
  return fiboAkin[n];
}

function lengthSupUK(n, k) {
  let occurrence = 0;
  for (let i = 3; i <= n; i++) {
    if (U(i) >= k) occurrence++;
  }
  return occurrence;
}

function comp(n) {
  let occurrence = 0;
  for (let i = 3; i <= n; i++) {
    if (U(i - 1) > U(i)) occurrence++;
  }
  return occurrence;
}
