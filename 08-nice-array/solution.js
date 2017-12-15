function isNice(arr){
  let array = arr;
  let isNice = true;
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    let higher = number + 1;
    let lower = number - 1;
    console.log(array);
    console.log(array[i]);
    console.log('higher number: ' + higher);
    console.log('lower number: ' + lower);
    console.log('higher index: ' + array.indexOf(higher));
    console.log('lower index: ' + array.indexOf(lower));
    if ((array.indexOf(higher) === -1) && (array.indexOf(lower) === -1)){
      return false;
    }
  }
  return isNice;
}