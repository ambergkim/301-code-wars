function abbrevName(name){
    let strArr = name.split(' ');
    return `${strArr[0][0].toUpperCase()}.${strArr[1][0].toUpperCase()}`;
  }