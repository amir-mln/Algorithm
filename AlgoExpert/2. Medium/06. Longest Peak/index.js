// my solution
// O(n)
function longestPeak(arr) {
  let prevDir;
  let peaks = [];
  let peak = [];
  for (let i = 0; i < arr.length; i++) {
    let nextDir = arr[i] == arr[i + 1] ? 0 : arr[i] < arr[i + 1] ? "+" : "-";

    // equal numbers
    if (!nextDir) {
      peak = [];
    }

    // the first iteration
    if (!prevDir) {
      prevDir = nextDir;
    }

    // rising to the peak as we were before
    if (nextDir == "+" && prevDir == nextDir) {
      peak.push(arr[i]);
    }

    // falling to the deep as we were before
    if (nextDir == "-" && prevDir == nextDir) {
      // if peak array has length of zero we should not add anything since we are just falling
      peak.length && peak.push(arr[i]);

      // if we have reached the...
      i + 1 == arr.length && peaks.push(peak);
    }

    // we are at the bottom, we will rise next
    if (nextDir == "+" && prevDir == "-") {
      // we were at peak before and have finished one peak
      if (peak.length) {
        peak.push(arr[i]);
        peaks.push(peak);
        peak = [];
      }
      // to start the next rise
      peak.push(arr[i]);
    }

    // we are at the top, we will fall next
    if (nextDir == "-" && prevDir == "+") {
      peak.push(arr[i]);
    }
    prevDir = nextDir;
  }

  return peaks;
}

// O(n) time | O(1) space - where n is the length of the input array
function longestPeak(array) {
  let longestPeakLength = 0;
  let i = 1;
  while (i < array.length - 1) {
    const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];
    if (!isPeak) {
      i++;
      continue;
    }
    let leftIdx = i - 2;
    while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
      leftIdx--;
    }
    let rightIdx = i + 2;
    while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
      rightIdx++;
    }
    const currentPeakLength = rightIdx - leftIdx - 1;
    longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
    i = rightIdx;
  }
  return longestPeakLength;
}

longestPeak([1, 2, 3, 2, 1]);
longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]);
