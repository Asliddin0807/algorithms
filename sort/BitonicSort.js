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
        for(let i = low; i < low + k; i++){
            compAndSwap(a, i, i + k, dir);
        }
        bitonicMerge(a, low, k, dir);
        bitonicMerge(a, low + k, k, dir);
        
    }

}
function bitonicSort(a, low, cntt, dir){
   if(cntt > 1){
    var k = cntt / 2;
    bitonicSort(a, low, k, 1);
    bitonicSort(a, low + k, k, 0);
    bitonicMerge(a, low, cntt, dir);
    }
   
}
function sort(a, N, up){
   bitonicSort(a, 0, N, up);
}
function printSort(arr){
   let n = arr.length;
   for(let i = 0; i < n; ++i){
      console.log(arr[i])
    }
}
let mas = [9,8,7,6,5,4,3,2];
let up = 1;
sort(mas,mas.length, up)
printSort(mas);

