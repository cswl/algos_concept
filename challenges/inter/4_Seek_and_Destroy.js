
function destroyer(arr,...elems) {
  return arr.filter(e=> !elems.includes(e));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
