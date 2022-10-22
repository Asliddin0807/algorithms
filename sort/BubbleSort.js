function sortAt(arr){
   let size = arr.length;
   for(let i = 0; i < size; i++){
        for(let j = 0; j < size - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
            }
        }
   }
   console.log(arr);
}
function app(arr, s){
    for(let i = 0; i < s; i++){
        console.log(arr[i]);
    }
}
let mas = [9,7,8,6,5,4,3,2,1];
sortAt(mas)
