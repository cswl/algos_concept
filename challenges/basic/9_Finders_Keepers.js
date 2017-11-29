
function findElement(arr, pfn) {
  // using filter will scan the whole array.. bad
  // break in while loops won't be optimized.. bad
  var found = false;
  var len = arr.length;
  var idx = 0;
  while(!found && idx < len) {
      found = pfn(arr[idx]);
      ++idx;
  }
  
  return (found) ? arr[idx-1] : undefined;
}