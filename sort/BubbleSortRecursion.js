function bbSortRecursion(arr, n){
    if(n == 1){
        return;
    }
    var count = 0;
    for(let i = 0; i < n - 1; i++){
        if(arr[i] > arr[i + 1]){
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
            count++;
        }

    }
    bbSortRecursion(arr, n - 1);
}
let mas = [9,78,6,4,3,5,7,8];
bbSortRecursion(mas, mas.length);
for(let i = 0; i < mas.length; i++){
    console.log(mas[i]);
}
