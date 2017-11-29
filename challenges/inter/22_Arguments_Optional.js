function addTogether(a, b) {
  
  // check if a or b is not a number and b is not undefined
  if (typeof a !== 'number' || (b !== undefined && typeof b !== 'number')) {
    return;
  }
  
  // if b is undefined then only a was given
  if(b === undefined) {
    return function(n) {
      if(n !== undefined && typeof n !== 'number' ) {
        return;
      }
      return a+n;
    };
  }
  
 // return sum for when both a and b are numbers
 return a + b;

}