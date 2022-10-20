function Lower(s){
  let char = s.split('');
  for(let i = 0; i < char.length; i++){
    if(char[i].toUpperCase()){
        char[i] = char[i].toLowerCase();
    }
  }
  return char;
}
console.log(Lower('ABS'))