// redoing Medium exercises
// input => numbers: Number[]
// output => Number[]
// we need to find all the peaks inside the numbers. a peak is defined as a sequence of numbers that rise to a peak value an then fall. So they basically increase and decrease
function longestPeak(numbers) {
  let peak = [];
  let longestPeak = [];
  for (let i = 1; i < numbers.length; i++) {
    const diff = Math.sign(numbers[i] - numbers[i - 1]);
    const prevDif = Math.sign(numbers[i - 1] - numbers[i - 2]);

    if (
      prevDif == diff ||
      (!prevDif && diff >= 0) ||
      (diff < 0 && prevDif >= 0)
    ) {
      peak.push(numbers[i - 1]);
      if (i + 1 == numbers.length) {
        peak.push(numbers[i]);
        longestPeak = longestPeak.length > peak.length ? longestPeak : peak;
      }
      continue;
    }

    if (prevDif <= 0 && diff > 0) {
      peak.push(numbers[i - 1]);
      longestPeak = longestPeak.length > peak.length ? longestPeak : peak;
      peak = [numbers[i - 1]];
      continue;
    }
  }

  return longestPeak;
}

longestPeak([1, 2, 3, 2, 1]);
longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]);
