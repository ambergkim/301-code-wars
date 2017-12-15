function capitalize(s){
  let str = s;
  let str1, str2;
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (i % 2 === 0) {
      arr1.push(letter.toUpperCase());
      arr2.push(letter);
    } else {
      arr1.push(letter);
      arr2.push(letter.toUpperCase());
    }
  }
  str1 = arr1.join('');
  console.log('str1 ' + str1);
  str2 = arr2.join('');
  console.log('str2 ' + str2);
  return [str1, str2];
};