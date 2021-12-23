// my solution based on AlgoExpert's explanation
function longestPalindrom(palindrom) {
  let longest = "";
  for (let i = 0; i < palindrom.length; i++) {
    let tempIndex = 1;
    let tempLongest = "";

    while (true) {
      const oddPrev = palindrom[i - tempIndex];
      const oddNext = palindrom[i + tempIndex];

      const evenPrev = palindrom[i + 1 - tempIndex];
      const evenNext = palindrom[i + tempIndex];

      if (oddPrev !== oddNext && evenPrev !== evenNext) break;

      if (oddPrev == oddNext) {
        if (tempLongest) {
          tempLongest = oddPrev + tempLongest + oddNext;
        } else {
          tempLongest = oddPrev + palindrom[i] + oddNext;
        }
      }

      if (evenPrev == evenNext) {
        tempLongest = evenPrev + tempLongest + evenNext;
      }

      tempIndex++;
    }

    if (tempLongest.length > longest.length) longest = tempLongest;
  }

  return longest;
}

// AlgoExpert's solutions

// O(n^3) time | O(1) space
function longestPalindrom(string) {
  let longest = "";
  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      const substring = string.slice(i, j + 1);
      if (substring.length > longest.length && isPalindrome(substring)) {
        longest = substring;
      }
    }
  }
  return longest;
}

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

// O(n^2) time | O(1) space
function longestPalindrom(string) {
  let currentLongest = [0, 1];
  for (let i = 1; i < string.length; i++) {
    const odd = getLongestPalindromeFrom(string, i - 1, i + 1);
    const even = getLongestPalindromeFrom(string, i - 1, i);
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest =
      currentLongest[1] - currentLongest[0] > longest[1] - longest[0]
        ? currentLongest
        : longest;
  }
  return string.slice(currentLongest[0], currentLongest[1]);
}

function getLongestPalindromeFrom(string, leftIdx, rightIdx) {
  while (leftIdx >= 0 && rightIdx < string.length) {
    if (string[leftIdx] !== string[rightIdx]) break;
    leftIdx--;
    rightIdx++;
  }
  return [leftIdx + 1, rightIdx];
}

longestPalindrom("abaxxabazfzzfz");
longestPalindrom("abaxyzzyxf");
