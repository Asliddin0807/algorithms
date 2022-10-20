let seet = new Set()
seet.add('a','b','c');
function hasWovles(input){
    if(input == null){
        return false;
    }
    input = input.toLowerCase()
    for(let i = 0; i < input.length; i++){
        if(seet.has(input.charAt(i))){
            return true;
        }
    }
    return false;
}

console.log(hasWovles('a'))