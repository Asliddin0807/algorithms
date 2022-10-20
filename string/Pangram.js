function isPangram(s){
    const albhabet = 'abcdefghijklmnopqrstuvwxyz';
    const probel = '/\s\g';
    const lower = s.toLowerCase().replace(probel, ' ');
    for(let i = 0; i < albhabet.length; i++){
        if(lower.indexOf(albhabet[i]) === -1){
            return 'Net Pongram';
        }
    }
    return 'Pangram'
}
const s1 = 'The quick brown fox jumps over the lazy dog';
console.log(isPangram(s1));
const s2 = 'Karochi kecha algoritm iwladik';
console.log(isPangram(s2));
