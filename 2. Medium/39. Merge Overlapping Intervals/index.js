function mergeOverlaps(intervals) {
  function reducer(acc, interval) {
    const len = acc.length;
    const beforePrev = acc.slice(0, len - 1);
    const [prevStart, prevEnd] = acc[len - 1] || [];
    const [currentStart, currentEnd] = interval;

    if (!len || prevEnd < currentStart) return [...acc, interval];

    if (prevEnd >= currentStart) {
      return [...beforePrev, [prevStart, currentEnd]];
    }
  }

  return intervals.reduce(reducer, []);
}

mergeOverlaps([
  [1, 2],
  [3, 5],
  [4, 7],
  [6, 8],
  [9, 10],
]);
mergeOverlaps([
  [1, 3],
  [4, 5],
  [5, 6],
  [7, 10],
  [9, 10],
]);
