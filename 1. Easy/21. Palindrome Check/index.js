// my solutions
function palindromeCheck(str) {
  return [...str].reverse().join("") === str;
}

function palindromeCheck(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] === str[str.length - 1 - i]) continue;
    return false;
  }

  return true;
}

// Algoexpert's solutions
// O(n^2) time | O(n) space
function isPalindrome(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return string === reversedString;
}

// O(n) time | O(n) space
function isPalindrome(string) {
  const reversedChars = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reversedChars.push(string[i]);
  }
  return string === reversedChars.join("");
}

// O(n) time | O(n) space
// function isPalindrome(string, i = 0) {
//     const j = string.length - 1 - i;
//     return i >= j ? true : string[i] === string[j] && isPalindrome(string
//     }

// O(n) time | O(1) space
function isPalindrome(string) {
  let leftIdx = 0;
  let rightIdx = string.length - 1;
  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
  }
  return true;
}

console.log(palindromeCheck("abcdcba"));
