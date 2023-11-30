function countZeroes(arr) {
  let numberOfZeros = 0;
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while(leftIdx <= rightIdx){
        let midIdx = Math.floor((rightIdx + leftIdx)/2);
        if (arr[midIdx] !== 0){
            leftIdx = midIdx+1;
        } else if (arr[midIdx - 1] === 0){
            rightIdx = midIdx - 1;
        } else {
            numberOfZeros = arr.length - midIdx;
            return numberOfZeros
        }
    }
return numberOfZeros
}

module.exports = countZeroes