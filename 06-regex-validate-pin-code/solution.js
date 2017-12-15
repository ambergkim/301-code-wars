function validatePIN (pin) {
  let str = pin.toString();
  if (str.length === 4 || str.length === 6) {
    let reg = new RegExp('^[0-9]*$', 'g');
    return reg.test(str);
  } else {
    return false;
  }
}