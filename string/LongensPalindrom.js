function longestPolindrom(str){
    if(str == null || str.length == 0){
        return '';
    }
    let n = str.length;
    let maxString = '';
    for(let i = 0; i < n; ++i){
        for(let j = i; j < n; ++j){
            if(isValid(str, i, j) == true){
                if(j - i + 1 > maxString.length){
                    maxString = str.substring(i, j + 1);
                }
            }
        }
    }
    return maxString;
}
function isValid(p, num, sum){
    let n = sum - num + 1;
    for(let i = 0; i < n / 2; i++){
       if(p.charAt(num + i) != p.charAt(sum - i)){
          return false;
       }
    }
    return true;
}
console.log(longestPolindrom('Asliddin'));