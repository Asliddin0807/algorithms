var log = console.log;
function swapString(a, i, j){
  let arr = a.split('');
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return (arr).join('')
}
function permute(str, start, end){
   if(start == end - 1){
     log(str);
   }else{
     for(let i = start; i < end;  i++){
        str = swapString(str, start, i)
        permute(str, start + 1, end);
        str = swapString(str, start, i);
     }

   }

}
let str = 'ABC'
let len = str.length;
log(permute(str, 0, len));