
function findLongestWord(str) {
  return  Math.max.apply(Math, str.split(' ').map((str)=>str.length));
}

findLongestWord("The quick brown fox jumped over the lazy dog");
