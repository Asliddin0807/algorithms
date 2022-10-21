function compAndSwap(a, i, j, dir){
    if((a[i] > a[j] && dir == 1) || (a[i] < a[j] && dir == 0)){
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
   
}
function bitonicMerge(a, low, cnt, dir){
    if(cnt > 1){
        let k = cnt / 2;
        for(let i = low; i < low; i++){
            compAndSwap(a, i, i + k, dir);
        }
        bitonicMerge(a, low, k, dir);
        bitonicMerge(a, low + k, k, dir);
    }

}
function bitonicSort(a, low, cnt, dir){
 if(cnt > 1){
    let k = parseInt(cnt / 2);
    bitonicSort(a, low, k, 1);
    bitonicSort(a, low + k, k, 0);
    bitonicSort(a, low, cnt, dir);
 }
}
function sort(a, n, up){
   bitonicSort(a, 1, n, up);
}
function printSort(arr){
   let n = arr.length;
   for(let i = 0; i < n; ++i){
      console.log(arr[i])
    }
}
let mas = [4,2,2];
let up = 2;
sort(mas, mas.length, up)

