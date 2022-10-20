function binaryInsertSort(arr){
    for(let i = 0; i < arr.length; i++){
        let temp = arr[i]
        let low = 0;
        let high = i - 1;

        while(low <= high){
            let mid = (low + high) / 2
            if(temp < arr[mid]){
                high = mid - 1 
            }else
            {
                low = mid + 1;
            }
        }
        for(let j = i; j >= low + 1; j--){
            arr[j] = arr[j - 1]
        }
        // arr[low] = temp;
    }
    return arr;
}
var mas = [546, 35456, 235346675, 3245]
console.log(binaryInsertSort(mas));
