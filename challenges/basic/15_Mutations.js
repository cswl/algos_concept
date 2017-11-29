
function mutation([firstString,secondString]) { 
  firstString = firstString.toLowerCase();
  // update: used String.prototype.includes
  return secondString.toLowerCase().split('')
    .every(e => firstString.includes(e) ); 
}

mutation(["hello", "hey"]);
