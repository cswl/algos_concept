
function repeatStringNumTimes(str, num) {
  if (num <= 0 ) {
    return "";
  }
  
  // we only have to loop num-1 times
  var res=str;
  while ( num > 1) {
    console.log(num);
    res+=str;
    num--;
  }
  return res;
}