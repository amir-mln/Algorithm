// prettier-ignore
// my implementation
function allConstructs( target, wordBank, startIndex = 0, prevFounds = []) {
  if (startIndex == target.length) return prevFounds;

  let constructs = [];

  for (const word of wordBank) {
    if (target.indexOf(word, startIndex) == startIndex) {
      const newFound = allConstructs(
        target,
        wordBank,
        startIndex + word.length,
        [...prevFounds, word],
        mem
      );

      for (const f of newFound) {
        if (typeof f == "string") {
          constructs.push(newFound);
          break;
        }

        constructs.push([...f]);
      }
    }
  }
  
  return constructs;
}

allConstructs("abc", ["a", "bc", "b", "ab", "c"]);

// his implementation
function allConstructs(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target == "") return [[]];

  const combinations = [];

  for (const word of wordBank) {
    if (target.indexOf(word) == 0) {
      const suffix = target.slice(word.length);
      const combo = allConstructs(suffix, wordBank, memo);
      const processed = combo.map((way) => [word, ...way]);

      combinations.push(...processed);
    }
  }

  memo[target] = combinations;
  return combinations;
}

allConstructs("abc", ["a", "bc", "b", "ab", "c"]);
allConstructs("aaaaaaaaaaaaaaaaaaa", ["aa", "aaa", "aaaa", "aaaaa", "a"]);
