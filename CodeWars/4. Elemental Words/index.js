function elementalForms(word) {
  let answers = [];
  function getElement(elmAbbr) {
    return `${ELEMENTS[elmAbbr]} (${elmAbbr})`;
  }
  function nextLevelPlay(nextWord, answerIndex) {
    let oneCh = nextWord.charAt(0).toUpperCase(),
      twoCh = nextWord.charAt(0).toUpperCase() + nextWord[1],
      threeCh = nextWord.charAt(0).toUpperCase() + nextWord[1] + nextWord[2];

    if (nextWord === "") return;
    // ###############################################
    // when we only have one of the slices (oneCh or twoCh or threeCh)
    // ###############################################
    if (ELEMENTS[oneCh] && !ELEMENTS[twoCh] && !ELEMENTS[threeCh]) {
      if (answers[answerIndex]) {
        answers[answerIndex].push(getElement(oneCh));
      } else if (!answers[answerIndex]) {
        answers[answerIndex] = [getElement(oneCh)];
      }
      nextLevelPlay(nextWord.substr(1), answerIndex);
    }

    if (ELEMENTS[twoCh] && !ELEMENTS[oneCh] && !ELEMENTS[threeCh]) {
      if (answers[answerIndex]) {
        answers[answerIndex].push(getElement(twoCh));
      } else if (!answers[answerIndex]) {
        answers[answerIndex] = [getElement(twoCh)];
      }
      nextLevelPlay(nextWord.substr(2), answerIndex);
    }

    if (ELEMENTS[threeCh] && !ELEMENTS[oneCh] && !ELEMENTS[twoCh]) {
      if (answers[answerIndex]) {
        answers[answerIndex].push(getElement(threeCh));
      } else if (!answers[answerIndex]) {
        answers[answerIndex] = [getElement(threeCh)];
      }
      nextLevelPlay(nextWord.substr(3), answerIndex);
    }

    // ###############################################
    // when we have two of the slices (oneCh or twoCh or threeCh)
    // ###############################################

    if (ELEMENTS[oneCh] && ELEMENTS[twoCh] && !ELEMENTS[threeCh]) {
      if (answers[answerIndex]) {
        answers[answers.length] = [...answers[answerIndex], getElement(twoCh)];
        answers[answerIndex].push(getElement(oneCh));
      }
      if (!answers.length) {
        answers[answerIndex] = [getElement(oneCh)];
        answers[answers.length] = [getElement(twoCh)];
      }

      nextLevelPlay(nextWord.substr(2), answers.length - 1);
      nextLevelPlay(nextWord.substr(1), answerIndex);
    }

    if (ELEMENTS[oneCh] && ELEMENTS[threeCh] && !ELEMENTS[twoCh]) {
      if (answers[answerIndex]) {
        answers[answers.length] = [
          ...answers[answerIndex],
          getElement(threeCh),
        ];
        answers[answerIndex].push(getElement(oneCh));
      }
      if (!answers.length) {
        answers[answerIndex] = [getElement(oneCh)];
        answers[answers.length] = [getElement(threeCh)];
      }

      nextLevelPlay(nextWord.substr(3), answers.length - 1);
      nextLevelPlay(nextWord.substr(1), answerIndex);
    }

    if (ELEMENTS[twoCh] && ELEMENTS[threeCh] && !ELEMENTS[oneCh]) {
      if (answers[answerIndex]) {
        answers[answers.length] = [
          ...answers[answerIndex],
          getElement(threeCh),
        ];
        answers[answerIndex].push(getElement(twoCh));
      }
      if (!answers.length) {
        answers[answerIndex] = [getElement(twoCh)];
        answers[answers.length] = [getElement(threeCh)];
      }

      nextLevelPlay(nextWord.substr(3), answers.length - 1);
      nextLevelPlay(nextWord.substr(2), answerIndex);
    }
    // ###############################################
    // when we have none of them (oneCh or twoCh or threeCh)
    // ###############################################
    if (!ELEMENTS[oneCh] && !ELEMENTS[twoCh] && !ELEMENTS[threeCh]) {
      answers[answerIndex] = "DELETE_ME";
    }
  }
  nextLevelPlay(word.toLowerCase(), 0);
  return answers.filter((answer) => answer !== "DELETE_ME");
}
