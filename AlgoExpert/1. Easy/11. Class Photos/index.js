function classPhoto(redShirts, blueShirts) {
  const len = redShirts.length;
  let front, back;
  redShirts.sort((a, b) => a - b);
  blueShirts.sort((a, b) => a - b);

  if (redShirts[len - 1] < blueShirts[len - 1]) {
    front = redShirts;
    back = blueShirts;
  } else {
    front = blueShirts;
    back = redShirts;
  }

  for (let i = 0; i < len; i++) {
    if (front[i] < back[i]) continue;
    return false;
  }

  return true;
}

classPhoto([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]);
