// algoExpert's solution
function nonConstructibleChange(changesArr) {
  changesArr = changesArr.sort((a, b) => a - b);
  let acc = 0;

  for (let i = 0; i < changesArr.length; i++) {
    if (changesArr[i] > acc + 1) return acc + 1;
    acc += acc + changesArr[i];
  }

  return acc;
}
