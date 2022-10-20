let log = console.log;
function albhabet(s){
    s = s.toLowerCase();
    for(let i = 0; i < s.length - 1; i++){
        if(!s.charAt(i) || s.charAt(i) <= s.charAt(i + 1)){
            return false;
        }
    }
    return true;
}
log(albhabet('123abs'))
log(albhabet('a'))
