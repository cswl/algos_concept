
function largestOfFour(arr) {
  var res = [];
  arr.forEach((a)=> {
      res.push(Math.max.apply(Math,a));
  });
  return res;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
