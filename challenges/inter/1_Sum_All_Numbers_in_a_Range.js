
function sumAll(arr) {
  // use Math.abs to get n, instead of comparing with Math.min and Math.max
  const n = Math.abs(arr[0] - arr[1]) + 1;
  // sum of arithmetic progression
  return (n * (arr[0] + arr[1]) / 2);
}

sumAll([4, 1]);