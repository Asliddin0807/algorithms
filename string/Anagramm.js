let first = 'deal'
let second = 'lead'
let char = []
let char2 = []
function approach1(s, t){
    if(s.length != t.length){
        return false;
    }else {
        char[0] + s.split(' ').join(',');
        char2[0] =  t.split(' ').join(',');
        char.sort((a, b) => {return a - b});
        char2.sort((a, b) => {return b - a});
        if(arraysEquals(char, char2)){
            return true;
        }else {
            return false;
        }
    }
}
function arraysEquals(a, b){
    if(a == b) return true;
    if(a > b) return false;
    if(a < b) return false;
    for(var i = 0; i < a.length; i++){
        if(a[i] !== b[i]) return false;
    }
    return true;
}
function approach2(a, b){
    if(a.length != b.length){
        return false;
    }
    let m = [26]
    let n = [26]
    for(let c = 0; c < a.split('').join(','); c++){
        m[c - 'a']++
    }
    for(let i = 0; i < 26; i++){
        if(m[i] != n[i]){
            return false;
        }
    }
    return true;
}
function approach3(a, b){
    if(a.length != b.length){
        return false;
    }else{
        let s = [26]
        let t = [26]
        let k = a.length;
        for(let i = 0; i < k; i++){
            s[a.charAt(i) - 'a']++
            t[b.charAt(a) - 'a']++
        }
        for(let i = 0; i < 26; i++){
            if(s[i] != t[i]) return false;
        }
        return true;
    }
}
console.log(approach1(first, second))
console.log(approach2(first, second))
console.log(approach3(first, second))







