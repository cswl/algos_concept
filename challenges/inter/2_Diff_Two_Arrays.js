
function diffArray(arr1, arr2) {
  // we can just join the two array, and remove all duplicates
  var newArr = arr1.concat(arr2);
  return unique(newArr);
}

function unique(arr) {
  // filter the array and keep only elements that appear in it 1 or less times
  return arr.filter((el, i, arr) => (arr.filter(e => e === el).length <= 1));
}


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
