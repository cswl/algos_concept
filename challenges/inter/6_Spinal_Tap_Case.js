
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  // first we covert " " and  "_" to "-"
  //str = str.replace(/ |-/g,'-');
  // now we change Uppercase letters to "-U"
 str = str.replace(/([A-Z])/g, function(a,b,i ) {
    return "-" + a.toLowerCase();
  });

  // now we remove " -" and "- " to a single -
  str = str.replace(/\s-|-\s/g,'-');
  // now we remove spaces, this can't be done in the previous chain..
  str = str.replace(/\s/g,'-');
  // then convet  possible "-_" and "_-" to a single -
  str = str.replace(/-_|_-/g,'-');
  // next we convert a single "_" to "-"
  str = str.replace(/_/g,'-');
 
  // we just remove the first "-" if present
  return (str[0] === '-') ? str.slice(1) : str; 
}

function normalizeSpinal() {
  
}

spinalCase('This Is Spinal Tap');
