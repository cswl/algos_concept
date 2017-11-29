
function rot13(str) { // LBH QVQ VG!
  // map letters between ascii values, and shift using modulo 26
  var rot_str = str.split('').map(letter=> {
    var ascii_val = letter.charCodeAt(0);
    if ( ascii_val > 64 && ascii_val < 91 ) {
     var starting_val = ascii_val - 65;
     var shifted_val = ((starting_val+ 13) % 26) + 65;
        return String.fromCharCode(shifted_val);
        }
        return letter;
  });
  return rot_str.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
