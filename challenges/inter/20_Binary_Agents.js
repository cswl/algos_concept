function binaryAgent(str) {
  return str.split(' ').map(e => {
    return String.fromCharCode(Number.parseInt(e,2));
  }).join('') ;
}