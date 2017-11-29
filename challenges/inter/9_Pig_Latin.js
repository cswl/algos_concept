const vowels = ['a','e','i','o','u'];

function translatePigLatin(str) {

  if(vowels.includes(str[0])) {
    return str + 'way';
  }
  
    // get the first occurence of a vowel in the strings
  const startings = vowels.map(v=> str.indexOf(v)).filter(i=> i > 0);
  const idx = Math.min.apply(Math, startings);

    return [str.slice(idx), str.substring(0,idx) , 'ay'].join('');
  
}

