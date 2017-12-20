function isNice(arr){
  let array = arr;
  if (array.length === 0) {
    return false;
  }
  let isNice = true;
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    let higher = number + 1;
    let lower = number - 1;
    console.log(array);
    console.log(array[i]);
    if ((array.indexOf(higher) === -1) && (array.indexOf(lower) === -1)){
      return false;
    }
  }
  return isNice;
}