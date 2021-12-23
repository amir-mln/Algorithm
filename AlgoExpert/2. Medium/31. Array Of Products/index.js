function arrOfProducts(array) {
  let multiplicationOfAll = array.reduce((acc, val) => acc * val, 1);

  return array.map((val) => multiplicationOfAll / val);
}

arrOfProducts([5, 1, 4, 2]);
