function pairwise(arr, arg) {

  var numbers = [...arr.entries()];
  var sum = 0;

  console.log(numbers);
  var sum = sumIndexEquals(numbers, arg)
  console.log(sum);
   return sum;
}

function sumIndexEquals(entries, num, sum = 0) {
  if (entries.length < 1) {
    return sum;
  }
  const [head, ...tail] = entries;
  for (let i = 0; i < tail.length; ++i) {
    const [idx, val] = tail[i];
    console.log(head[0], idx, '  ', head[1], val)
    if (val + head[1] === num) {
      sum += head[0] + idx;
      tail.splice(i, 1);
      console.log(`FOUND MATCH ${sum}`)
    }
  }
  return sumIndexEquals(tail, num, sum)
}


pairwise([0, 0, 0, 0, 1, 1], 1)

//pairwise([1, 4, 2, 3, 0, 5], 7)
