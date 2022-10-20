function app(n){
    let mas = [];
    for(let i = 0; i <= n; i++){
      isRandom(mas = [10])
      }
    console.log(mas);
    console.log(isAverage(mas));
}
function isRandom(a){
    for(let i = 0; i < a.length; i++){
       if(i < 9){
         a.unshift(i);
       }else if(i > 9){
         a.push(i);
       }
    }
}
function isAverage(m){
   let length = m.length;
   let summOfArr = m.reduce((acc, cur) => acc + cur)
   return summOfArr / length;
}
app(10)