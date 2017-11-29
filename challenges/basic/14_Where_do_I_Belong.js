
function getIndexToIns(arr, num) {
  var idx;
  arr.sort((a,b)=> a-b);
  // optimal case
    if(num >= arr[arr.length-1] ) {
      return arr.length;
    }
  // check the number greater than or equal to num
  arr.some((e,i)=> {
    if(e >= num) {
      idx = i;
      return true;
    }
  });
  return idx;
}

getIndexToIns([40, 60], 50);
