let hashTable = [' ',' ', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
function words(number, curr, output, n){
    if(curr == n){
       console.log(output.join(','));
       return;
    }
    for(let i = 0; i < hashTable[number[curr]].length; i++){
        output.push(hashTable[number[curr]][i]);
        words(number, curr + 1, output, n);

        output.pop()
        if(number[curr] == 0 || number[curr] == 1){
            return;
        }

    }
}
function print(numbers, n){
  words(numbers, 0, [], n);
}
let numbers = [4, 3, 5]
let a = numbers.length;
console.log(print(numbers, a))