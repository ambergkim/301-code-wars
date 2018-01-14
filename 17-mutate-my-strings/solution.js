function mutateMyStrings(stringOne, stringTwo){
  let str1 = stringOne + '\n';
  let str2 = stringTwo + '\n';
  let arrayOne = str1.split('');
  let arrayTwo = str2.split('');
  let array = [];
  array.push(str1);
  for (let i = 0; i < arrayOne.length; i++) {
    let newArray = arrayOne;
    if (arrayOne[i] !== arrayTwo[i]) {
      newArray[i] = arrayTwo[i];
      array.push(newArray.join(''));
    }
  }
  return array.join('');
}
