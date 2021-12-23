function countConstructs(target, wordBank, startIndex = 0, mem = {}) {
  const memCheck = target.substring(startIndex);
  if (memCheck in mem) return mem[memCheck];

  if (startIndex == target.length) return 1;

  let counts = 0;

  for (const word of wordBank) {
    if (target.indexOf(word, startIndex) == startIndex) {
      counts += countConstructs(target, wordBank, startIndex + word.length);
    }
  }

  mem[memCheck] = counts;
  return counts;
}

countConstructs("abc", ["ab", "c", "a", "bc", "abc"]);
countConstructs("aaaaaaaaaaaa", ["a", "aa", "aaa", "aaaa", "aaaa"]);
