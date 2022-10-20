function left(str, d){
  let ans = str.substring(d, str.length) + str.substring(0, d);
   return ans;
}
function right(str, d)
{
    return left(str, str.length - d);
}
let text = 'Nuriddinov'
console.log(left(text, 2))
console.log(right(text, 2));
