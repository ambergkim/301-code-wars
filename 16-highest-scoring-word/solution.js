function high(x){
  console.log('x: ' + x);
  if (x.length === 0 || x === '' || x === undefined || x === null || x === ' ') {
    return undefined;
  }
  let array = x.split(' ');
  if (array[0] === '' || array[0] === 0) {
    return undefined;
  }
  console.log('initial array: ' + array);
  let highestWord = [];
  let newArray = array.map(word => {
    let letterArray = word.split('');
    let letterScore = letterArray.map(letter => letter.charCodeAt(0) - 96)
      .reduce((total, cur) => total + cur);
    console.log('word: ' + word + '. score: ' + letterScore);
    return {
      word: word,
      score: letterScore
    };
  }).sort(function(a, b) {
    let wordA = a.score;
    let wordB = b.score;
    if (wordA < wordB) {
      return -1;
    }
    if (wordA > wordB) {
      return 1;
    }
    return 0;
    });
    let lastNum = newArray[newArray.length-1];
    let secondToLastNum = newArray[newArray.length-2];
   if (lastNum.score === secondToLastNum.score) {
     if (x.indexOf(lastNum.word) < x.indexOf(secondToLastNum.word)) {
       return lastNum.word;
     } else {
       return secondToLastNum.word;
     }
   } else {
     return lastNum.word;
   }
}