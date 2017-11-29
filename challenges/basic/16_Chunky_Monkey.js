
function chunkArrayInGroups(arr, size) {
    var res=[], chunk=0, count=0;
     while(count < arr.length) {
       res.push(arr.slice(count,count+size));
       count+=size;
     }
  return res;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
