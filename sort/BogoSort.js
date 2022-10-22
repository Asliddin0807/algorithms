function isSorted(a, n){
   for(let i = 1; i < a.length; i++){
    if(a[i] < a[i - 1]){
        return false;
    }
   }
   return true;
}
function swap(arr, x, y){
    let temp = arr[x]
    arr[x] = arr[y]
    arr[y] = temp;
    return temp;
}
function shuffle(arr, n){
   let i;
   let j = n;
   for(i = 0; i < n; i++){
    var ind = Math.floor(Math.random() * n)
    swap(arr, j-i-1, ind)
   }
   return arr;
}
function bogoSort(arr, n){
    while(!isSorted(arr, n)){
        arr = shuffle(arr, n);
    }
    return arr;
}
function printSort(a, n){
    for(let i = 0; i < n; i++){
        console.log(a[i]);
    }   
}
let mas = ['a', 't', 'b', 's', 'g'];
let size = mas.length;
mas = bogoSort(mas, size);
printSort(mas, size);
