// my solutions
// O(n + logn + m + logm)
function canGenerate(characters, document) {
  return (
    Array.from(characters).sort().toString() ==
    Array.from(document).sort().toString()
  );
}

canGenerate("mrAisi  tceaR Ved", "Amir is React deV");

// AlgoExpets solution
// O(n+m)
function generateDocument(characters, document) {
  const charCount = {};
  for (const ch of document) {
    if (charCount[ch]) {
      charCount[ch] += 1;
    } else {
      charCount[ch] = 1;
    }
  }
  for (const ch of characters) {
    if (!charCount[ch] || charCount[ch] <= 0) {
      return false;
    }
    charCount[ch] -= 1;
  }
  return true;
}

generateDocument("mrAisi  tceaR Ved", "Amir is React deV");
