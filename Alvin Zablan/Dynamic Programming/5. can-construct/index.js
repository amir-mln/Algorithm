function canConstruct(target, wordBank, startIndex = 0, mem = {}) {
  if (target.substring(startIndex) in mem) return mem[target];
  if (startIndex == target.length) return true;
  if (startIndex > target.length) return false;

  for (const word of wordBank) {
    const indexOfWord = target.indexOf(word, startIndex);
    if (indexOfWord == startIndex) {
      if (canConstruct(target, wordBank, startIndex + word.length, mem)) {
        mem[target.substring(startIndex)] = true;
        return true;
      }
    }
  }

  mem[target.substring(startIndex)] = false;
  return false;
}

// canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]);
canConstruct("abcdef", ["abc", "def"]);
canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeez", [
  "e",
  "ee",
  "eee",
  "eeee",
  "eeeee",
  "a",
]);
