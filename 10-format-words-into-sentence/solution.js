function formatWords(words){
  let arr = words;
  console.log('' + words);
  if (words === null || words.length === 0) {
    return '';
  }
  if (words.length === 1 && words[0] === '') {
    return '';
  }
  for (let i = 0; i < words.length; i++) {
    current = words[i];
    if (current === '') {
      arr.splice(i, 1);
      i--;
    }
  }
  let string = arr[0];
  for (let i = 1; i < arr.length-1; i++) {
    current = words[i];
    string += `, ${arr[i]}`;
  }
  if (arr.length > 1) {
    string += ` and ${arr[arr.length-1]}`;
  }
  console.log('string ' + string);
  return string;
}