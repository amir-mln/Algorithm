function reverseSentence(sentence) {
  const words = [];
  let word = "";

  for (let i = 0; i < sentence.length; i++) {
    const ch = sentence[i];
    if (word) {
      if (
        (ch === " " && !word.includes(" ")) ||
        (ch !== " " && word.includes(" "))
      ) {
        words.push(word);
        word = ch;
        continue;
      }
    }
    word += ch;
    if (i + 1 == sentence.length) {
      words.push(word);
      word = "";
      break;
    }
  }

  for (let i = words.length - 1; i >= 0; i--) {
    word += words[i];
  }

  return word;
}

reverseSentence("Js is the best language.");
