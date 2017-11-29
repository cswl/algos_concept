
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  collection.forEach(obj=> {
  // check if each key in source, is same in the target..
    if(Object.keys(source).every(key=> obj[key] === source[key])) {
      arr.push(obj);
    }
  });
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
