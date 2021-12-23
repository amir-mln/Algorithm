// my solution
// O(n^2 * logn) : time
function groupAnagrams(anagrams) {
  const passed = {};
  const grouped = [];

  for (const word1 of anagrams) {
    if (passed[word1]) continue;

    const s1 = Array.from(word1).sort().join("");
    const tempGp = [word1];

    for (const word2 of anagrams) {
      if (passed[word2] || word1 == word2) continue;

      const s2 = Array.from(word2).sort().join("");
      if (s1 == s2) {
        passed[word2] = true;
        tempGp.push(word2);
      }
    }

    passed[word1] = true;
    grouped.push(tempGp);
  }

  return grouped;
}

// AlgoExpert's solution
// O(w * n * log(n)) time | O(wn) space - where w is the number of words and n is
function groupAnagrams(words) {
  const anagrams = {};
  for (const word of words) {
    const sortedWord = word.split("").sort().join("");
    if (sortedWord in anagrams) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  }
  return Object.values(anagrams);
}

groupAnagrams(["amir", "arez", "reza", "rima", "iram", "zera"]);
