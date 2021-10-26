// my solutions
// 1: O(n)
function findNonRepeating(str) {
  for (let i = 0; i < str.length; i++) {
    const reg = new RegExp(`${str[i]}`, "g");
    if (str.match(reg).length == 1) return i;
  }
}

// 2: O(n)
function findNonRepeating(str) {
  const chs = {};
  let nonRepeatedIndex = Number.POSITIVE_INFINITY;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch in chs) {
      chs[ch] = { count: Number.POSITIVE_INFINITY };
    } else {
      chs[ch] = { count: 1, index: i };
    }
  }

  for (const ch in chs) {
    if (chs[ch].count != 1) continue;
    if (chs[ch].index < nonRepeatedIndex) {
      nonRepeatedIndex = chs[ch].index;
    }
  }

  return nonRepeatedIndex;
}

findNonRepeating("abcdcaf");
