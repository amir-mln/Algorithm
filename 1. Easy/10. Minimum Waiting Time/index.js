function minWaitingTime(timeArr) {
  let acc = 0,
    acc2 = 0;
  timeArr = timeArr.sort((a, b) => a - b);
  for (let i = 1; i < timeArr.length; i++) {
    acc += timeArr[i - 1];
    acc2 += acc;
  }
  return acc2;
}

minWaitingTime([3, 2, 1, 2, 6]);
