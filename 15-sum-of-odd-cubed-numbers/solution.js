function cubeOdd(arr) {
  let isUndefined = false;
  arr.forEach(item => {
      if (typeof item !== 'number') {
        isUndefined = true;
      } else {
        console.log(item);
      }
    }
  );
  if (isUndefined) {
    return undefined;
  }
  return arr.map(number => {
    return Math.pow(number, 3);
  }).filter(number => {
    return number % 2 === 1 || number % 2 === -1;
  }).reduce((acc, cur) => {
    return acc + cur;
  });;
}