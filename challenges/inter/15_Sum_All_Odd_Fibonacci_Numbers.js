function sumFibs(num) {
  //  - every third fibonacci number is even
  //  - the first 3 fibonacci numbers are 1,1,2

  var a = 1,
    b = 1,
    f = 2;

  var sum_odds = 2;

  // return early if num is less than or equals 2
  if (num <= 2) {
    return sum_odds;
  }

  //  we generate 3 consecutive fibonacii numbers in a single loop, so only iterating (n -3)/3 + 1 at max
  //  10 times will be enough for numbers < 4 million since, 34th fibonacci number is > 5million

  while (f < num) {
    a = f + b;
    b = a + f;
    f = a + b;
    sum_odds += a + b;
  }

  // have to do this, to correct results 
  if (a > num) {
    sum_odds -= a;
  }
  if (b > num) {
    sum_odds -= b;
  }

  return sum_odds;
}