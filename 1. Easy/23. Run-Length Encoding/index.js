function encode(str) {
  let encoded = [];
  let i = 0;
  while (i < str.length) {
    let ch = str[i];
    let regex = new RegExp(`${ch}{1,9}`, "g");
    for (const r of str.match(regex)) {
      encoded.push(`${r.length}${ch}`);
      i += r.length;
    }
  }

  return encoded.join("");
}

encode("AAAAAAAAAAAAAAAAAAAABBBBBCCCCDEEEF");
