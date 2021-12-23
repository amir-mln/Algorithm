function solution(number) {
  // convert the number to a roman numeral
  const numArr = [...number.toString()].map((ch) => +ch);
  const digits = numArr.length;
  const rates = {
    1: {
      1: "I",
      4: "IV",
      5: "V",
      9: "IX",
    },
    2: {
      1: "X",
      4: "XL",
      5: "L",
      9: "XC",
    },
    3: {
      1: "C",
      4: "CD",
      5: "D",
      9: "CM",
    },
    4: "M",
  };
  let roman = "";
  for (let i = 0; i < digits; i++) {
    if (numArr[i] !== 0) {
      // prettier-ignore
      let rate = digits - i, num = numArr[i];
      if (rate === 4) {
        roman += rates[rate].repeat(num);
      } else {
        if (num <= 3) {
          roman += rates[rate][1].repeat(num);
        } else if (num > 5 && num < 9) {
          roman += rates[rate][5] + rates[rate][1].repeat(num - 5);
        } else {
          roman += rates[rate][num];
        }
      }
    }
  }
  return roman;
}
