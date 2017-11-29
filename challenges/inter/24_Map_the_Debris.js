
function orbitalPeriod(arr) {
  
  var op_arr = arr.map((e)=> {
    return {
      "name" : e.name,
      "orbitalPeriod" : calc_orbital_period(e.avgAlt)
    };
  });
  
  function calc_orbital_period(avgalt) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
    return Math.round(2 * Math.PI * Math.sqrt(Math.pow( earthRadius + avgalt, 3 ) / GM ));
  }
  
  return op_arr;
}
