function longestOfLongest(str, i, j){
   let visiter = [26];
   for(let k = i; k <= j; k++){
    if(visiter[str.charAt(k) - 'a'] == true){
        return false;
    }
     visiter[str.charAt(k) - 'a'] = true;

   }
   return true;
}
function app(str){
    var n = str.length;
    let res = 0;
    for(let i = 0; i < n; i++){
        for(let j = i; j < n; j++){
            if(longestOfLongest(str, i, j)){
                res = Math.max(res, j - i + 1);
            }
        }
    }
    return res;
}
let str = 'Asliddin';
console.log("The input string is " + str)
let op = app(str);
console.log("The length of the longest " +
"non-repeating character " + 
"substring is " + op);