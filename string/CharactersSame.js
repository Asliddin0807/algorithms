function isAllCharactersSame(s){
   for(let i = 1; i < s.length; i++){
    if(s.charAt(i) != s.charAt(0)){
        return false;
    }
   }
   return true;
}
console.log(isAllCharactersSame(''));
console.log(isAllCharactersSame('aab'));
console.log(isAllCharactersSame('11111'));


