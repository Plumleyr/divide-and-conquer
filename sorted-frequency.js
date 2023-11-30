function sortedFrequency(arr, val) {
    let sortedFrequency = 0;
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while(leftIdx <= rightIdx){
        let midIdx = Math.floor((leftIdx + rightIdx) /2 );
        if(arr[midIdx] < val){
            leftIdx = midIdx + 1
        } else if( arr[midIdx] > val ) {
            rightIdx = midIdx - 1
        } else if ( arr[midIdx] === val && arr[leftIdx] !== val && arr[rightIdx] !== val){
            leftIdx += 1;
            rightIdx -= 1;
        }else if ( arr[midIdx] === val && arr[leftIdx] !== val){
            leftIdx += 1
        }else if ( arr[midIdx] === val && arr[rightIdx] !== val){
            rightIdx -=1
        }else{
            sortedFrequency = ( midIdx - leftIdx ) + ( rightIdx - midIdx ) + 1
            return sortedFrequency
        }
    }
    return -1
}

module.exports = sortedFrequency