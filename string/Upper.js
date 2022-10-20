function upper(s){
    let char = s.split('');
    for(let i = 0; i < char.length; i++){
      if(char[i].toLowerCase()){
          char[i] = char[i].toUpperCase();
      }
    }
    return char;
  }
  console.log(upper('abc'))