
function reverseString(str) {
  return str.split('').reverse().join('');
}

function palindrome(str) {
  str = str.replace(/[\W_]+/g,'');
  return str.toLowerCase() === reverseString(str).toLowerCase();
}



palindrome("eye");
