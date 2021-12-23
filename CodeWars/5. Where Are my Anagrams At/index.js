function anagrams(word, words) {
  const answer = [],
    sortedWord = [...word.trim()].sort().join("");
  for (let i = 0; i < words.length; i++) {
    const s = [...words[i].trim()].sort().join("");
    s === sortedWord && answer.push(words[i]);
  }

  return answer;
}
