function solution(str){
  let reversed = '';
  for (let i = str.length; i > 0; i--) {
    reversed += str[i-1];
  }
  return reversed;
}