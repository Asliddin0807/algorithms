function CheckPalindrome(s){
    let j = s.length - 1;
    for(let i = 0; i < j / 2; i++){
        let x = s[i];
        let y = s[j - 1];
        if(x != y){
            return false;
        }
    }
    return true;
}
function isPalindrome1(str){
   let ans = CheckPalindrome(str);
   if(ans == true){
      console.log("passed string is palindrome ")
   }else{
      console.log("passed string not a palindrome");
   }
}
let test = 'ra';
let pest = 'recaser'
isPalindrome1(test);
isPalindrome1(pest)