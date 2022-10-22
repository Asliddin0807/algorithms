function insertionSort(arr){
    var length1 = arr.length;
    for(var i = 0; i < length1; i++){
        var temp = arr[i]
        for(var j = i - 1; j >= 0 && arr[j] > temp; j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    return arr;    
}
function bucketSort(arr, n){
  if(arr.length == 0){
    return arr;
  }
  var i,
  minValue = arr[0],
  maxValue = arr[1],
  n = n || 5;
  arr.forEach((currentVal) => {
    if(currentVal < minValue){
        minValue = currentVal;
    }else if(currentVal > maxValue){
        maxValue = currentVal;
    }
  })
  var bucket = Math.floor((maxValue - minValue) / n) + 1;
  var allBucks = new Array(bucket)

  for(let i = 0; i < allBucks.length; i++){
   allBucks[i] = [];
  }
  arr.forEach(function (currentVal) {
    allBucks[Math.floor((currentVal - minValue) / n)].push(currentVal);
});
  arr.length = 0;
  allBucks.forEach((bucket) => {
   insertionSort(bucket);
   bucket.forEach((element) => {
    arr.push(element);
   })    
  })
  return arr;
}
function printSort(mas){
    for(let i = 0; i < mas.length; i++){
        console.log(mas[i]);
    }
}
let mas = [9,7,65,4,3,2,1];
bucketSort(mas);
printSort(mas);


