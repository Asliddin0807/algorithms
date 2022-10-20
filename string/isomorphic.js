let hashMap = new Map();
let hashSet = new Set();
function checString(s, t){
    if(s.length != t.length){
        return false;
    }
    for(let i = 0; i < s.length; i++){
        let char = s.charAt(i)
        let char2 = t.charAt(i)
        if(hashMap.has(char) == true){
            if(hashMap.get(char) !== char2){
                return false;
            } 
        }else{
            if(hashSet.has(char2)){
                return false;
            }
            hashMap.set(char, char2)
            hashSet.add(char2);
        }
    }
    return true;
}
str1 = "ABCA";
str2 = "XYZX";
console.log(checString(str1, str2));