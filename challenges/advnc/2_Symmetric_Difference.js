/*jshint esnext:true */

function sym(...args) {
  
  return args.reduce((a,b)=> {
    return unique(  undupe(a).concat(undupe(b) ));
       });
  
 }

function undupe(arr) {
  return Array.from(new Set(arr));
}

function unique(arr) {
  // filter the array and keep only elements that appear in it 1 or less times
  return arr.filter((el, i, arr) => (arr.filter(e => e === el).length <= 1));
}

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
