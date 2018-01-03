function find_average(array) {
  return (array.reduce((acc, cur) => (acc + cur), 0)) / array.length;
}