function tandemBicycles(redShirtSpeeds, blueShirtSpeeds, fastest) {
  let acc = 0,
    allSpeeds = [...redShirtSpeeds, ...blueShirtSpeeds].sort((a, b) => a - b),
    threshold = parseInt(allSpeeds.length / 2);

  if (fastest) {
    for (let i = allSpeeds.length - 1; i >= threshold; i--) {
      acc += allSpeeds[i];
    }
  } else {
    for (let i = 0; i < threshold; i++) {
      acc += allSpeeds[i];
    }
  }

  return acc;
}

tandemBicycles([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true);
