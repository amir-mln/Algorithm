function validCities(distances, fuels, mpg) {
  let remainingFuel;
  for (let city = 0; city < distances.length; city++) {
    remainingFuel = 0;
    for (let i = 0; i < distances.length; i++) {
      let travelIndex =
        i + city >= distances.length ? i + city - distances.length : i + city;
      const required = distances[travelIndex];
      const supply = fuels[travelIndex] * mpg + remainingFuel;
      remainingFuel = supply - required;

      if (remainingFuel < 0) {
        break;
      }
    }
    if (remainingFuel >= 0) return city;
  }

  return -1;
}

console.log(validCities([5, 25, 15, 10, 15], [1, 2, 1, 0, 3], 10));
