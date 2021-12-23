// my solution
const dictionary = {
  0: "0",
  1: "1",
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

function phoneNumber(phoneStr, i = 0, legacy = "") {
  if (phoneStr.length == i) return legacy;
  let result = [];

  for (const ch of dictionary[phoneStr[i]]) {
    const m = phoneNumber(phoneStr, i + 1, legacy + ch);
    result.push(m);
  }

  return result.flat();
}

phoneNumber("23");
