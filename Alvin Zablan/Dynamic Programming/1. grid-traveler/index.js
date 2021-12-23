// O(x * y):time O(x+y):space
function gridTraveler(x, y, mem = {}) {
  const key = x + "-" + y;
  if (key in mem) return mem[key];
  if (x == 0 || y == 0) return 0;
  if (x == y && y == 1) return 1;

  mem[key] = gridTraveler(x - 1, y, mem) + gridTraveler(x, y - 1, mem);

  return mem[key];
}

gridTraveler(18, 18);
