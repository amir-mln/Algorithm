// my solution based on AlgoExpert's explanation
const closeBrs = { "}": "{", ")": "(", "]": "[" };
const openBrs = { "[": 0, "{": 0, "(": 0 };

function matchingBrackets(brackets) {
  const stack = [];
  for (const ch of brackets) {
    if (openBrs.hasOwnProperty(ch)) {
      stack.push(ch);
      continue;
    }

    if (closeBrs[ch] == stack[stack.length - 1]) {
      stack.pop();
      continue;
    }

    return false;
  }

  return true;
}

// AlgoExpert's solution

// O(n) time | O(n) space
function balancedBrackets(string) {
  const openingBrackets = "([{";
  const closingBrackets = ")]}";
  const matchingBrackets = { ")": "(", "]": "[", "}": "{" };
  const stack = [];

  for (const char of string) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      if (stack.length == 0) {
        return false;
      }
      if (stack[stack.length - 1] === matchingBrackets[char]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

matchingBrackets("(({}[][]){})");
matchingBrackets("[}(){()]");
matchingBrackets("{[[({})]]}");
matchingBrackets("{[[({})]]]}");
