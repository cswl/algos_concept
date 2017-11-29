/*jshint esnext: true */

function sumPrimes(num) {
  let sum = 1;
  for (let n of range(1, num, 2)) {
    // generate an array of numbers check against
    const primecheck = range(2, Math.round(Math.sqrt(n)));
    if (primecheck.every(e => n % e !== 0)) {
      sum += n;
    }
  }
  return sum;
}

// use a range function to avoid messy loops
function range(start, end, step = 1) {
  const arr = [];
  for (let i = start; i <= end; i += step) {
    arr.push(i);
  }
  return arr;
}