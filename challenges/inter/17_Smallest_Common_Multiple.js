
function smallestCommons([a,b]) {
  var numbers = range(a,b);
  var result  = numbers.reduce(lcm);
  return result;
}

function range(a,b) {
  var min = (a < b) ? a : b;
  var max = (a < b) ? b : a;
  var arr=[];
  for (var i = min; i <= max; ++i) {
    arr.push(i);
  }
  return arr;
}

function gcd(a,b) {
  return ( b !== 0) ? gcd(b, a % b) : a;
} 

function lcm(a,b){
  return a * b / gcd(a,b);
} 