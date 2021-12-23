const fibNums = [0, 1];

function findTheFibo(numIndex) {
  if (fibNums[numIndex]) return fibNums[numIndex];
  for (let i = 2; i <= numIndex; i++) {
    if (fibNums[i]) continue;
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[numIndex];
}
function productFib(prod) {
  let i = 2,
    firstNum,
    secondNum;
  while (true) {
    if (findTheFibo(i + 1) * findTheFibo(i) >= prod) {
      firstNum = findTheFibo(i);
      secondNum = findTheFibo(i + 1);
      break;
    }
    i++;
  }
  return [firstNum, secondNum, firstNum * secondNum === prod];
}

console.log(productFib(4895));
