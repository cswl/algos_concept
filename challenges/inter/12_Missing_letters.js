
function fearNotLetter(str) {
  const start = str.charCodeAt(0);
  let missing;
  
  ascii_values = str.split('').map(c=> String.charCodeAt(c)); 
  
  // use for-loop for breaking early..
  for (let i=0; i< ascii_values.length; i++) {
    const el = ascii_values[i];
    // single letter is missing, so just check the arthemetic sequence.
    const n = start + i;
    if (el !== n) {
      missing = n;
      // console.log(el, start + i)
      break;
    }
  }
 
  return missing ? String.fromCharCode(missing) : missing;
}

