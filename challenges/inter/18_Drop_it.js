
function dropElements(arr, func) {
  // Drop them elements.
  var slicefrom = filterFirst(arr,func);
  return  ( slicefrom !== undefined) ? arr.slice(slicefrom) : [] ;
}


function filterFirst(arr, pfn) {
  // using filter will scan the whole array.. bad
  // break in while loops won't be optimized.. bad
  var found = false;
  var len = arr.length;
  var idx = 0;
  while(!found && idx < len) {
      found = pfn(arr[idx]);
      ++idx;
  }
  
  return (found) ? idx - 1 : undefined;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
