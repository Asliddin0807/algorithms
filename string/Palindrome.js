function CheckPalindrome(s){
   
    let j = s.length;

    for(let i = 0; i < j / 2; i++){
        if(s[i].toLowerCase() !== s[j - 1 - i].toLowerCase()){
            return 'not palindrome'
        }
    }
    return 'is a palindrome'
}
let test = 'Zaz';
let pest = 'recaser'
console.log(CheckPalindrome(test));
console.log(CheckPalindrome(pest));
