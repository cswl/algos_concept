function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!

  // store first array in an map
  const inventories = new Map();
  arr1.forEach(([quan, item], idx) => {
    inventories.set(item, {
      q: quan,
      i: idx
    });
  });

  for (let [quan, item] of arr2) {
    if (inventories.has(item)) {
      arr1[inventories.get(item).i][0] = arr1[inventories.get(item).i][0] + quan;
    } else {
      arr1.push([quan, item]);
    }
  }
  arr1.sort((a, b) => {
    if (a[1] < b[1])
      return -1;
    if (a[1] > b[1])
      return 1;
    return 0;
  });
  return arr1;

}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];
