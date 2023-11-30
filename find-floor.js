function findFloor(arr, val) {
  let leftIdx = 0
  let rightIdx = arr.length - 1
  while( leftIdx <= rightIdx ){
    let midIdx = Math.floor((leftIdx + rightIdx) / 2)
    if(arr[midIdx] === val){
      return arr[midIdx]
    }else if(arr[midIdx] < val){
      if(arr[midIdx + 1] > val){
        return arr[midIdx]
      }else{
      leftIdx = midIdx + 1
      }
    }else if(arr[midIdx] > val ){
      rightIdx = midIdx - 1
    }else{
      return arr[midIdx]
    }
  }
  return -1
}
module.exports = findFloor