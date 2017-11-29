
function factorialize(num) {
  var fact=1;
  while(num > 1) {
    fact = num * fact;
    num--;
    // console.log(num);
  }
  return fact;
}

factorialize(5);
