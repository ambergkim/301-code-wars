function insertDash(num) {
  var str = num.toString().split('');
  var newStr = [];
  newStr.push(str[0]);
  for (var i = 1; i < str.length; i++) {
    var currentNewStrL = newStr.length;
    if ((parseInt(newStr[currentNewStrL-1]) % 2 === 1) && (parseInt(str[i] % 2) === 1)) {
      newStr.push('-');
      newStr.push(str[i]);
    } else {
      newStr.push(str[i]);
    }
    console.log('new string: ' + newStr);
  }
  return newStr.join('');
}