
function uniteUnique(...arr) {
  // flatten the array then pass it to set to remove duplicates 
  return Array.from(new Set(flatten(arr)));
}

function flatten (a)  {
  return [].concat.apply([], a);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
