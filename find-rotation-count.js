
function findRotationCount(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let rotationCount = 0;
  while(leftIdx <= rightIdx){
   if(arr[leftIdx] > arr[rightIdx]){
    leftIdx ++
    rotationCount ++
   }else{
    return rotationCount
   }
  }
}

module.exports = findRotationCount