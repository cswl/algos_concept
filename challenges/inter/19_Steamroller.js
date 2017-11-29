
function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten);
  }, []);
}

steamrollArray([1, [2], [3, [[4]]]]);
