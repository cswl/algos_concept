
function myReplace(str, before, after) {
  // check if first char of before is uppercase,
  if (before[0] == before[0].toUpperCase()) {
    // then capitalize the first char of replacement..
    after = capitalizeFirst(after);
  }
  return str.replace(before, after);
}

function capitalizeFirst(str) {
  return [str[0].toUpperCase()].concat(str.slice(1)).join('');
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
