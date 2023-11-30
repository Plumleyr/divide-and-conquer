
//                L        M           R 
findRotatedIndex([37, 44, 66, 102, 10, 22], 102)

function findRotatedIndex(arr, val) {
   let leftIdx = 0;
   let rightIdx = arr.length - 1;
   while (leftIdx <= rightIdx) {
       let midIdx = Math.floor((leftIdx + rightIdx) / 2);
       if (arr[midIdx] === val) {
           return midIdx;
       } else if (arr[midIdx] >= arr[leftIdx]) {
           if (val >= arr[leftIdx] && val < arr[midIdx]) {
               rightIdx = midIdx - 1;
           } else {
               leftIdx = midIdx + 1;
           }
       } else {
           if (val > arr[midIdx] && val <= arr[rightIdx]) {
               leftIdx = midIdx + 1;
           } else {
               rightIdx = midIdx - 1;
           }
       }
   }
   return -1;
}

module.exports = findRotatedIndex