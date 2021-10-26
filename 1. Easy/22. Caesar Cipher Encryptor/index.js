function ceasarEncryptor(str, incrementBy) {
  const encrypted = new Array(str.length);

  for (let i = 0; i < str.length; i++) {
    let uniCode = str.charCodeAt(i) + incrementBy;
    if (uniCode > 122) {
      uniCode = uniCode - 122 + 96;
    }
    encrypted[i] = String.fromCharCode(uniCode);
  }

  return encrypted.join("");
}

ceasarEncryptor("xyz", 2);
