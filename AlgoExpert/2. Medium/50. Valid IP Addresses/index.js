function ipAddresses(ip, prev = "") {
  if (!ip) return prev;
  const combinations = new Set();

  for (let i = 1; i <= 3; i++) {
    const sub = ip.substring(0, i);
    const afterSub = ip.substring(i);
    if (+sub > 256) continue;
    const newPrev = prev ? prev + "." + sub : sub;
    let combos = ipAddresses(afterSub, newPrev);

    if (typeof combos == "object") {
      combos.forEach(combinations.add, combinations);
      continue;
    } else if (combos.match(/\./g).length == 3) {
      combinations.add(combos);
    }
  }

  return combinations;
}

ipAddresses("1921680");
