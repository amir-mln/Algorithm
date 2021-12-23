// My first solution
function validateSubseq(seq, subSeq) {
  let t = [];
  for (let i = 0; i < seq.length; i++) {
    if (subSeq.includes(seq[i])) {
      t.push(seq[i]);
    }
  }

  return t.toString() == subSeq.toString();
}

// My second solution
function validateSubseq(seq, subSeq) {
  for (let i = 1; i < subSeq.length; i++) {
    let index1 = seq.findIndex((x) => subSeq[i - 1] == x);
    let index2 = seq.findIndex((x) => subSeq[i] == x);
    if (index1 > index2) {
      return false;
    }
  }
  return true;
}

// AlgoExpert's solution
function validateSubseq(seq, subSeq) {
  let subSeqIndex = 0;

  for (let i = 0; i < seq.length; i++) {
    if (seq[i] == subSeq[subSeqIndex]) subSeqIndex++;
  }

  return subSeqIndex == subSeq.length;
}

validateSubseq([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]);
