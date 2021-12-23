// O(n*m):time O(m):space m:target n:numbers
function canSum(target, numbers, mem = {}) {
  if (target in mem) return mem[target];
  if (target < 0) return false;
  if (target == 0) return true;

  for (const number of numbers) {
    if (canSum(target - number, numbers)) {
      mem[target - number] = true;
      return true;
    }
  }

  mem[target] = false;
  return false;
}

console.log(canSum(8, [3]));
