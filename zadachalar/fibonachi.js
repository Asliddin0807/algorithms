function app(n){
   if(n == 1 || n == 2){
    return 1;  
   }
   return app(n - 1) + app(n - 2);

}
function fibonachi(n){
    for(let i = 3; i <= n; i++){
        console.log(app(i));
    }
}
fibonachi(6)